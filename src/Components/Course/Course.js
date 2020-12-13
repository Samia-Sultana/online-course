import React from 'react';
import Cart from '../Cart/Cart';
import './Course.css'

const Course = (props) => {
    return (
        <div>   
            <div className="courseBox"></div>
                <h3>{props.courses.name}</h3>
                <h4>{props.courses.Instructor}</h4>
                <h5>{props.courses.price}</h5>
                <br/>
                <h5>{props.courses.Info}</h5>
                <h5>{props.courses.duration}</h5>
                <button onClick={() => props.handleEnrollButton(props.courses)}>Enroll now</button>  
        </div>
 
    );
};

export default Course;