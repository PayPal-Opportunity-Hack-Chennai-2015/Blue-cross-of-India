/**
 * 
 */
package org.bluecross.service;

import java.util.ArrayList;
import java.util.List;

import org.bluecross.persistence.data.Volunteer;
import org.bluecross.repository.persistence.VolunteerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @author x074134
 *
 */
@Service
public class VolunteerService {
	
	@Autowired
	private VolunteerRepository volunteerRepository;

	public String getName() {
		return String.valueOf(volunteerRepository.findAll().spliterator().getExactSizeIfKnown());
	}

	public String save(Volunteer volunteer) {
		return String.valueOf(volunteerRepository.save(volunteer).getUserId());
	}

	public List<Volunteer> getByStatus(String status) {
		return volunteerRepository.findByStatus(status);
	}

	public List<Volunteer> getAll() {
	   return (ArrayList<Volunteer>) volunteerRepository.findAll();
	}

	public void reject(List<Volunteer> volunteerIds) {
		updateStatus("REJECTED",volunteerIds);
		
	}

	public void updateStatus(String status, List<Volunteer> volunteerIds) {
		for(Volunteer volunteer:volunteerIds){
			Volunteer updateVolunteer = volunteerRepository.findOne(Long.valueOf(volunteer.getUserId()));
			updateVolunteer.setStatus(status);
			volunteerRepository.save(updateVolunteer);
		}
	}


}
