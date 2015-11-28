/**
 * 
 */
package org.bluecross.persistence.data;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;

/**
 * @author x074134
 *
 */
@Entity
@SequenceGenerator(name = "VOLUNTEER_SEQ", sequenceName = "VOLUNTEER_SEQ", allocationSize = 1)
public class Volunteer {

	@Id
	@Column(name = "USER_ID")
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator="VOLUNTEER_SEQ")
	private int userId;

	@Column(name = "STATUS")
	private String status;

	@Column(name = "FIRST_NAME")
	private String firstName;

	@Column(name = "LAST_NAME")
	private String lastName;

	@Column(name = "GENDER")
	private String gender;

	@Column(name = "DATE_OF_BIRTH")
	private Date dateOfBirth;

	@Column(name = "ADDRESS")
	private String address;

	@Column(name = "CITY")
	private String city;

	@Column(name = "COUNTRY")
	private String country;

	@Column(name = "PINCODE")
	private String pincode;

	@Column(name = "MOBILE_NUMBER")
	private String mobileNumber;

	@Column(name = "LAND_PHONE")
	private String landPhone;

	@Column(name = "EMERGENCY_NUMBER")
	private String emergencyNumber;

	@Column(name = "RELATION_EMRGNCY_CNTCT")
	private String relationEmergencyContact;

	@Column(name = "EMAIL_ID")
	private String emailId;

	@Column(name = "REASON_FOR_VOLUNTEERING")
	private String reasonForVolunteering;

	@Column(name = "PREVIOUS_EXPERIENCES")
	private String previousExperiences;

	@Column(name = "AVILABILITY_WEEK_HRS")
	private String availabilityWeekHours;

	@Column(name = "AVILABLTY_DAYS")
	private String availabilityDays;

	@Column(name = "PREV_VOLUNTEER_JOBS")
	private String prevVolunteerJobs;

	@Column(name = "CALL_AT_WORK")
	private String callAtWork;

	@Column(name = "WORK_NUMBER")
	private String workNumber;

	@Column(name = "EDUCATIONAL_EXPERIENCE")
	private String educationalExperience;

	@Column(name = "HOW_YOU_KNOW")
	private String howYouKnow;

	@Column(name = "ADDITIONAL_INFO")
	private String additionalInfo;

	/**
	 * @return the userId
	 */
	public int getUserId() {
		return userId;
	}

	/**
	 * @param userId
	 *            the userId to set
	 */
	public void setUserId(int userId) {
		this.userId = userId;
	}

	/**
	 * @return the status
	 */
	public String getStatus() {
		return status;
	}

	/**
	 * @param status
	 *            the status to set
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
	 * @param firstName
	 *            the firstName to set
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
	 * @param lastName
	 *            the lastName to set
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
	 * @param gender
	 *            the gender to set
	 */
	public void setGender(String gender) {
		this.gender = gender;
	}

	/**
	 * @return the dateOfBirth
	 */
	public Date getDateOfBirth() {
		return dateOfBirth;
	}

	/**
	 * @param dateOfBirth
	 *            the dateOfBirth to set
	 */
	public void setDateOfBirth(Date dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}

	/**
	 * @return the address
	 */
	public String getAddress() {
		return address;
	}

	/**
	 * @param address
	 *            the address to set
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
	 * @param city
	 *            the city to set
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
	 * @param country
	 *            the country to set
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
	 * @param pincode
	 *            the pincode to set
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
	 * @param mobileNumber
	 *            the mobileNumber to set
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
	 * @param landPhone
	 *            the landPhone to set
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
	 * @param emergencyNumber
	 *            the emergencyNumber to set
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
	 * @param relationEmergencyContact
	 *            the relationEmergencyContact to set
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
	 * @param emailId
	 *            the emailId to set
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
	 * @param reasonForVolunteering
	 *            the reasonForVolunteering to set
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
	 * @param previousExperiences
	 *            the previousExperiences to set
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
	 * @param availabilityWeekHours
	 *            the availabilityWeekHours to set
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
	 * @param availabilityDays
	 *            the availabilityDays to set
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
	 * @param prevVolunteerJobs
	 *            the prevVolunteerJobs to set
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
	 * @param callAtWork
	 *            the callAtWork to set
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
	 * @param workNumber
	 *            the workNumber to set
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
	 * @param educationalExperience
	 *            the educationalExperience to set
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
	 * @param howYouKnow
	 *            the howYouKnow to set
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
	 * @param additionalInfo
	 *            the additionalInfo to set
	 */
	public void setAdditionalInfo(String additionalInfo) {
		this.additionalInfo = additionalInfo;
	}

}
