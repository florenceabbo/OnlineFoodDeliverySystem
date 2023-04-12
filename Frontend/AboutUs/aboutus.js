import React from 'react'
import { Images1, Images2, Images3, Images4 } from './image'
import './aboutus.css'

const Aboutus = () => {
    return (
        <div className='containa'>
            <nav>Links</nav>
            <div className='background'>
                <h1>KNOW MORE ABOUT ROYAL FOODS</h1>
                <div className='mission'>
                    <p><h2 className='h3'>OUR MISSION AND VISION</h2><br></br>We strive to deliver quality and distinctive taste
                        for both our local and international meals <br></br>and we intend
                        to extend our supply to all
                        parts of Uganda.</p>
                    <Images1 />
                </div>
              
                <div className='dreamers'>
                
                    <p><h2 className='h4'>OUR STORY</h2><br></br>As dreamers, we have always seen ourselves do something
                        that people<br></br> will be so proud of and that has kept us driven
                        for so long. As a <br></br>result of determination, hard work and
                        consistency, we managed to establish<br></br> our dreams in the
                        community.<br></br><br></br>

                        From day one, we sought being faithful and loyal to deliver<br></br>
                        what is best for our customers which has kept us prospering<br></br>
                        and growing every single day.<br></br><br></br>

                        We have created our branches in different parts of Uganda<br></br>
                        and just like our vision, we aim at supplying the whole Uganda
                        with our undoubted food quality
                    </p>
                    
                </div>
                
            </div>

            <div className='delivery_services'>
                <Images2 />
                <p><h2>DELIVERY SERVICES</h2><br></br>We have got a number of motorcycles to make quick deliveries<br></br>
                    to single homes and we also have trucks that carry large amount<br></br>
                    of food to functions for convenience purposes.<br></br>
                    Our delivery agents are very fast, loyal and trustworthy.
                </p>

            </div>



            <div className='comfort'>
                <Images3 />
                <p> <h2>AT YOUR COMFORT</h2><br></br>Your food finds you at the
                    comfort of your place<br></br> and any time you may
                    need it.</p>
            </div>
            <div className='footer'>
                <div>
                <Images4 />
                <p className='copy'>&copy; 2023 ROYAL FOODS LTD</p>
                </div>
                <div>
                    <h2>Our Impacts</h2>
                    <p>Quality and healthy<br></br>
                        food for the community<br></br>

                        Provided jobs to many<br></br>

                        Eased transportation<br></br> 
                        of food</p>
                </div>
                <div>
                    <h2>Our Offices</h2>
                    <p>Main branch is<br></br>
                        in Kasangati, Gayaza<br></br>
                        road.<br></br>
                        Other branches are in:<br></br>
                        Mityana, Mukono,<br></br>
                        Mbarara andArua </p>
                </div>
                <div>
                    <h2>Events</h2>
                    <p>We prepare<br></br>
                        meals for <br></br>
                        different<br></br>
                        occasions as well<br></br>
                        as for large<br></br>
                        audiences.</p>
                </div>
            </div>
        </div>
    )
}

export default Aboutus