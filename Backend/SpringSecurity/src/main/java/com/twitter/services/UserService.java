package com.twitter.services;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.twitter.models.UserModel;
import com.twitter.models.UserRepository;

@Service
public class UserService implements UserDetailsService{
	
	@Autowired
	private UserRepository  userRepository;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		UserModel foundedUser =userRepository.findByUsername(username);
		if(foundedUser==null) return null;
		String name = foundedUser.getUsername();
		String pwd = foundedUser.getPassword();
		return new User(username, pwd, new ArrayList());
	}
	

}
