import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Course from './Components/Course/Course';
import Cart from './Components/Cart/Cart';
import { useState } from 'react';

function App() {
  var courses = [
    {id:"001",name:"Marketing",Instructor:"Jhon Doe",price:15,info:"Advanced knowledge of Marketing",duration:"4 weeks"},
    {id:"002",name:"Accounting",Instructor:"Lissele",price:14.78,info:"Advanced knowledge of Accounting",duration:"4 weeks"},
    {id:"003",name:"Web development",Instructor:"Emma",price:15.45,info:"basic knowledge of programming",duration:"4 weeks"},
    {id:"004",name:"Web design",Instructor:"Edward",price:15.90,info:"basic knowledge of photoshop",duration:"4 weeks"},
    {id:"005",name:"Food and Nutrition",Instructor:"Bella",price:10.3,info:"basic knowledge of programming",duration:"4 weeks"},
    {id:"006",name:"Yoga",Instructor:"Shwan",price:10.11,info:"basic knowledge of programming",duration:"4 weeks"},
    {id:"007",name:"Psychology",Instructor:"Nittin",price:11.98,info:"basic knowledge of programming",duration:"4 weeks"},
    {id:"008",name:"Economics",Instructor:"Noah",price:17.97,info:"Advance knowledge of Marketing",duration:"4 weeks"},
    {id:"009",name:"Python",Instructor:"Braile",price:13,info:"Advance knowledge of Marketing",duration:"4 weeks"},
    {id:"010",name:"Android app developmet",Instructor:"Fin",price:15,info:"basic knowledge of programming",duration:"4 weeks"},
    {id:"011",name:"German",Instructor:"Alice",price:11,info:"Don't need any prerequisite knowledge",duration:"4 weeks"},
    {id:"012",name:"French",Instructor:"Bob",price:11,info:"Don't need any prerequisite knowledge",duration:"4 weeks"}
    ];
    const [count,setCount] = useState([]);
    function handleEnrollButton(data){
        const margeInto = [...count,data];
        setCount(margeInto);
    }
     
    
  return (
    <div className="App">
     <div className="container-fluid">
          <Header></Header>
     </div>
     <div className="container-fluid d-flex flex-row">
        <div className="courseBody col-8 d-flex flex-column bg-success">
          {
              courses.map(courseInfo => <Course courses={courseInfo} handleEnrollButton={handleEnrollButton}></Course>)
          }
        </div>
        <div className="cartBody col-4 bg-primary">
          <Cart cartInfo={count}></Cart>
        </div>
     </div>
     
    </div>
  );
}

export default App;
