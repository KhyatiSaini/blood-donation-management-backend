class Donor{
    constructor(id, name, blood_group, medical_report, contact_number, recent_donation_date) {
        this.id = id;
        this.name = name;
        this.blood_group = blood_group;
        this.medical_report = medical_report;
        this.contact_number = contact_number;
        this.recent_donation_date = recent_donation_date;
    }
}

module.exports = Donor;