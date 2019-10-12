import * as QRCode from 'qrcode';
import * as path from 'path';
import * as fs from 'fs';

class QR {
  static async generate(fileName: string, data: string) {
    const dataUrl = await QRCode.toDataURL(data);
    const base64Chunk = dataUrl.split(',')[1];

    fs.writeFileSync(path.join(process.cwd(), 'asdfasdfhjadsfhjk', `${fileName}.png`), base64Chunk, 'base64');
  }
}

export default QR;
