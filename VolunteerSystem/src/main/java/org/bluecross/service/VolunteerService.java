/**
 * 
 */
package org.bluecross.service;

import java.util.ArrayList;
import java.util.List;

import org.bluecross.persistence.data.Volunteer;
import org.bluecross.repository.persistence.VolunteerRepository;
import org.bluecross.util.EMailUtility;
import org.bluecross.util.EmailTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class VolunteerService {
	
	@Autowired
	private EMailUtility emailUtil;
	
	@Autowired
	private VolunteerRepository volunteerRepository;

    public String getName() {
        return String.valueOf(volunteerRepository.findAll().spliterator().getExactSizeIfKnown());
    }
	public String save(Volunteer volunteer) {
		Volunteer savedVolunteer = volunteerRepository.save(volunteer);
		emailUtil.sendEmail(savedVolunteer.getEmailId(), EmailTemplate.REGISTRATION_ACCEPTED_SUBJECT, 
				EmailTemplate.getRegistrationAcceptanceMessage(savedVolunteer.getFirstName(), String.valueOf(savedVolunteer.getUserId())));
		return String.valueOf(savedVolunteer.getUserId());
	}

    public List<Volunteer> getByStatus(String status) {
        return volunteerRepository.findByStatus(status);
    }

    public List<Volunteer> getAll() {
        return (ArrayList<Volunteer>) volunteerRepository.findAll();
    }

    public void reject(List<Volunteer> volunteerIds) {
        updateStatus("REJECTED", volunteerIds);

    }

    public void updateStatus(String status, List<Volunteer> volunteerIds) {
        for (Volunteer volunteer : volunteerIds) {
            Volunteer updateVolunteer = volunteerRepository.findOne(volunteer.getUserId().toString());
            updateVolunteer.setStatus(status);
            volunteerRepository.save(updateVolunteer);
        }
    }

}
