import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play_icon.png'



const About = () => {
  return (
    <div className='about container'>
        <div className="about-left">
            <img src={about_img} alt="aboutimg" className='about_img'/>
            <img src={play_icon} alt="playicon" className='play_icon'/>
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurtuting Tomorrow's Leaders Today</h2>
            <p>Embark on a transformative educational journey with our universities comprehensive education programs our cutting as curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education.</p>
            <p>With the focus on innovation, hands on learning, and personalized mentorship, our programs prepared aspiring educators to make a meaningful impact in classroom, schools, and communities</p>
            <p>Whether you Aspire to become a teacher, administrator, counselor, or educational leader our diverse range of programs offers the perfect pathway to achieve your goals and unlock your full potential in shaping the future of education</p>
        </div>
    </div>
  )
}

export default About