/**
 * 
 */
package org.bluecross.persistence.data;

import org.springframework.data.annotation.Id;

public class Volunteer {

    @Id
    private String userId;

    private String status;

    private String firstName;

    private String lastName;

    private String gender;

    private String dateOfBirth;

    private String address;

    private String city;

    private String country;

    private String pincode;

    private String mobileNumber;

    private String landPhone;

    private String emergencyNumber;

    private String relationEmergencyContact;

    private String emailId;

    private String reasonForVolunteering;

    private String previousExperiences;

    private String availabilityWeekHours;

    private String availabilityDays;

    private String prevVolunteerJobs;

    private String callAtWork;

    private String workNumber;

    private String educationalExperience;

    private String howYouKnow;

    private String additionalInfo;

    /**
     * @return the userId
     */
    public String getUserId() {
        return userId;
    }

    /**
     * @param userId the userId to set
     */
    public void setUserId(String userId) {
        this.userId = userId;
    }

    /**
     * @return the status
     */
    public String getStatus() {
        return status;
    }

    /**
     * @param status the status to set
     */
    public void setStatus(String status) {
        this.status = status;
    }

    /**
     * @return the firstName
     */
    public String getFirstName() {
        return firstName;
    }

    /**
     * @param firstName the firstName to set
     */
    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    /**
     * @return the lastName
     */
    public String getLastName() {
        return lastName;
    }

    /**
     * @param lastName the lastName to set
     */
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    /**
     * @return the gender
     */
    public String getGender() {
        return gender;
    }

    /**
     * @param gender the gender to set
     */
    public void setGender(String gender) {
        this.gender = gender;
    }

    /**
     * @return the address
     */
    public String getAddress() {
        return address;
    }

    /**
     * @param address the address to set
     */
    public void setAddress(String address) {
        this.address = address;
    }

    /**
     * @return the city
     */
    public String getCity() {
        return city;
    }

    /**
     * @param city the city to set
     */
    public void setCity(String city) {
        this.city = city;
    }

    /**
     * @return the country
     */
    public String getCountry() {
        return country;
    }

    /**
     * @param country the country to set
     */
    public void setCountry(String country) {
        this.country = country;
    }

    /**
     * @return the pincode
     */
    public String getPincode() {
        return pincode;
    }

    /**
     * @param pincode the pincode to set
     */
    public void setPincode(String pincode) {
        this.pincode = pincode;
    }

    /**
     * @return the mobileNumber
     */
    public String getMobileNumber() {
        return mobileNumber;
    }

    /**
     * @param mobileNumber the mobileNumber to set
     */
    public void setMobileNumber(String mobileNumber) {
        this.mobileNumber = mobileNumber;
    }

    /**
     * @return the landPhone
     */
    public String getLandPhone() {
        return landPhone;
    }

    /**
     * @param landPhone the landPhone to set
     */
    public void setLandPhone(String landPhone) {
        this.landPhone = landPhone;
    }

    /**
     * @return the emergencyNumber
     */
    public String getEmergencyNumber() {
        return emergencyNumber;
    }

    /**
     * @param emergencyNumber the emergencyNumber to set
     */
    public void setEmergencyNumber(String emergencyNumber) {
        this.emergencyNumber = emergencyNumber;
    }

    /**
     * @return the relationEmergencyContact
     */
    public String getRelationEmergencyContact() {
        return relationEmergencyContact;
    }

    /**
     * @param relationEmergencyContact the relationEmergencyContact to set
     */
    public void setRelationEmergencyContact(String relationEmergencyContact) {
        this.relationEmergencyContact = relationEmergencyContact;
    }

    /**
     * @return the emailId
     */
    public String getEmailId() {
        return emailId;
    }

    /**
     * @param emailId the emailId to set
     */
    public void setEmailId(String emailId) {
        this.emailId = emailId;
    }

    /**
     * @return the reasonForVolunteering
     */
    public String getReasonForVolunteering() {
        return reasonForVolunteering;
    }

    /**
     * @param reasonForVolunteering the reasonForVolunteering to set
     */
    public void setReasonForVolunteering(String reasonForVolunteering) {
        this.reasonForVolunteering = reasonForVolunteering;
    }

    /**
     * @return the previousExperiences
     */
    public String getPreviousExperiences() {
        return previousExperiences;
    }

    /**
     * @param previousExperiences the previousExperiences to set
     */
    public void setPreviousExperiences(String previousExperiences) {
        this.previousExperiences = previousExperiences;
    }

    /**
     * @return the availabilityWeekHours
     */
    public String getAvailabilityWeekHours() {
        return availabilityWeekHours;
    }

    /**
     * @param availabilityWeekHours the availabilityWeekHours to set
     */
    public void setAvailabilityWeekHours(String availabilityWeekHours) {
        this.availabilityWeekHours = availabilityWeekHours;
    }

    /**
     * @return the availabilityDays
     */
    public String getAvailabilityDays() {
        return availabilityDays;
    }

    /**
     * @param availabilityDays the availabilityDays to set
     */
    public void setAvailabilityDays(String availabilityDays) {
        this.availabilityDays = availabilityDays;
    }

    /**
     * @return the prevVolunteerJobs
     */
    public String getPrevVolunteerJobs() {
        return prevVolunteerJobs;
    }

    /**
     * @param prevVolunteerJobs the prevVolunteerJobs to set
     */
    public void setPrevVolunteerJobs(String prevVolunteerJobs) {
        this.prevVolunteerJobs = prevVolunteerJobs;
    }

    /**
     * @return the callAtWork
     */
    public String getCallAtWork() {
        return callAtWork;
    }

    /**
     * @param callAtWork the callAtWork to set
     */
    public void setCallAtWork(String callAtWork) {
        this.callAtWork = callAtWork;
    }

    /**
     * @return the workNumber
     */
    public String getWorkNumber() {
        return workNumber;
    }

    /**
     * @param workNumber the workNumber to set
     */
    public void setWorkNumber(String workNumber) {
        this.workNumber = workNumber;
    }

    /**
     * @return the educationalExperience
     */
    public String getEducationalExperience() {
        return educationalExperience;
    }

    /**
     * @param educationalExperience the educationalExperience to set
     */
    public void setEducationalExperience(String educationalExperience) {
        this.educationalExperience = educationalExperience;
    }

    /**
     * @return the howYouKnow
     */
    public String getHowYouKnow() {
        return howYouKnow;
    }

    /**
     * @param howYouKnow the howYouKnow to set
     */
    public void setHowYouKnow(String howYouKnow) {
        this.howYouKnow = howYouKnow;
    }

    /**
     * @return the additionalInfo
     */
    public String getAdditionalInfo() {
        return additionalInfo;
    }

    /**
     * @param additionalInfo the additionalInfo to set
     */
    public void setAdditionalInfo(String additionalInfo) {
        this.additionalInfo = additionalInfo;
    }

    public String getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(String dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

}
