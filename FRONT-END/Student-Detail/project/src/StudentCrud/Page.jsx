// import axios from 'axios';
// import React, { useEffect, useState } from 'react';

// const DisplayStudent = () => {
//   // Store the data array and page metadata
//   const [pageData, setPageData] = useState({ content: [], totalPages: 0, number: 0 });
//   const [name, setName] = useState('');

//   useEffect(() => {
//     fetchStudentsByPage(0); // Fetch the first page of students on component mount
//   }, []);

//   // Fetch students by page number
//   const fetchStudentsByPage = (pageNumber) => {
//     axios.get(`http://localhost:8080/api/students/display-student/${pageNumber}`)
//       .then((response) => {
//         console.log("pagenumber"+JSON.stringify(response))
//         console.log(response);
//         setPageData(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

// //   // Search students by name
// //   const searchStudents=()=>{
// //     axios.get(`http://localhost:8080/api/students/search/${name}`)
// //       .then((response) => {
// //         console.log("search item"+JSON.stringify(response))
// //         console.log(response);
// //         setPageData(response.data);
// //       })
// //       .catch((error) => {
// //         console.log(error);
// //       });
// //   };

// //   const handleSearchChange = (event) => {
// //     setName(event.target.value);
// //   };

//   const handleKeyUp = (event) => {
//     if (event.key === 'Enter') {
//       searchStudents();
//     }
//   };

//   // Search students by name
// const searchStudents = () => {
//     if (name.trim() !== '') {
//       // Check if the search term is not empty
//       axios.get(`http://localhost:8080/api/students/search/${name}`)
//         .then((response) => {
//           console.log("search item", JSON.stringify(response));
//           console.log(response);
//           if (Array.isArray(response.data)) {
//             // If the response is an array, update the pageData with the first student
//             const studentData = response.data[0];
//             setPageData({
//               content: [studentData],
//               totalPages: 1,
//               number: 0
//             });
//           } else {
//             // If the response is not an array, update the pageData with an empty array
//             setPageData({
//               content: [],
//               totalPages: 0,
//               number: 0
//             });
//           }
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//     } else {
//       // If the search term is empty, fetch all students
//       fetchStudentsByPage(0);
//     }
//   };

//   return (
//     <div>
//       <div className='container bg-light mt-3'>
//         <h3 className='text-center'>Display Student By Name</h3>

//         <div className="search-container my-4">
//         <input
//           value={name}
//           onChange={(e)=>{setName(e.target.value)}}
//           onKeyUp={handleKeyUp}
//           type="text"
//           className="form-control"
//           placeholder="Search Your Name"
//         />
//         <div className="search-result">
//           {/* Search results go here */}
//         </div>
//       </div>

//         <table className="table">
//           <thead>
//             <tr>
//               <th scope="col">#</th>
//               <th scope="col">Name</th>
//               <th scope="col">totalMarks</th>
//             </tr>
//           </thead>
//           <tbody>
//             {pageData.content.map((student) => (
//               <tr key={student.id}>
//                 <td>{student.id}</td>
//                 <td>{student.name}</td>
//                 <td>{student.totalMarks}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>

//         {/* Pagination */}
//         <div className="d-flex justify-content-center">
//           <nav>
//             <ul className="pagination">
//               {[...Array(pageData.totalPages)].map((_, index) => (
//                 <li
//                   className={`page-item ${index === pageData.number ? 'active' : ''}`}
//                   key={index}
//                 >
//                   <button
//                     className="page-link"
//                     onClick={() => fetchStudentsByPage(index)}
//                   >
//                     {index + 1}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </nav>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DisplayStudent;




// import axios from 'axios';
// import React, { useEffect, useState } from 'react';

// const DisplayStudent = () => {
//   // Store the data array and page metadata
//   const [pageData, setPageData] = useState({ content: [], totalPages: 0, number: 0 });
//   const [searchQuery, setSearchQuery] = useState('');



//   useEffect(() => {
//     fetchStudentsByPage(0); // Fetch the first page of students on component mount
//   }, []);

//   // Fetch students by page number
//   const fetchStudentsByPage = (pageNumber) => {
//     axios.get(`http://localhost:8080/api/students/display-student/${pageNumber}`)
//       .then((response) => {
//         setPageData(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };


//   const fetchStudents = () => {
//     axios.get(`http://localhost:8080/api/students/search/${searchQuery}`)
//       .then((response) => {
//        setPageData(response.data)
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   const handleSearchChange = (event) => {
//     console.log(event.target.value)
//     setSearchQuery(event.target.value);
//   };

//   const handleKeyUp = () => {
//     fetchStudents();
//   };



//   return (
//     <div>
//       <div className='container bg-light mt-3'>
//         <h3 className='text-center'>Display Student By Name</h3>

//         <div className="search-container my-4">
//           <input
//             value={searchQuery}
//             onChange={handleSearchChange}
//             onKeyUp={handleKeyUp}
//             type="text"
//             className="form-control"
//             placeholder="Search by Name"
//           />
//         </div>

//         <table className="table">
//           <thead>
//             <tr>
//               <th scope="col">#</th>
//               <th scope="col">Name</th>
//               <th scope="col">totalMarks</th>
//             </tr>
//           </thead>
//           <tbody>
//             {pageData.content.map((student) => (
//               <tr key={student.id}>
//                 <td>{student.id}</td>
//                 <td>{student.name}</td>
//                 <td>{student.totalMarks}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>



// {/* */}

//         {/* Pagination */}
//         <div className="d-flex justify-content-center">
//           <nav>
//             <ul className="pagination">
//               {[...Array(pageData.totalPages)].map((_, index) => (
//                 <li
//                   className={`page-item ${index === pageData.number ? 'active' : ''}`}
//                   key={index}
//                 >
//                   <button
//                     className="page-link"
//                     onClick={() => fetchStudentsByPage(index)}
//                   >
//                     {index + 1}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </nav>
//         </div>
//       </div>
   
//     </div>
//   );
// };

// export default DisplayStudent;



//FINAL RESULT
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const DisplayStudent = () => {
  const [pageData, setPageData] = useState({ content: [], totalPages: 0, number: 0 });
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchStudentsByPage(0);
  }, []);

  const fetchStudentsByPage = (pageNumber) => {
    axios.get(`http://localhost:8080/api/students/display-student/${pageNumber}`)
      .then((response) => {
        setPageData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const fetchStudents = () => {
    if (searchQuery === '') {
      fetchStudentsByPage(0); // Display fetchStudentsByPage when searchQuery is empty
    } else {
      axios.get(`http://localhost:8080/api/students/search/${searchQuery}`)
        .then((response) => {
          setPageData(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleKeyUp = () => {
    fetchStudents();
  };

  return (
    <div>
      <div className='container bg-light mt-3'>
        <h3 className='text-center'>Display Student By Name</h3>

        <div className="search-container my-4">
          <input
            value={searchQuery}
            onChange={handleSearchChange}
            onKeyUp={handleKeyUp}
            type="text"
            className="form-control"
            placeholder="Search by Name"
          />
        </div>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">totalMarks</th>
            </tr>
          </thead>
          <tbody>
            {pageData.content.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.totalMarks}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="d-flex justify-content-center">
          <nav>
            <ul className="pagination">
              {[...Array(pageData.totalPages)].map((_, index) => (
                <li
                  className={`page-item ${index === pageData.number ? 'active' : ''}`}
                  key={index}
                >
                  <button
                    className="page-link"
                    onClick={() => fetchStudentsByPage(index)}
                  >
                    {index + 1}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default DisplayStudent;



