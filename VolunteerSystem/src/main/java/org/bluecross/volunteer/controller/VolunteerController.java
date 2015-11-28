/**
 * 
 */
package org.bluecross.volunteer.controller;

import java.util.Map;

import org.bluecross.persistence.data.Volunteer;
import org.bluecross.service.VolunteerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
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
	
    /**
     * @param volunteer
     * @return
     */
    @RequestMapping("/add")
    public String save(@RequestBody Volunteer volunteer) {
        return volunteerService.save(volunteer);
    }

}
