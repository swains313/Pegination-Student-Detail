package com.student.kinara.model;

import org.springframework.data.mongodb.core.mapping.Document;

import jakarta.persistence.Id;
import lombok.Data;

@Data
@Document(collection = "studentdetail")
public class Student {
	
	@Id
	private String id;
	private String name;
	private double totalMarks;
	


	

}
