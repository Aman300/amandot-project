import React from 'react'
import pic from './img/wallpaper.jpg';

import Form from './form';




function Home() {



    return (

        <>
            <br></br>
            <br></br>
            <br></br>
            <div className="container-fluid bg-white">
                <div className='row'>
                    <div className='col-md-6 col-12'>
                        <div className='container padding'>
                            <h1>APS</h1>
                            <h2>Development</h2>
                            <p>Web programming, also known as web development, is the creation of dynamic web applications. Examples of web applications are social networking sites like Facebook or e-commerce sites like Amazon. The good news is that learning web development is not that hard!</p>
                            <div className='bnt'>
                                <button type="submit" className="btn text-white">Know More</button>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6  col-12'>
                        <img className='w-100' src={pic} alt='img'></img>
                    </div>
                </div>
            </div>
            <div className='container-fluid bg-white'>
                <h6 className='display-4 text-center'>Our servises</h6>
                <div className='row text-center p-4'>
                    <div className='col-xl-3 col-12'>
                        <br></br>
                        <img src='https://santophy.com/static/assets/images/web-development%20(2).svg' alt='img'></img> 
                        <h4>Web Development</h4>
                        <h5>We provide thoughtful and effective web page designs created by our professionals.</h5>
                    </div>
                    <div className='col-xl-3 col-12'>
                        <img src='https://santophy.com/static/assets/images/innovation.svg' alt='img'></img>
                        <h4>UI UX Design</h4>
                        <h5>We provide elegant UI&UX, bold typography, intuitive navigation and uniquely custom designed with quality content.</h5>
                    </div>
                    <div className='col-xl-3 col-12'>
                        <img src='https://santophy.com/static/assets/images/apps-develop.svg' alt='img'></img>
                        <h4>Mobile App Development</h4>
                        <h5>We offer world-class mobility solutions and form your concepts into a revolutionary mobile app.</h5>
                    </div>
                    <div className='col-xl-3 col-12'>
                        <img src='https://santophy.com/static/assets/images/aiml.svg' alt='img'></img>
                        <h4>AI/ML Development</h4>
                        <h5>We offer the foremost exciting technologies that one would have ever come upon. It offers the computer that makes it a lot of the same as humans.</h5>
                    </div>
                </div>
            </div>

            <div className='container-fluid background-color'>
                <div className='row p-4'>
                    <div className='col-xl-6 col-12 text-center'>
                        <br></br>
                        <img src='https://images.pexels.com/photos/7605201/pexels-photo-7605201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'style={{borderRadius: "30px"}} className='w-75' alt='img'></img> 
                    </div>
                    <div className='col-xl-6 col-12'>
                        <h2 className='text-white text-center'>why you need website</h2>
                        <br></br>
                        <div className='text-size'>
                            <ol>
                                <li>Having a website will attract new customers to your business and make you more money.</li>
                                <li>Add instant credibility to your business simply by having a website.</li>
                                <li> It’s not as hard, or as expensive, as you think.</li>
                                <li>Having a website will end up saving you time.</li>
                                <li>Position yourself and stay in control of your brand.</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>

            <Form/>





        </>

    )
}

export default Home;


