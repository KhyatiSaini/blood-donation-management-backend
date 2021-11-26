class Donation {
    constructor (donor_id, patient_id, blood_bank, date) {
        this.donor_id = donor_id;
        this.patient_id = patient_id;
        this.blood_bank = blood_bank;
        this.date = date;
    }
}

module.exports = Donation;