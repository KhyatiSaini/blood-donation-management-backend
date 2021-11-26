const express = require('express');
const db = require('../db');
const Blood_Bank = require('../db/models/blood_bank');
const Donation = require('../db/models/donation');
const Donor = require('../db/models/donor');
const Patient = require('../db/models/patient');

const router = express.Router();

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

router.get('/donations', async (request, response, next) => {
    try {
        let results = await db.fetchDonations();
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

router.get('/bloodbanks/:name', async (request, response, next) => {
    try {
        let results = await db.fetchBloodBankByName(request.params.name);
        response.json(results);
    } catch (error) {
        console.log(error);
        response.sendStatus(500);
    }
});

router.post('/patients', async (request, response, next) => {
    try {
        let patient = new Patient(
            request.body['id'],
            request.body['name'],
            request.body['medical_condition'],
            request.body['blood_group']
        );
        let results = await db.createPatient(patient);
        response.status(200).json(results);
    } catch(error) {
        console.log(error);
        response.sendStatus(400);
    }
});

router.post('/donors', async (request, response, next) => {
    try {
        let donor = new Donor(
            request.body['id'],
            request.body['name'],
            request.body['blood_group'],
            request.body['medical_report'],
            request.body['contact_number'],
            request.body['latest_donation_date']
        );
        let results = await db.createDonor(donor);
        response.status(200).json(results);
    } catch(error) {
        console.log(error);
        response.sendStatus(400);
    }
});

router.post('/bloodBanks', async (request, response, next) => {
    try {
        let bloodBank = new Blood_Bank(
            request.body['name'],
            request.body['staff_details'],
            request.body['operating_hours'],
            request.body['address']
        );
        let results = await db.createBloodBank(bloodBank);
        response.status(200).json(results);
    } catch(error) {
        console.log(error);
        response.sendStatus(400);
    }
});

router.post('/donations', async (request, response, next) => {
    try {
        let donation = new Donation(
            request.body['donor_id'],
            request.body['patient_id'],
            request.body['blood_bank'],
            request.body['date']
        );
        let results = await db.createDonationRecord(donation);
        response.status(200).json(results);
    }
    catch (error) {
        console.log(error);
        response.statusCode(500);
    }
});

router.put('/donors/:id', async (request, response, next) => {
    try {
        let results = await db.updateDonationDate(request.params.id, request.body['date']);
        response.json(results);
    } catch (error) {
        console.log(error);
        response.sendStatus(500);
    }
});

module.exports = router;
