const express = require('express');
const db = require('../db');
const Blood_Bank = require('../db/models/blood_bank');
const Donor = require('../db/models/donor');
const Patient = require('../db/models/patient');

const router = express.Router();

router.get('/', (request, response, next) => {
    response.json({test: 'test'});
});

router.get('/patients', async (request, response, next) => {
    try {
        let results = await db.fetchPatients();
        response.json(results);
    } catch (error) {
        console.log(error);
        response.sendStatus(500);
    }
});

router.get('/donors', async (request, response, next) => {
    try {
        let results = await db.fetchDonors();
        response.json(results);
    } catch (error) {
        console.log(error);
        response.sendStatus(500);
    }
});

router.get('/bloodBanks', async (request, response, next) => {
    try {
        let results = await db.fetchBloodBanks();
        response.json(results);
    } catch (error) {
        console.log(error);
        response.sendStatus(500);
    }
});

router.get('/patients/:id', async (request, response, next) => {
    try {
        let results = await db.fetchPatientById(request.params.id);
        response.json(results);
    } catch (error) {
        console.log(error);
        response.sendStatus(500);
    }
});

router.get('/donors/:id', async (request, response, next) => {
    try {
        let results = await db.fetchDonorById(request.params.id);
        response.json(results);
    } catch (error) {
        console.log(error);
        response.sendStatus(500);
    }
});

router.get('/bloodbanks/:id', async (request, response, next) => {
    try {
        let results = await db.fetchBloodBankById(request.params.id);
        response.json(results);
    } catch (error) {
        console.log(error);
        response.sendStatus(500);
    }
});

router.post('/patients', async (request, response, next) => {
    try {
        let patient = Patient.create(request.body);
        let results = await db.createPatient(patient);
        response.status(200).json(results);
    } catch(error) {
        console.log(error);
        response.sendStatus(400);
    }
});

router.post('/donors', async (request, response, next) => {
    try {
        let donor = Donor.create(request.body);
        let results = await db.createDonor(donor);
        response.status(200).json(results);
    } catch(error) {
        console.log(error);
        response.sendStatus(400);
    }
});

router.post('/bloodBanks', async (request, response, next) => {
    try {
        let bloodBank = Blood_Bank.create(request.body);
        let results = await db.createBloodBank(bloodBank);
        response.status(200).json(results);
    } catch(error) {
        console.log(error);
        response.sendStatus(400);
    }
});

module.exports = router;
