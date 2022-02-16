package com.twitterTweet;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "tweetpost")
public class Tweet {
	@Id
	private String id;
	private String userName;
	private String photoUrl;
	private String name;
	private String description;
	
	public Tweet() {
		super();
	}
	public Tweet(String id, String userName, String photoUrl,String name, String description) {
		super();
		this.id = id;
		this.userName = userName;
		this.photoUrl = photoUrl;
		this.name = name;
		this.description = description;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getPhotoUrl() {
		return photoUrl;
	}
	public void setPhotoUrl(String photoUrl) {
		this.photoUrl = photoUrl;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	
	
}
