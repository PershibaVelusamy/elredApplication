import React, { useState } from 'react'
import { girl, beifcase, locate, minilocation, frame, share, carosel1, rating, quotes, picbanner, pinlogo, skillimg, vector, Gwen, gen, prosmall } from '../../assets/images/index'
import { commentList } from '../../constants/comments';
import { Commands } from '../widgeds/command';
export const Home = () => {
  const [openToast, setopenToast] = useState(false)

  const openToastcominSoon = () => {

    setopenToast(true)

    setTimeout(() => {
      setopenToast(false)
    }, 2000)
  }

  console.log(commentList, "commentList")
  return (
    <div>
      <div className='mainwrapper imgwrP'>
        <nav className="navbar navbar-expand-sm navbar-dark profilenav">
          <div className="container-fluid">
            <span className="profileText">Profile</span>
          </div>
        </nav>


        <div class={openToast ? `alert alert-info mt-3 toastvisible` : `alert alert-info mt-3 toast`}>
          <strong>Info!</strong> Comming soon..
        </div>


        <div className='profilewrapper profileDetail'>

          <img src={girl} alt='profilegirl' />
          <div className='profiledataWrapper'>
            <p className='profileName'>
              Alexandra Stanton
            </p>
            <p className='designation'><img src={beifcase} className='locatImg' alt='brief' /><span className='breifName'>Realtor | VP design</span></p>
            <p className='location'><img src={locate} className="locatImg1" alt='location' /><span className='locateName'>Bangalore, India</span></p>

          </div>
          <img className='frame' src={frame} alt='frame' />

        </div>
        <div className='MainWrapperall'>
          <div className='shareWrapper'>
            <img className='shareimg' src={share} alt="share" />
          </div>
          <div className='offercarrosel'>
            <div className='intextWrap'><span className='intext'> I can offer </span> <span onClick={() => openToastcominSoon()} className='seeall'>See all</span></div>


            <div class="scroll-container">
              <div className='imagecontainer'>
                <div className='imageGradient'>
                  <img src={carosel1} alt="Los Angeles" className="caroselImg" />
                </div>

                <img src={minilocation} className="locatemini" alt='location' />
                <p className='locateText'>Mumbai</p>
                <div className='desText'>Top 5 interior design projects</div>
              </div>
              <div className='imagecontainer'>
                <div className='imageGradient'>
                  <img src={carosel1} alt="Los Angeles" className="caroselImg" />
                </div>              <img src={minilocation} className="locatemini" alt='location' />
                <p className='locateText'>Pune</p>
                <div className='desText'>Top 10 integrated design projects</div>
              </div>
              <div className='imagecontainer'>
                <div className='imageGradient'>
                  <img src={carosel1} alt="Los Angeles" className="caroselImg" />
                </div>              <img src={minilocation} className="locatemini" alt='location' />
                <p className='locateText'>Chennai</p>
                <div className='desText'>Conversational AI related Project</div>
              </div>
              <div className='imagecontainer'>
                <div className='imageGradient'>
                  <img src={carosel1} alt="Los Angeles" className="caroselImg" />
                </div>              <img src={minilocation} className="locatemini" alt='location' />
                <p className='locateText'>Delhi</p>
                <div className='desText'>UCAAS with tailored AI Project</div>
              </div>
              <div className='imagecontainer'>
                <div className='imageGradient'>
                  <img src={carosel1} alt="Los Angeles" className="caroselImg" />
                </div>              <img src={minilocation} className="locatemini" alt='location' />
                <p className='locateText'>cochi</p>
                <div className='desText'>Top 5 interior design projects</div>
              </div>
            </div>

          </div>

          <div className='positionStar'>
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
          </div>



          <div className='testimonalWrapper'>
            <div className='intextWrap'><span className='testimonalText'> Testimonals </span> <span onClick={() => openToastcominSoon()} className='testimonalSeeAll'>See all</span></div>

            <div className='testiWrapper'>
              <div className='subTestimonal'>
                <img src={picbanner} alt="Los Angeles" className="testimonalimage" />
                <img className="quotedimg" src={quotes} alt='quotesimg' />
                <div className='imgaeTExtmulti'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,... </div>
                <img className='Propic' src={prosmall} alt='eclips' />
                <p className='proName'>Saurabh Goswamy</p>
                <div className='pinned'>
                  <span className='pinnedText'>4 Dec 2022</span>
                  <img src={pinlogo} alt='pinned' />
                </div>

              </div>
              <div className='subTestimonal'>
                <img src={picbanner} alt="Los Angeles" className="testimonalimage" />
                <img className="quotedimg" src={quotes} alt='quotesimg' />
                <div className='imgaeTExtmulti'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,... </div>
                <img className='Propic' src={prosmall} alt='eclips' />
                <p className='proName'>Saurabh Goswamy</p>
                <div className='pinned'>
                  <span className='pinnedText'>4 Dec 2022</span>
                  <img src={pinlogo} alt='pinned' />
                </div>

              </div>
              <div className='subTestimonal'>
                <img src={picbanner} alt="Los Angeles" className="testimonalimage" />
                <img className="quotedimg" src={quotes} alt='quotesimg' />
                <div className='imgaeTExtmulti'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,... </div>
                <img className='Propic' src={prosmall} alt='eclips' />
                <p className='proName'>Saurabh Goswamy</p>
                <div className='pinned'>
                  <span className='pinnedText'>4 Dec 2022</span>
                  <img src={pinlogo} alt='pinned' />
                </div>

              </div>
              <div className='subTestimonal'>
                <img src={picbanner} alt="Los Angeles" className="testimonalimage" />
                <img className="quotedimg" src={quotes} alt='quotesimg' />
                <div className='imgaeTExtmulti'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,... </div>
                <img className='Propic' src={prosmall} alt='eclips' />
                <p className='proName'>Saurabh Goswamy</p>
                <div className='pinned'>
                  <span className='pinnedText'>4 Dec 2022</span>
                  <img src={pinlogo} alt='pinned' />
                </div>

              </div>
              <div className='subTestimonal'>
                <img src={picbanner} alt="Los Angeles" className="testimonalimage" />
                <img className="quotedimg" src={quotes} alt='quotesimg' />
                <div className='imgaeTExtmulti'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,... </div>
                <img className='Propic' src={prosmall} alt='eclips' />
                <p className='proName'>Saurabh Goswamy</p>
                <div className='pinned'>
                  <span className='pinnedText'>4 Dec 2022</span>
                  <img src={pinlogo} alt='pinned' />
                </div>

              </div>

            </div>




          </div>
          <div className='myskills'>
            <img src={skillimg} alt="skill" />
            <div className='skillnamediv'>
              <div className='subText1'>
                My Super Skills
              </div>
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
            <div className='intextWrap'><span className='testimonalText'> I need </span> <span onClick={() => openToastcominSoon()} className='testimonalSeeAll'>See all</span></div>

            <div className='scrollableneed'>
              <div className='needsub'>
                <p className='needDate'>
                  7 June 2023
                </p>
                <div className='needrequest'>

                  I need a apartment in Mumbai
                </div>
              </div>
              <div className='needsub'>
                <p className='needDate'>
                  7 April 2023
                </p>
                <div className='needrequest'>

                  I need a villa in Chennai
                </div>
              </div>
              <div className='needsub'>
                <p className='needDate'>
                  7 June 2023
                </p>
                <div className='needrequest'>

                  I need a apartment in Mumbai
                </div>
              </div>
              <div className='needsub'>
                <p className='needDate'>
                  9 July 2023
                </p>
                <div className='needrequest'>

                  I need a flat and appartment in pune
                </div>
              </div>
              <div className='needsub'>
                <p className='needDate'>
                  6 May 2023
                </p>
                <div className='needrequest'>

                  I need a apartment in Mumbai
                </div>
              </div>
            </div>

          </div>
          <div className='comments'>
            <div className='intextWrap'><span className='testimonalText'> Comments </span> <span onClick={() => openToastcominSoon()} className='testimonalSeeAll'>See all</span></div>

            <div className='commentscroller'>


              <Commands commentList={commentList} />


            </div>


            <div className='scrollDisplay'>
              <hr className='linemore' />

              <span className='seemore'>View 2 more replies </span>

            </div>
            <h2></h2>

          </div>


        </div>
      </div >
    </div>
  )
}
