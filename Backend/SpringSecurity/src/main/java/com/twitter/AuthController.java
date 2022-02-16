package com.twitter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.twitter.models.AuthenticationRequest;
import com.twitter.models.AuthenticationResponse;
import com.twitter.models.UserModel;
import com.twitter.models.UserRepository;

@CrossOrigin(origins ="http://localhost:3000/")
@RestController
//@RequestMapping("demo")
public class AuthController {
	@Autowired
	private UserRepository  userRepository;
	
	@Autowired 
	private AuthenticationManager authenticationManager;
	
	@PostMapping("/subs")
	private ResponseEntity<?> subscribeClient(@RequestBody AuthenticationRequest authenticationRequest){	 
	String username =	authenticationRequest.getUsername();
	String password =	authenticationRequest.getPassword();
	String email =  authenticationRequest.getEmail();
	UserModel userModel =new UserModel();
	userModel = userRepository.findByUsername(username);
	if(userModel!=null) {
		if(userModel.getUsername().equalsIgnoreCase(username)) {
			return ResponseEntity.ok(new AuthenticationResponse("User already exists"));
		}}	
    userModel =new UserModel();
	userModel.setUsername(username);
	userModel.setEmail(email);
	userModel.setPassword(password);
	try {
	userRepository.save(userModel);
	} catch (Exception e) {
	return ResponseEntity.ok(new AuthenticationResponse("Error during substri " ));
	} 
	return ResponseEntity.ok(new AuthenticationResponse("Successfull subsription"));
	}
	@PostMapping("/auth")
	private ResponseEntity<?> authenticationClient(@RequestBody AuthenticationRequest authenticationRequest){
		String username =	authenticationRequest.getUsername();
		String password =	authenticationRequest.getPassword();
		try {
		authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
		}catch (Exception e) {
			return ResponseEntity.ok(new AuthenticationResponse("Error during client Authentication"));
		} 
		return ResponseEntity.ok(new AuthenticationResponse("Successfull Authentication"));
	}
}
