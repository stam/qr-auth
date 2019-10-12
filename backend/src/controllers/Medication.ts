import express from 'express';
import { getRepository } from 'typeorm';

import { Medication } from '../models/Medication';

export default class MedicationController {
  static post(req: express.Request, res: express.Response) {

    if (!req.body.name) {
      res.status(400);
      res.send('Invalid request: name field cannot be empty');
    }

    const medication = new Medication();

    medication.name = req.body.name;
    getRepository(Medication).save(medication);

    // create and store QR

    // respond with view
    res.send('blaa')
  }
}
