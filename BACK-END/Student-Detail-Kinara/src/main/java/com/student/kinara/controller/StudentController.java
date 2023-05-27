package com.student.kinara.controller;


import java.security.Principal;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.student.kinara.model.Student;
import com.student.kinara.service.StudentService;


@RestController
@RequestMapping("/api/students")
@CrossOrigin(origins = "http://localhost:3000/")
public class StudentController {
	
	  private final int PAGE_SIZE = 5; // Define your desired page size

	    @Autowired
	    private StudentService studentService;
	    
	  

	   @PostMapping
	   public Student saveStudent(@RequestBody Student student)
	   {
		   IdGenerate generate=new IdGenerate();
		   student.setId(generate.generateId());
		   return this.studentService.saveStudent(student);
	   }
	   

		@GetMapping("/display-student/{page}")
		public Page<Student> showContact(@PathVariable("page") Integer page) {
			
			System.out.println("called");
				Pageable pageable=PageRequest.of(page, 5);
				Page<Student> list=this.studentService.displayStudentList(pageable);
			
			return list;
		
		}
//		
//		@GetMapping("/search/{name}")
//		public ResponseEntity<?> search(@PathVariable("name")String name)
//		{
//			System.out.println(name);
//			//List<Student> list=this.studentService.findByNameContainingAndUser(name);
//			List<Student> list=this.studentService.findByNamesStringWith(name);
//			return ResponseEntity.ok(list);
//		}
		
//		public List<Student> searchStudentsByQuery(String query) {
//		    List<Student> students = new ArrayList();
//
//		    for (int i = 0; i < query.length(); i++) {
//		        String subQuery = query.substring(0, i + 1);
//		        List<Student> matchingStudents = studentService.findByNameStartingWithAndStudent(subQuery, student);
//		        students.addAll(matchingStudents);
//		    }
//
//		    return students;
//		}
		
//	    @GetMapping("/search/{searchQuery}")
//	    public ResponseEntity<List<Student>> searchStudents(@PathVariable("searchQuery") String searchQuery) {
//	        List<Student> students = studentService.searchStudentsByQuery(searchQuery);
//	        return ResponseEntity.ok(students);
//	    }
		
		
		//this doesnt ignore the case
//	    @GetMapping("/search/{searchQuery}")
//	    public Page<Student> searchStudents(@PathVariable("searchQuery") String searchQuery) {
//	    	Pageable pageable=PageRequest.of(1, 5);
//	    	List<Student> list=this.studentService.searchStudentsByQuery(searchQuery);
//	    	Page<Student> page=new PageImpl<>(list);
//			return page;
//	    }
	    
		
		
		
	    //this method ignore the case(SAUMYA=saumya)
	    @GetMapping("/search/{searchQuery}")
	    public Page<Student> searchStudents(@PathVariable("searchQuery") String searchQuery,Integer pages) {
	    	Pageable pageable=PageRequest.of(0, 5);
	    	Page<Student> page=this.studentService.searchNameIgnoreTheCase(searchQuery, pageable);
			return page;
	    }
	    
	    

	    


	




	

}
