package com.twitterBio;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BioRepository  extends MongoRepository<Bio,String>{

	Bio findByname(String name);
	Optional<Bio> findById(String id);
    List<Bio> findAll();
	Bio findByuserName(String userName);
}
