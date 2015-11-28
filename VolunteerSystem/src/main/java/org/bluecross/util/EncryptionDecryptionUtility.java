package org.bluecross.util;

import java.util.Base64;

import javax.crypto.Cipher;
import javax.crypto.KeyGenerator;
import javax.crypto.SecretKey;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

/**
 * This is an utility component to encrypt plain text to cipher text and cipher text to plain text.
 */
@Component
public class EncryptionDecryptionUtility {

    private final Logger LOGGER = LoggerFactory.getLogger(EncryptionDecryptionUtility.class);

    private Cipher cipher;
    private SecretKey secretKey;

    public EncryptionDecryptionUtility() {
        try {
            KeyGenerator keyGenerator = KeyGenerator.getInstance("AES");
            keyGenerator.init(128);
            secretKey = keyGenerator.generateKey();
            cipher = Cipher.getInstance("AES");
        }
        catch (Exception e) {
            LOGGER.error("Exception occured while creating secrete key and cypher" + e.getMessage());
        }
    }

    /**
     * Convert plain text to cipher text.
     * 
     * @param plainText
     * @return
     * @throws Exception
     */
    public String encrypt(String plainText) throws Exception {
        byte[] plainTextByte = plainText.getBytes();
        cipher.init(Cipher.ENCRYPT_MODE, secretKey);
        byte[] encryptedByte = cipher.doFinal(plainTextByte);
        Base64.Encoder encoder = Base64.getEncoder();
        String encryptedText = encoder.encodeToString(encryptedByte);
        return encryptedText;
    }

    /**
     * Convert cipher text to plain text.
     * 
     * @param encryptedText
     * @return
     * @throws Exception
     */
    public String decrypt(String encryptedText) throws Exception {
        Base64.Decoder decoder = Base64.getDecoder();
        byte[] encryptedTextByte = decoder.decode(encryptedText);
        cipher.init(Cipher.DECRYPT_MODE, secretKey);
        byte[] decryptedByte = cipher.doFinal(encryptedTextByte);
        String decryptedText = new String(decryptedByte);
        return decryptedText;
    }
}
