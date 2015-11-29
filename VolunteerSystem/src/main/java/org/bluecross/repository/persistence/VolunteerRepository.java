/**
 * 
 */
package org.bluecross.repository.persistence;

import java.util.List;

import org.bluecross.persistence.data.Volunteer;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface VolunteerRepository extends MongoRepository<Volunteer, String>{

	/**
	 * @param status
	 * @return
	 */
	List<Volunteer> findByStatus(String status);

}
