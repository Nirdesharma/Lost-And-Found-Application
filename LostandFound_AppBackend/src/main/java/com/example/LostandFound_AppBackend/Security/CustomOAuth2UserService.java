package com.example.LostandFound_AppBackend.Security;

import com.example.LostandFound_AppBackend.Entity.User;
import com.example.LostandFound_AppBackend.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.DefaultOAuth2User;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;

import java.util.Collections;

@Service
public class CustomOAuth2UserService extends DefaultOAuth2UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException{
        OAuth2User oAuth2User=super.loadUser(userRequest);
        String email=oAuth2User.getAttribute("email");
        String name =oAuth2User.getAttribute("name");

        if(!email.endsWith("@medicaps.ac.in")){
            throw new OAuth2AuthenticationException("only college emails are allowed");
        }
        User user=userRepository.findByEmail(email)
                .orElseGet(()-> userRepository.save(new User(email,name)));

        return new DefaultOAuth2User(
                Collections.singleton(new SimpleGrantedAuthority("USER")),
                oAuth2User.getAttributes(),
                "email"
        );
    }




}
