/**
 * 
 */
package org.bluecross.volunteer.controller;

import java.util.List;

import org.bluecross.persistence.data.Volunteer;
import org.bluecross.service.VolunteerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
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
    
    @RequestMapping("/getByStatus/{status}")
    public List<Volunteer> getVolunteersByStatus(@PathVariable String status) {
    	return volunteerService.getByStatus(status);
    }
    
    @RequestMapping("/getAll")
    public List<Volunteer> getAllVolunteers() {
    	return volunteerService.getAll();
    }
    
    @RequestMapping("/reject")
    public void reject(@PathVariable List<String> ids) {
    	 volunteerService.reject(ids);
    }
    
    @RequestMapping("/updateStatus/{status}")
    public void reject(@PathVariable String status, @ModelAttribute("ids") List<String> ids) {
    	 volunteerService.updateStatus(status,ids);
    }

}
