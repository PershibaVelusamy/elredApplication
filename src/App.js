
import './App.css';
import girl from './assets/Group 13906.png'
import beifcase from './assets/noun-briefcase-1951898 1.svg'
import locate from './assets/Group 13659.svg'
import minilocation from './assets/Vector.svg';
import frame from './assets/Frame 14473.png'
import share from './assets/Group 15655.png'
import carosel1 from './assets/Rectangle 4313.png'
import rating from './assets/Group 13330 (1).svg'
import quotes from './assets/fa6-solid_quote-left.png'
import picbanner from './assets/Rectangle 3813.png'
import pinlogo from './assets/Union.png'
import skillimg from './assets/Group 13777.png'
import vector from './assets/Vector.png'
import Gwen from './assets/Ellipse 166.png'
import prosmall from './assets/Ellipse 152.png'
import { useState } from 'react';
function App() {

const [openToast,setopenToast]=  useState(false)

 const openToastcominSoon=()=>{

  setopenToast(true)

  setTimeout(()=>{
    setopenToast(false)
  },2000)
 }


  return (
    <div className='mainwrapper imgwrP'>
      <nav className="navbar navbar-expand-sm navbar-dark profilenav">
        <div className="container-fluid">
          <span className="profileText">Profile</span>
        </div>
      </nav>
      {
      openToast&&<div>
         <div class="alert alert-info mt-3">
    <strong>Info!</strong> Comming soon..
  </div>
      </div>

      }
      <div className='profilewrapper profileDetail'>

        <img src={girl} alt='profilegirl' />
        <div className='profiledataWrapper'>
          <p className='profileName'>
            Alexandra Stanton
          </p>
          <p className='designation'><img src={beifcase} className='locatImg' alt='brief' /><span className='breifName'>Realtor | VP design</span></p>
          <p className='location'><img src={locate} className="locatImg" alt='location' /><span className='locateName'>Bangalore, India</span></p>

        </div>
        <img className='frame' src={frame} alt='frame' />

      </div>
      <div className='MainWrapper '>
        <div className='shareWrapper'>
          <img className='shareimg' src={share} alt="share" />
        </div>
        <div className='offercarrosel'>
          <div className='intextWrap'><span className='intext'> I can offer </span> <span onClick={()=>openToastcominSoon()}  className='seeall'>See all</span></div>


          <div class="scroll-container">
            <div className='imagecontainer'>
              <img src={carosel1} alt="Los Angeles" className="caroselImg" />
              <img src={minilocation} className="locatemini" alt='location' />
              <p className='locateText'>Mumbai</p>
              <p className='desText'>Top 5 interior design projects</p>
            </div>
            <div className='imagecontainer'>
              <img src={carosel1} alt="Los Angeles" className="caroselImg" />
              <img src={minilocation} className="locatemini" alt='location' />
              <p className='locateText'>Pune</p>
              <p className='desText'>Top 10 integrated design projects</p>
            </div>
            <div className='imagecontainer'>
              <img src={carosel1} alt="Los Angeles" className="caroselImg" />
              <img src={minilocation} className="locatemini" alt='location' />
              <p className='locateText'>Chennai</p>
              <p className='desText'>Conversational AI related Project</p>
            </div>
            <div className='imagecontainer'>
              <img src={carosel1} alt="Los Angeles" className="caroselImg" />
              <img src={minilocation} className="locatemini" alt='location' />
              <p className='locateText'>Delhi</p>
              <p className='desText'>UCAAS with tailored AI Project</p>
            </div>
            <div className='imagecontainer'>
              <img src={carosel1} alt="Los Angeles" className="caroselImg" />
              <img src={minilocation} className="locatemini" alt='location' />
              <p className='locateText'>cochi</p>
              <p className='desText'>Top 5 interior design projects</p>
            </div>
          </div>

        </div>


        <img className='ratingstar' src={rating} alt='rating' />
        <div className='ratingwrapper'>
          <div className='intextWrap'><span className='ratetext'> Ratings</span></div>
          <div className='subrateWrap'>
            <p className='ratenumber'>
              57
            </p>
            <p className='ratingtext'>

              Has ethical code of conduct and is safe to do bussines with

            </p>
          </div>
          <hr className='hrwrap' />
          <div className='subrateWrap'>
            <p className='ratenumber'>
              27
            </p>
            <p className='ratingtext'>

              Met In real life/Video call


            </p>
          </div>

        </div>

        <div className='testimonalWrapper'>
          <div className='intextWrap'><span className='testimonalText'> Testimonals </span> <span   onClick={()=>openToastcominSoon()}className='testimonalSeeAll'>See all</span></div>

          <div className='testiWrapper'>
            <div className='subTestimonal'>
              <img src={picbanner} alt="Los Angeles" className="testimonalimage" />
              <img className="quotedimg" src={quotes} alt='quotesimg' />
              <p className='imgaeTExtmulti'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,... </p>
              <img className='Propic' src={prosmall} alt='eclips' />
              <p className='proName'>Saurabh Goswamy</p>
              <div className='pinned'>
                <span className='pinnedText'>14 Dec 2022</span>
                <img src={pinlogo} alt='pinned' />
              </div>

            </div>
            <div className='subTestimonal'>
              <img src={picbanner} alt="Los Angeles" className="testimonalimage" />
              <img className="quotedimg" src={quotes} alt='quotesimg' />
              <p className='imgaeTExtmulti'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,... </p>
              <img className='Propic' src={prosmall} alt='eclips' />
              <p className='proName'>Saurabh Goswamy</p>
              <div className='pinned'>
                <span className='pinnedText'>14 Dec 2022</span>
                <img src={pinlogo} alt='pinned' />
              </div>

            </div>
            <div className='subTestimonal'>
              <img src={picbanner} alt="Los Angeles" className="testimonalimage" />
              <img className="quotedimg" src={quotes} alt='quotesimg' />
              <p className='imgaeTExtmulti'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,... </p>
              <img className='Propic' src={prosmall} alt='eclips' />
              <p className='proName'>Saurabh Goswamy</p>
              <div className='pinned'>
                <span className='pinnedText'>14 Dec 2022</span>
                <img src={pinlogo} alt='pinned' />
              </div>

            </div>
            <div className='subTestimonal'>
              <img src={picbanner} alt="Los Angeles" className="testimonalimage" />
              <img className="quotedimg" src={quotes} alt='quotesimg' />
              <p className='imgaeTExtmulti'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,... </p>
              <img className='Propic' src={prosmall} alt='eclips' />
              <p className='proName'>Saurabh Goswamy</p>
              <div className='pinned'>
                <span className='pinnedText'>14 Dec 2022</span>
                <img src={pinlogo} alt='pinned' />
              </div>

            </div>
            <div className='subTestimonal'>
              <img src={picbanner} alt="Los Angeles" className="testimonalimage" />
              <img className="quotedimg" src={quotes} alt='quotesimg' />
              <p className='imgaeTExtmulti'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,... </p>
              <img className='Propic' src={prosmall} alt='eclips' />
              <p className='proName'>Saurabh Goswamy</p>
              <div className='pinned'>
                <span className='pinnedText'>14 Dec 2022</span>
                <img src={pinlogo} alt='pinned' />
              </div>

            </div>
            <div className='subTestimonal'>
              <img src={picbanner} alt="Los Angeles" className="testimonalimage" />
              <img className="quotedimg" src={quotes} alt='quotesimg' />
              <p className='imgaeTExtmulti'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,... </p>
              <img className='Propic' src={prosmall} alt='eclips' />
              <p className='proName'>Saurabh Goswamy</p>
              <div className='pinned'>
                <span className='pinnedText'>14 Dec 2022</span>
                <img src={pinlogo} alt='pinned' />
              </div>

            </div>

          </div>




        </div>
        <div className='myskills'>
          <img src={skillimg} alt="skill" />
          <div className='skillnamediv'>
            <p className='subText1'>
              My Super Skills
            </p>
            <p className='subText'>
              4 traits
            </p>

          </div>
          <img className="vector" src={vector} alt="vector" />
        </div>
        <div className='mybio'>
          <div className='d-flex'>
            <p className="myBioText">My bio</p>
            <img className="mybiovec" src={vector} alt="vector" />
          </div>

        </div>
        <div className='Need'>
          <div className='intextWrap'><span className='testimonalText'> I need </span> <span  onClick={()=>openToastcominSoon()}  className='testimonalSeeAll'>See all</span></div>

          <div className='scrollableneed'>
            <div className='needsub'>
              <p className='needDate'>
                7 June 2023
              </p>
              <p className='needrequest'>

                I need a apartment in Mumbai
              </p>
            </div>
            <div className='needsub'>
              <p className='needDate'>
                7 June 2023
              </p>
              <p className='needrequest'>

                I need a apartment in Mumbai
              </p>
            </div>
            <div className='needsub'>
              <p className='needDate'>
                7 June 2023
              </p>
              <p className='needrequest'>

                I need a apartment in Mumbai
              </p>
            </div>
            <div className='needsub'>
              <p className='needDate'>
                7 June 2023
              </p>
              <p className='needrequest'>

                I need a apartment in Mumbai
              </p>
            </div>
            <div className='needsub'>
              <p className='needDate'>
                7 June 2023
              </p>
              <p className='needrequest'>

                I need a apartment in Mumbai
              </p>
            </div>
          </div>

        </div>
        <div className='comments'>
          <div className='intextWrap'><span className='testimonalText'> Comments </span> <span  onClick={()=>openToastcominSoon()}  className='testimonalSeeAll'>See all</span></div>

          <div className='commentMain'>

            <img className='commentImg' src={Gwen} alt="Gwen" />
            <p className='CommentText'>
              <span className='addWeight'>
                Gwen Stacy
              </span>&nbsp;
              See you in the next event &nbsp;
              <span>
                @chachachaudhari
              </span>
            </p>

          </div>
          <p className='timestamp'><span className='seconds'>1s
          </span><span> 241 likes </span></p>

          <div className='commentMain'>

            <img className='commentImg' src={Gwen} alt="Gwen" />
            <p className='CommentText'>
              <span className='addWeight'>
                Gwen Stacy
              </span>&nbsp;
              See you in the next event &nbsp;
              <span>
                @chachachaudhari
              </span>
            </p>

          </div>
          <p className='timestamp'><span className='seconds'>1s
          </span><span> 241 likes </span></p>


          <div className='commentMain'>

            <img className='commentImg' src={Gwen} alt="Gwen" />
            <p className='CommentText'>
              <span className='addWeight'>
                Gwen Stacy
              </span>&nbsp;
              See you in the next event &nbsp;
              <span>
                @chachachaudhari
              </span>
            </p>

          </div>
          <p className='timestamp'><span className='seconds'>1s
          </span><span> 241 likes </span></p>

          <div className='commentMain'>

            <img className='commentImg' src={Gwen} alt="Gwen" />
            <p className='CommentText'>
              <span className='addWeight'>
                Gwen Stacy
              </span>&nbsp;
              See you in the next event &nbsp;
              <span>
                @chachachaudhari
              </span>
            </p>

          </div>
          <p className='timestamp'><span className='seconds'>1s
          </span><span> 241 likes </span></p>
          <span>
          </span>

          <div className='scrollDisplay'>
            <hr className='linemore' />

            <span className='seemore'>View 2 more replies </span>

          </div>
          <h2></h2>

        </div>


      </div>
    </div >
  );
}

export default App;
