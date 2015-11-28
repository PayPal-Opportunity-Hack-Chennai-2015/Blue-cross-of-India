/**
 * 
 */
package org.bluecross.service;

import java.util.Map;

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


}
