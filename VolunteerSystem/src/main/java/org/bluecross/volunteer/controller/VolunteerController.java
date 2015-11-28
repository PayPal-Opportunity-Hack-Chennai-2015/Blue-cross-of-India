/**
 * 
 */
package org.bluecross.volunteer.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author x074134
 *
 */
@RestController
@RequestMapping("/volunteer")
public class VolunteerController {
	
    @RequestMapping("/boot/user")
    public String index() {
        return "Greetings from Spring Boot!";
    }

}
