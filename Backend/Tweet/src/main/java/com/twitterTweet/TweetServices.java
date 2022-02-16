package com.twitterTweet;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("TweetServices")
public class TweetServices {
	@Autowired
	TweetRepository tweetRepository;

	public Tweet saveTweet(Tweet tweet) {
		tweetRepository.save(tweet);		
		return tweet;
	}
	public List<Tweet> getTweet(String userName){
		return tweetRepository.findByUserName(userName);	
	}
	
}
