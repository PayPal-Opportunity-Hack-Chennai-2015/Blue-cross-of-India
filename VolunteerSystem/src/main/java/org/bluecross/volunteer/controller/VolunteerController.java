/**
 * 
 */
package org.bluecross.volunteer.controller;

import org.bluecross.service.VolunteerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author x074134
 *
 */
@RestController
@RequestMapping("/volunteer")
public class VolunteerController {
	
	@Autowired
	private VolunteerService volunteerService;
	
    @RequestMapping("/boot/user")
    public String index() {
        return volunteerService.getName();
    }

}
