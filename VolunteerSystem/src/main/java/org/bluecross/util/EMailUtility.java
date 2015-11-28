package org.bluecross.util;

import java.util.Properties;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
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

    @Value("#{mail.username}")
    private String username;

    @Value("#{mail.password}")
    private String password;

    @Value("#{mail.smtp.host}")
    private String smtpHost;

    @Value("#{mail.smtp.port}")
    private String smtpPort;

    private Session session = null;

    public EMailUtility() {
        Properties props = new Properties();
        props.put("mail.smtp.host", smtpHost);
        props.put("mail.smtp.socketFactory.port", smtpPort);
        props.put("mail.smtp.socketFactory.class", "javax.net.ssl.SSLSocketFactory");
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.port", smtpPort);

        session = Session.getDefaultInstance(props, new javax.mail.Authenticator() {
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication(username, password);
            }
        });
    }

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
            Transport.send(message);
            LOGGER.info("Successfully sent an email to " + emailId);
        }
        catch (MessagingException e) {
            LOGGER.error("Exception occured while sending an email: " + e.getMessage());
        }
    }
}
