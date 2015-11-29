/**
 * 
 */
package org.bluecross.volunteer.controller;

import java.util.ArrayList;
import java.util.List;

import org.bluecross.persistence.data.Volunteer;
import org.bluecross.service.VolunteerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
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
    @RequestMapping(value = "/add", method = RequestMethod.POST)
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

    @RequestMapping(value = "/reject", method = RequestMethod.POST, consumes = "application/json")
    public void reject(@RequestBody ArrayList<Volunteer> volunteerIds) {
        volunteerService.reject(volunteerIds);
    }

    @RequestMapping(value = "/updateStatus/{status}", method = RequestMethod.POST, consumes = "application/json")
    public void reject(@PathVariable String status, @RequestBody ArrayList<Volunteer> volunteerIds) {
        volunteerService.updateStatus(status, volunteerIds);
    }

}
