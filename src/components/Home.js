import React, {useEffect, useState} from 'react';
import Button from './assets/Button';
import logo from '../assets/logo.svg';
import facebookIcon from '../assets/facebookIcon.svg';
import gmailIcon from '../assets/gmailIcon.svg';
import linkedinIcon from '../assets/linkedinIcon.svg';
import githubIcon from '../assets/githubIcon.svg';
import designIcon from '../assets/designIcon.svg';
import developerIcon from '../assets/developerIcon.svg';
import seekerIcon from '../assets/seekerIcon.svg';
import FlashLoader from './assets/FlashLoader';
import { workDomain, designTools, developerTools, seekerExperiences } from './data/HomeData';
import { Link } from 'react-router-dom';

const Home = () => {
  const [flashItem, setFlashItem] = useState(0);
  
  useEffect(()=>{
    setTimeout(()=>{
      let newItem = (flashItem+1)%workDomain.length;
      setFlashItem(newItem);
    }, 3000);
  },[flashItem])
  return (
    <div className='flex flex-col'>
        <div className='w-full h-[86vh] '>
            <div className='flex flex-row justify-between my-[8vh] mx-[2vw]'>
                <Button name = {"Explore"}/> 
                <Link to='/connect'><Button name = {"Let's connect"}/></Link>
            </div>
            <div className='text-center font-[Barlow-Condensed] font-bold text-2xl'>
              Designer, Web Developer & Seeker 
            </div>
            <div className='flex justify-center my-[9vh]' >
              <div className='rounded-full'>
                <img className='rounded-full h-[200px] w-[200px] shadow-[3px_0_3px_0_#a9a9a9]' src={logo} alt='me'/>
              </div>
            </div>
            <div>
              <div className='flex justify-center'>
                
                  <FlashLoader name = {workDomain[flashItem]}/>
                
              </div>
            </div>
        </div>
        <div className='w-full bg-[#E8601B] h-[57vh]'>
          <div className='flex justify-center  my-[2vh]'>
            <div className='w-[70vw]'>
              <div className='text-center text-lg font-[Barlow-Condensed] text-white my-[4vh] font-semibold'>
                  Hi, I’m Ram Chandel. Nice to see you!
              </div>
              <div className='text-center text-lg font-[Barlow-Condensed] font-normal text-white'>
                  Mastering the art to code, I transform ideas into stunning online experiences.
                  I value sophisticated designs, flawless functionality,  elegant style
                  and precision. Let's collaborate and build your digital masterpiece together. 
                  I am fresh in the field but my quiet confidence, curious nature and willingness to learn 
                  solves my problems consistently.  
              </div>
              <div className='mx-auto w-[12vw] self-center my-[5vh]'>
                <Button name = {"Contact"}/> 
              </div>
            </div>
          </div>
          
        </div>
        <div className='w-full flex justify-center  h-[62vh]'>
          <div className='flex flex-row p-5 justify-around h-[85vh] w-[65vw] bg-white rounded-lg  mt-[-6%]  z-10'>
            <div className="basis-1/3 m-4 flex flex-col ">
              <div className='mx-auto'>
                <img className='h-[7vh] w-[6vw]' src={designIcon} alt = 'design'/>
              </div>
              <div className='mx-auto my-4 text-sm font-semibold'>
                 Designer
              </div>
              <div className='mx-auto text-xs text-center'>
                I believe design is a way to express the beauty of one’s nature.I value simplicity, interactive designand well thought out patterns.
              </div>
              <div className='mx-auto my-4 text-[#E8601B] text-sm font-semibold'>
                Things I enjoy designing:
              </div>
              <div className='mx-auto text-xs text-center'>
                UI, UX, web, Apps, Posters, Logos
              </div>
              <div className='mx-auto my-4 text-[#E8601B] text-sm font-semibold'>
                Design Tools/Technologies
              </div>
              <div>
                {
                  designTools.map((tool)=>
                  <div className='mx-auto text-xs text-center my-2' key ={tool}>
                      {tool}
                    </div>
                  )
                }
              </div>
            </div>
            <div className="basis-1/3 m-4 flex flex-col ">
                <div className='mx-auto my-2'>
                  <img className='h-[5vh] w-[4vw]' src={developerIcon} alt = 'developer'/>
                </div>
                <div className='mx-auto my-4 text-sm font-semibold'>
                  Developer
                </div>
                <div className='mx-auto text-xs text-center'>
                I like to code and my code likes me. We together convert ideas into sophisticated systems, powered by web technologies and built with precision.
                </div>
                <div className='mx-auto my-4 text-[#E8601B] text-sm font-semibold'>
                  Languages I speak:
                </div>
                <div className='mx-auto text-xs text-center'>
                  HTML, CSS, JavaScript, Java 
                </div>
                <div className='mx-auto my-4 text-[#E8601B] text-sm font-semibold'>
                  Developer Tools/Technologies
                </div>
                <div>
                {
                  developerTools.map((tool)=>
                  <div className='mx-auto text-xs text-center my-2' key ={tool}>
                      {tool}
                    </div>
                  )
                }
              </div>
              </div>
            <div className="basis-1/3 m-4 flex flex-col">
              <div className='mx-auto text-sm'>
                <img className='h-[7vh] w-[6vw]' src={seekerIcon} alt = 'seeker'/>
              </div>
              <div className='mx-auto my-4 text-sm font-semibold'>
                Seeker
              </div>
              <div className='mx-auto text-xs text-center'>
              I seek to understand the greater meaning of life. which is beyond just gathering, maintenance and life support.  
              </div>
              <div className='mx-auto my-4 text-[#E8601B] text-sm font-semibold'>
                  Side rocks I turn:
                </div>
                <div className='mx-auto text-xs text-center'>
                Martial Arts, Mentoring, Music, Traveling, Spirituality  
                </div>
                <div className='mx-auto my-4 text-[#E8601B] text-sm font-semibold'>
                  Experiences I had:
                </div>
              <div>
                {
                  seekerExperiences.map((tool)=>
                  <div className='mx-auto text-xs text-center my-2  ' key ={tool}>
                      {tool}
                    </div>
                  )
                }
              </div>
            </div>
          </div>
        </div>
        <div className='w-full bg-[#E8601B] h-[60vh] z-0'>
            <div className='w-full flex justify-center'>
              <div className='w-[40vw] mt-[20vh]'>
                <div className='text-center font-[Barlow-Condensed] text-xl text-white my-[3vh]'>
                  Living, Learning & Leveling up <br/>  at once.
                </div>
                <div className='p-5 flex justify-around '>
                  <div className='rounded h-[4vh] w-[2vw] bg-white p-1'>
                      <img src={linkedinIcon} alt='linkedin'/>
                  </div>
                  <div className='rounded h-[4vh] w-[2vw] bg-white p-1'>
                  <img src={githubIcon} alt='github'/>
                  </div>
                  <div className='rounded h-[4vh] w-[2vw] bg-white p-1'>
                  <img src={gmailIcon} alt='gmail'/>
                  </div>
                  <div className='rounded h-[4vh] w-[2vw] bg-white p-1'>
                  <img src={facebookIcon} alt='facebook'/>
                  </div>
                  
                </div>
                <div className='text-center font-[Barlow-Condensed] text-xl text-white my-[4vh]'>
                  Crafted & nurtured by me 	&copy; 2024
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Home;