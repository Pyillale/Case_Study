package com.twitterTweet;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@CrossOrigin(origins = "http://localhost:3000/")
@Controller
@RequestMapping("/tweet")
public class TweetController {

	@Autowired
	TweetServices tweetServices;

	@PostMapping("/sendTweet")
	@ResponseBody
	public Tweet addpost(@RequestBody Tweet tweet) {
		return tweetServices.saveTweet(tweet);
	}

	@GetMapping("/getTweet/{userName}")
	@ResponseBody
	public List<Tweet> getdata(@PathVariable String userName) {
		return (List<Tweet>) tweetServices.getTweet(userName);
	}
	
//	@DeleteMapping("/delete/{id}")
//	@ResponseBody
//	public List<Tweet> delete(@PathVariable String userName) {
//	return (List<Tweet>) tweetServices.getTweet(userName);
//	
//	}
	
	
	
	
	
	
	
}
