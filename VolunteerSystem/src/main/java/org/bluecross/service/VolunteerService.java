/**
 * 
 */
package org.bluecross.service;

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

}
