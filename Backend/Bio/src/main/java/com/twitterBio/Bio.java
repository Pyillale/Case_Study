package com.twitterBio;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "biograpy")
public class Bio {
	@Id
	private String id;
    private String name;
    private String location;
    private String website;
    private String biog;
    private String userName;
    
	public Bio() {
		super();
	}
	
	public Bio(String id, String name, String location, String website, String biog,String userName) {
		super();
		this.id = id;
		this.name = name;
		this.location = location;
		this.website = website;
		this.biog = biog;
		this.userName = userName;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public String getWebsite() {
		return website;
	}
	public void setWebsite(String website) {
		this.website = website;
	}
	public String getBiog() {
		return biog;
	}
	public void setBiog(String biog) {
		this.biog = biog;
	}
    
	
}
