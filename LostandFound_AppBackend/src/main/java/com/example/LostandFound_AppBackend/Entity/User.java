package com.example.LostandFound_AppBackend.Entity;


import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "users")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(nullable = false,unique = true)
    private String email;

    private String name;
    private String className;
    private String section;
    private String department;

    public User(String email,String name){
        this.email=email;
        this.name=name;
    }

}
