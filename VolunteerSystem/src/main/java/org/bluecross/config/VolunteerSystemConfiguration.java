package org.bluecross.config;

import java.util.Properties;

import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class VolunteerSystemConfiguration {

	@Value("${mail.username}")
	private String username;

	@Value("${mail.password}")
	private String password;

	@Value("${mail.smtp.host}")
	private String smtpHost;

	@Value("${mail.smtp.port}")
	private String smtpPort;

	/**
	 * creating email session object
	 * @return
	 */
	@Bean
	public Session getSession() {
		Properties props = new Properties();
		props.put("mail.smtp.host", smtpHost);
		props.put("mail.smtp.socketFactory.port", smtpPort);
		props.put("mail.smtp.socketFactory.class", "javax.net.ssl.SSLSocketFactory");
		props.put("mail.smtp.auth", "true");
		props.put("mail.smtp.port", smtpPort);

		Session session = Session.getDefaultInstance(props, new javax.mail.Authenticator() {
			protected PasswordAuthentication getPasswordAuthentication() {
				return new PasswordAuthentication(username, password);
			}
		});
		return session;
	}

}
