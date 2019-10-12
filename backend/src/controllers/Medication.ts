import express from 'express';
import { getManager, getRepository } from 'typeorm';

import QR from '../utils/QR';
import { Medication } from '../models/Medication';

export default class MedicationController {
  static async post(req: express.Request, res: express.Response) {
    if (!req.body.name) {
      res.status(400);
      res.send('Invalid request: name field cannot be empty');
      return;
    }

    let medication;

    getManager().transaction(async manager => {
      medication = new Medication();

      medication.name = req.body.name;

      await manager.save(medication);

      try {
        await QR.generate(medication.id, JSON.stringify(medication));
        res.send(JSON.stringify(medication));
      } catch (e) {
        res.status(500);
        res.send(`Generating QR code failed: ${e}`);
        throw e;
      }
    });
  }

  static async verify(req: express.Request, res: express.Response) {
    const repo = getRepository(Medication);

    const medication = await repo.findOne(req.params.id);

    if (!medication) {
      res.status(404);
      res.send();
      return;
    }

    if (medication.scanned_at) {
      res.status(409);
      res.send(`Medication ${medication.id} already scanned`);
      return;
    }

    medication.scanned_at = new Date();
    repo.save(medication);

    res.send('');
  }
}
