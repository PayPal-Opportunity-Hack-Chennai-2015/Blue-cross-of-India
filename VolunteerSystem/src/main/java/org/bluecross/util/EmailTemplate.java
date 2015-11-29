/**
 * 
 */
package org.bluecross.util;

/**
 * @author x074134
 *
 */
public final class EmailTemplate {

	public static final String REGISTRATION_ACCEPTED_SUBJECT = "Bluecross volunteer registeration";
	public static final String INTERVIEW_SUBJECT = "Bluecross volunteer *Interview* scheduled";
	public static final String INDUCTION_SUBJECT = "Bluecross volunteer *Induction* scheduled";
	public static final String REGISTRATION_CONFIRMED_ADMIN_SUBJECT = "New Volunteer registered";
	public static final String REGISTRATION_REJECTED_SUBJECT = "BlueCross Volunteer registeration Rejected";
	
	private static final String REGISTRATION_ACCEPTED_MESSAGE = "\nHi %s,\n\nYour Bluecross volunteership request has been registered."
			+ "\nHere is the registration number %s.\nPlease keep this close until further communication."
			+ "\n\nBest Regards,\nBlueCross";
	private static final String INTERVIEW_MESSAGE = "\nHi %s,\n\nYour Bluecross volunteer Interview has been scheduled on %s."
			+ "\n\nBest Reagrds,\nBlueCross";
	private static final String INDUCTION_MESSAGE = "\nHi %s,\n\nYour Bluecross volunteer Induction has been scheduled on %s."
			+ "\n\nBest Reagrds,\nBlueCross";
	private static final String NEW_REGISTRATION_ADMIN_MESSAGE = "A new volunteer %s - %s has registered.";
	private static final String REGISTRATION_REJECTED_MESSAGE = "\nHi %s,\n\nYour registration has been deferred."
			+ "\nPlease reregister if interested."
			+ "\n\nBest Reagrds,\nBlueCross";
	
	public static String getRegistrationAcceptanceMessage(String fullName, String registrationNumber) {
		return String.format(REGISTRATION_ACCEPTED_MESSAGE, fullName, registrationNumber);
	}
	
	public static String getInterviewMessage(String fullName, String dateInString) {
		return String.format(INTERVIEW_MESSAGE, fullName, dateInString);
	}
	
	public static String getInductionMessage(String fullName, String dateInString) {
		return String.format(INDUCTION_MESSAGE, fullName, dateInString);
	}
	
	public static String getNewRegistrationAdminMessage(String fullName, String registrationId) {
		return String.format(NEW_REGISTRATION_ADMIN_MESSAGE, fullName, registrationId);
	}
	
	public static String getRejectedMessage(String fullName) {
		return String.format(REGISTRATION_REJECTED_MESSAGE, fullName);
	}
}
