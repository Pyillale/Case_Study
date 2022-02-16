package com.twitterBio;

import java.util.HashMap;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service("BioServices")
public class BioServices {
	@Autowired
    BioRepository bioRepository;

	HashMap<String, Integer> map = new HashMap<>();
    public 	Bio setUp(Bio bio) {
    	Bio object = new Bio();
    	Boolean flag =true;
    	if(bio!=null) {
    		object = bioRepository.findByuserName(bio.getUserName());
    	}
    	if(object!=null) {
    		String user = bio.getUserName().toString();
    		
    		if(object.getUserName()!=null) {
    			if(object.getUserName().equalsIgnoreCase(user)) {
        			bioRepository.deleteById(object.getId());
        			bioRepository.save(bio);
        			flag = false;
        		}
    		}		     
    	}
    	if (flag.equals(true)) {
    		 bioRepository.save(bio); 	
    	}
        return bio;
    }
    public Bio get(String userName){
        Bio experience = bioRepository.findByuserName(userName);
        return experience;
    }
    
    


}
