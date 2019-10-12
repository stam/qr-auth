import { observable, computed } from 'mobx';
import Api from '../store/Api';

export enum ScanState {
  Scanning,
  Warning,
  Processing,
}

interface MedicationData {
  id: string;
  name: string;
}

export default class ScanBehavior {
  @observable state: ScanState = ScanState.Scanning;
  @observable medication?: MedicationData;

  @computed get isScanning() {
    return this.state === ScanState.Scanning;
  }

  @computed get isProcessing() {
    return this.state === ScanState.Processing;
  }

  @computed get isIllegal() {
    return this.state === ScanState.Warning;
  }

  validateQrCode(data: string) {
    this.medication = undefined;

    let medication;
    try {
      medication = JSON.parse(data);
    } catch (e) {
      // QR Scanned did not contain JSON
      return;
    }
    if (!medication.id || !medication.name) {
      // QR Scanned contains JSON but not our data
      return;
    }

    this.medication = medication;
  }

  handleScan = async (data: string | null) => {
    if (this.state !== ScanState.Scanning || !data) {
      return;
    }
    this.validateQrCode(data);

    if (!this.medication) {
      return;
    }

    this.state = ScanState.Processing;

    try {
      await Api.verifyMedication(this.medication.id);
      this.state = ScanState.Scanning;
    } catch (e) {
      this.state = ScanState.Warning;
    }
  };

  handleError(error: any) {
    console.log(error);
  }
}
