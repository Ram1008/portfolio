import React from 'react';
import { Link } from 'react-router-dom';
import Button from './assets/Button';
import facebookIcon from '../assets/facebookIcon.svg';
import gmailIcon from '../assets/gmailIcon.svg';
import linkedinIcon from '../assets/linkedinIcon.svg';
import githubIcon from '../assets/githubIcon.svg';
import designIcon from '../assets/designIcon.svg';
import developerIcon from '../assets/developerIcon.svg';
import seekerIcon from '../assets/seekerIcon.svg';
import noLook from '../assets/noLook.png';
import CenterImage from './assets/CenterImage';
import CircularButton from './assets/CircularButton';
import { designTools, developerTools, seekerExperiences } from './data/HomeData';
import Navbar from './assets/Navbar';
import IconButton from './assets/IconButton';
import Styles from './Home.module.css';

const Home = () => {
  const contacts = [linkedinIcon, githubIcon, gmailIcon, facebookIcon];
  return (
    <div className={Styles.container}>
        <Navbar/>
        <div className={Styles.seg1}>
        <CenterImage/>
            
            <div className={Styles.mainHeading}>
              Designer, Web Developer & Seeker 
            </div>
            
            <div className={Styles.navigationWrapper}>
                <CircularButton name = {"About me"}/> 
                <Link  style={{ textDecoration: 'none' }} to='/designs'><CircularButton name = {"Designs"}/></Link>
                <Link  style={{ textDecoration: 'none' }} to='/webapps'><CircularButton name = {"Web Apps"}/></Link>
                <CircularButton link = {noLook}/>
            </div>
        </div>
        <div className={Styles.introductionWrapper}>
          <div className={Styles.intro}>
              <div className={Styles.secondaryHeading}>
                  Hi, I’m Ram Chandel. Nice to see you!
              </div>
              <div className={Styles.introDescription}>
                  Mastering the art to code, I transform ideas into stunning online experiences.
                  I value sophisticated designs, flawless functionality,  elegant style
                  and precision. Let's collaborate and build your digital masterpiece together. 
                  I am fresh in the field but my quiet confidence, curious nature and willingness to learn 
                  solves my problems consistently.  
              </div>
              <div className={Styles.contactButtonWrapper}>
                <Button name = {"Contact"}/> 
              </div>
          </div>
        </div>
        <div className={Styles.seg2}>
          <div className={Styles.cardWrapper}>
            <div className={Styles.card}>
              <div className={Styles.cardIcon}>
                <img src={designIcon} alt = 'design'/>
              </div>
              <div className={Styles.cardTitle}>
                 Designer
              </div>
              <div className={Styles.cardDescription}>
                I believe design is a way to express the beauty of one’s nature.I value simplicity, interactive designand well thought out patterns.
              </div>
              <div className={Styles.cardSubHeading}>
                Things I enjoy designing:
              </div>
              <div className={Styles.cardSkills}>
                UI, UX, web, Apps, Posters, Logos
              </div>
              <div className={Styles.cardSubHeading}>
                Design Tools/Technologies
              </div>
              <div>
                {
                  designTools.map((tool)=>
                  <div className={Styles.cardItems} key ={tool}>
                      {tool}
                    </div>
                  )
                }
              </div>
            </div>
            <div className={Styles.card}>
                <div className={Styles.cardIcon}>
                  <img  src={developerIcon} alt = 'developer'/>
                </div>
                <div className={Styles.cardTitle}>
                  Developer
                </div>
                <div className={Styles.cardDescription}>
                I like to code and my code likes me. We together convert ideas into sophisticated systems, powered by web technologies and built with precision.
                </div>
                <div className={Styles.cardSubHeading}>
                  Languages I speak:
                </div>
                <div className={Styles.cardSkills}>
                  HTML, CSS, JavaScript, Java 
                </div>
                <div className={Styles.cardSubHeading}>
                  Developer Tools/Technologies
                </div>
                <div>
                {
                  developerTools.map((tool)=>
                  <div className={Styles.cardItems} key ={tool}>
                      {tool}
                    </div>
                  )
                }
              </div>
              </div>
            <div className={Styles.card}>
              <div className={Styles.cardIcon}>
                <img src={seekerIcon} alt = 'seeker'/>
              </div>
              <div className={Styles.cardTitle}>
                Seeker
              </div>
              <div className={Styles.cardDescription}>
              I seek to understand the greater meaning of life. which is beyond just gathering, maintenance and life support.  
              </div>
              <div className={Styles.cardSubHeading}>
                  Side rocks I turn:
                </div>
                <div className={Styles.cardSkills}>
                Martial Arts, Mentoring, Music, Traveling, Spirituality  
                </div>
                <div className={Styles.cardSubHeading}>
                  Experiences I had
                </div>
              <div>
                {
                  seekerExperiences.map((tool)=>
                  <div className={Styles.cardItems} key ={tool}>
                      {tool}
                    </div>
                  )
                }
              </div>
            </div>
          </div>
        </div>
        <div className={Styles.seg3}>
            {/* <div className='w-full flex justify-center'> */}
              <div className={Styles.contactWrapper}>
                <div className={Styles.footerNote}>
                  Living, Learning & Leveling up <br/>  at once.
                </div>
                <div className={Styles.footerIcon}>
                  {
                    contacts.map((contact)=>
                      <IconButton key = {contact} link= {contact}/>
                    )
                  }
                  
                </div>
                <div className={Styles.footerNote}>
                  Crafted & nurtured by me 	&copy; 2024
                </div>
              </div>
            {/* </div> */}
        </div>
    </div>
  )
}

export default Home;