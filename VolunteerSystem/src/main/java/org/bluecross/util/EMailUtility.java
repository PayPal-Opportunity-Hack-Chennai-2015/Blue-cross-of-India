package org.bluecross.util;

import javax.inject.Inject;
import javax.mail.Address;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

/**
 * This is an utility class to send an email.
 */
@Component
public class EMailUtility {

    private final Logger LOGGER = LoggerFactory.getLogger(EMailUtility.class);

    @Inject
    private Session session;
    
    @Value("${mail.username}")
	private String username;
    
    /**
     * @param emailId, email To recipient address
     * @param subject, email subject
     * @param body, email body
     */
    public void sendEmail(String emailId, String subject, String body) {
        try {
            Message message = new MimeMessage(session);
            message.setFrom(new InternetAddress(username));
            message.setRecipients(Message.RecipientType.TO, InternetAddress.parse(emailId));
            message.setSubject(subject);
            message.setText(body);
            message.setFrom(new InternetAddress("do-not-reply@bluecross.org"));
            Transport.send(message);
            LOGGER.info("Successfully sent an email to " + emailId);
        }
        catch (MessagingException e) {
            LOGGER.error("Exception occured while sending an email: " + e.getMessage());
        }
    }
}
