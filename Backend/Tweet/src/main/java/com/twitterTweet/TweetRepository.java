package com.twitterTweet;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface TweetRepository extends MongoRepository<Tweet, String> {
	
// List<Tweet> findByUserName(String userName);

List<Tweet> findByUserName(String userName);

}
