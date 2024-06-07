import { useState } from 'react';
import './App.css';
import data from './data.json';
// import { v4 as uuidv4 } from 'uuid';

import h2h from './assets/H2H.mp4';
import rationales from './assets/Rationales.mp4';
import maze from './assets/Maze.mp4';
import weatherapp from './assets/WeatherApp.mp4';
import anime from './assets/Anime.mp4';
import mic from './assets/Mic.mp4'
import editable from './assets/EditableResume.mp4';
import Collapse from 'react-bootstrap/Collapse';


export default function Projects() {
    const [index, setIndex] = useState(0);
    const projects = Object.keys(data.projects);

    return (
        <>
            
            <div id="projects" className='p-2 mx-0 mt-5 d-flex flex-column justify-content-center align-items-center'>
                <h3><u>Projects</u></h3>

                <div className='d-none d-md-flex flex-row justify-content-center align-items-center' style={{columnGap: '30px'}}>
                    {index < 4 && <>
                        <div style={{ textDecoration: projects[index] == "MarketApp" ? 'underline' : 'none', fontSize: 'larger' }} onClick={() => setIndex(0)}>H2H | Market Application</div>
                        <div style={{ textDecoration: projects[index] == "Rationales" ? 'underline' : 'none', fontSize: 'larger' }} onClick={() => setIndex(1)}>Rationales Visualization</div>
                        <div style={{ textDecoration: projects[index] == "Anime" ? 'underline' : 'none', fontSize: 'larger' }} onClick={() => setIndex(2)}>Anime Versus Web Application</div>
                        <div style={{ textDecoration: projects[index] == "Mic" ? 'underline' : 'none', fontSize: 'larger' }} onClick={() => setIndex(3)}>Cell Phone Mic Challenge</div>
                    </>}
                    {index >= 4  && <>
                        <div style={{ textDecoration: projects[index] == "Maze" ? 'underline' : 'none', fontSize: 'larger' }} onClick={() => setIndex(4)}>Android Maze Game</div>
                        <div style={{ textDecoration: projects[index] == "WeatherApp" ? 'underline' : 'none', fontSize: 'larger' }} onClick={() => setIndex(5)}>Weather Forecast Website</div>
                        <div style={{ textDecoration: projects[index] == "EditableResume" ? 'underline' : 'none', fontSize: 'larger' }} onClick={() => setIndex(6)}>Editable Resume Builder</div>
                    </>}
                </div>
                
                {(<Collapse in={projects[index] == "MarketApp"}>
                    <div>
                        <div className='row p-md-5 d-flex flex-column-reverse flex-sm-row justify-content-center align-items-center'>
                            <div className='col-4'>
                                <div className='d-flex flex-row justify-content-center align-items-center w-100'>
                                    <video style={{width: 200}} className='border border-dark rounded' autoPlay={true} muted={true} loop={true}>
                                        <source src={h2h} autoPlay={true} type='video/webm' />
                                    </video>
                                </div>
                            </div>
                            <div className='col pt-sm-3'>
                                <h5>H2H | College Based Market Application</h5>
                                <span>
                                Lead developer in a small team currently creating a full-stack mobile application for college students to sell and purchase
                                products from other students. The application has many features that allow students to purchase
                                products from other students.  Students can create, customize, and edit their app profiles, browse various types of items being
                                sold, as well as chat with other students inside of the app.
                                <br /> <br />

                                For this project, the TypeScript/JavaScript-based <em><b>React Native</b></em> mobile app development framework is used as the frontend to create all screens that the
                                user interacts with.  This includes the login page, the home page, the in-app chat feature, the profile page, and much more.  The data that is shown on each page in the frontend is retrieved from <em><b>Django</b></em>, a Python-based backend framework.
                                An API created using <em><b> Django&#39;s REST API framework</b></em> provides the medium of communication between the frontend and the backend via HTTP requests. <br /> <br />
                                
                                Django creates, retrieves, updates, and deletes information from a PostgreSQL database hosted on AWS, specifically <em><b>Amazon RDS</b></em>.
                                For deployment, the django application is stored in AWS, specifically using an <em><b>Amazon EC2</b></em> instance.  This EC2 instance uses <em><b>Gunicorn</b></em> as
                                a WSGI server to communicate with the Django application, and the instance also uses <em><b>Nginx</b></em> as a reverse proxy to handle all HTTP requests from the frontend and direct them
                                to <em><b>Gunicorn</b></em> and further to the Django application.  Requests from the frontend use a url generated by Amazon Route 53, which points to the IP of the
                                Amazon EC2 instance.
                                </span>
                                
                            </div>
                        </div>
                    </div>
                </Collapse>
                )}
                
                {(<Collapse in={projects[index] == "Rationales"} >
                    <div>
                    <div className='row p-md-5 rounded d-flex flex-column-reverse flex-md-row justify-content-center align-items-center' style={{columnGap: '20px',}}>
                            <div className='col'>
                                <div className='d-flex flex-row justify-content-center align-items-center w-100'>
                                    <video className='w-100 border border-dark rounded' autoPlay={true} muted={true} loop={true}>
                                        <source src={rationales} autoPlay={true} type='video/mp4' />
                                    </video>
                                </div>
                            </div>
                            <div className='col-md-6 pt-sm-3'>
                                <h5>Rationales Visualization Tool</h5>
                                <span>
                                <em>Rationales</em> are an important topic in the development of Neural Code Models (NCM).
                                For all tokens generated by an NCM, <em>Rationales</em> are preceding that contributed
                                to the model producing new tokens in the completed code output.
                                This project involved creating a web app that serves as a tool to help visualize rationales for tokens
                                generated by auto-completed code, as well as their taxonomy. 
                                </span> <br /> <br />

                                <span>
                                For this project, the JavaScript library <em><b>React.js</b></em> is used to build the frontend of the website.
                                The frontend either displays examples of generated code and its rationales from data stored within the React codebase <i>or</i>
                                displays completed code generated from user input.  The second option is powered by the following 
                                <a href="https://github.com/keyonvafa/sequential-rationales"> Rationalization Model </a>.  The communication between the frontend and the model, involving input code and completed generated code, is managed using
                                <em><b> Flask</b></em>, a Python-based backend framework.
                                </span>
                                
                            </div>
                        </div>
                    </div>
                </Collapse>
                )}

                {(<Collapse in={projects[index] == "Anime"}>
                    <div>
                    <div className='row p-md-5 rounded d-flex flex-column-reverse flex-sm-row justify-content-center align-items-center' style={{columnGap: '20px',}}>
                        <div className='col'>
                                <div className='d-flex flex-row justify-content-center align-items-center w-100'>
                                    <video className='w-100 border border-dark rounded' autoPlay={true} muted={true} loop={true}>
                                        <source src={anime} autoPlay={true} type='video/mp4' />
                                    </video>
                                </div>
                            </div>
                            <div className='col pt-3'>
                                <h5>Anime Versus Web Application</h5>
                                <span style={{fontSize: 'larger'}}>
                                User ranking of anime characters based off of head-to-head battles visualized by web-scraped fandom images. Uses
                                Angular as the front-end framework to present data to the user, and Flask equipped with a REST API as the
                                back-end framework to distribute data. Flask API hosted on Heroku, and Angular app on Github Pages.
                                </span> <br /> <br />

                                <span>
                                This project was submitted for Hoohacks 2024.  To learn more about the project, please visit the <a href='https://devpost.com/software/animeversus'>Hoohacks DevPost</a> submission
                                </span>
                                
                            </div>
                        </div>
                    </div>
                </Collapse>)}

                {(<Collapse in={projects[index] == "Mic"}>
                    <div>
                    <div className='row p-md-5 rounded d-flex flex-column-reverse flex-sm-row justify-content-center align-items-center' style={{columnGap: '20px',}}>
                            <div className='col-4'>
                                <div className='d-flex flex-row justify-content-center align-items-center w-100'>
                                    <video style={{width: 200}} className='border border-dark rounded' autoPlay={true} muted={true} loop={true}>
                                        <source src={mic} autoPlay={true} type='video/mp4' />
                                    </video>
                                </div>
                            </div>
                            <div className='col pt-3'>
                                <h5>Cell Phone Mic Challenge</h5>
                                <span style={{fontSize: 'larger'}}>
                                The mobile application records audio from a piece of rotating or reciprocating machinery, analyzes its current condition, and displays information for users. 
                                The app allows users to enter a known load value, and users are then able to record an audio sample. 
                                The audio sample is analyzed against known loads, and an estimate for the actual load for that audio sample is returned. 
                                The app displays the Fast Fourier Transform for the recorded sample, as well as the known and unknown load values, helping to intuitively display the performance of the machine.
                                </span> <br /> <br />

                                <span>
                                React Native, a JavaScript frontend framework, creates the frontend of the cross-platform application. 
                                Flask, a python backend framework, analyzes audio data sent front the frontend. 
                                We used a Random Forest Decision Tree to analyze various metrics, including dominant frequencies and the spectral centroid, to interpolate the predicted value of the load. 
                                Once this data was acquired, we communicated it to the front end to be displayed in the app.
                                </span> <br /> <br />

                                <span>
                                This project won the <em>Cell Phone Mic Challenge</em> portion of TribeHacks 2024.  
                                To learn more about the project, visit the <a href="https://devpost.com/software/cell-phone-mic-challenge">TribeHacks Devpost</a> submission.
                                </span>
                                
                            </div>
                        </div>
                    </div>
                </Collapse>)}
                
                {(<Collapse in={projects[index] == "Maze"}>
                    <div>
                    <div className='row p-md-5 rounded d-flex flex-column-reverse flex-sm-row justify-content-center align-items-center' style={{columnGap: '20px',}}>
                            <div className='col-4'>
                                <div className='d-flex flex-row justify-content-center align-items-center w-100'>
                                    <video style={{width: 200}} className='border border-dark rounded' autoPlay={true} muted={true} loop={true}>
                                        <source src={maze} autoPlay={true} type='video/mp4' />
                                    </video>
                                </div>
                            </div>
                            <div className='col pt-3'>
                                <h5>Android Maze Application</h5>
                                <span style={{fontSize: 'larger'}}>
                                Developed an Android application that allows users to navigate through a
                                maze in the 3rd person POV.  The game allows users to select from various
                                difficulty levels and various maze sizes.  The user can chose to manually play the game, or
                                allow the computer to play the game on various difficulty levels.
                                </span> <br /> <br />

                                <span>
                                The core of the application&apos;s functionality lies in maze generation, done through the implementation of various graphing algorithms
                                 in <em>Java</em>, including DFS, Prim, and Boruvka&apos;s algorithms. Moreover, the automated maze player, also developed in Java, offers users the choice between a
                                Wizard algorithm, which possesses pre-knowledge of the exit path, or the
                                <a href="https://andrewyong7338.medium.com/maze-escape-with-wall-following-algorithm-170c35b88e00"> Wall Follower </a>
                                algorithm.  The frontend is developed using Android Studio.
                                </span>
                                
                            </div>
                        </div>
                    </div>
                </Collapse>)}

                {(<Collapse in={projects[index] == "WeatherApp"}>
                <div>
                    <div className='row p-md-5 rounded d-flex flex-column-reverse flex-md-row justify-content-center align-items-center' style={{columnGap: '20px',}}>
                        <div className='col'>
                            <div className='d-flex flex-row justify-content-center align-items-center w-100'>
                                <video className='w-100 border border-dark rounded' autoPlay={true} muted={true} loop={true}>
                                    <source src={weatherapp} autoPlay={true} type='video/mp4' />
                                </video>
                            </div>
                        </div>
                        <div className='col-md-6 pt-sm-3'>
                            <h5>Weather Forecast Website</h5>
                            <span style={{fontSize: 'larger'}}>
                                Simple weather forecast website that provides users with up-to-date weather conditions for any specified location. 
                                Using API calls from the Free Weather API, the website retrieves real-time weather information.
                                The project is built using a combination of <em><b>HTML, CSS, </b></em>and vanilla <em><b>JavaScript</b></em>
                            </span> <br /> <br />

                            <span>To view the website live, click <a href='https://kbofosutuffour.github.io/WeatherApp/'>here.</a></span>
                        </div>
                    </div>
                </div>
                </Collapse>)}

                {<Collapse in={projects[index] == "EditableResume"}>
                    <div>
                        <div className='row p-md-5 rounded d-flex flex-column-reverse flex-md-row justify-content-center align-items-center' style={{columnGap: '20px',}}>
                            <div className='col'>
                                <div className='d-flex flex-row justify-content-center align-items-center w-100'>
                                    <video className='w-100 border border-dark rounded' autoPlay={true} muted={true} loop={true}>
                                        <source src={editable} autoPlay={true} type='video/mp4' />
                                    </video>
                                </div>
                            </div>
                            <div className='col-md-6 pt-sm-3'>
                                <h5>Editable Resume Builder</h5>
                                <span style={{fontSize: 'larger'}}>
                                    Interface that allows users to create a resume using a
                                    pre-built resume template.  Changes from the user on the input screen are
                                    shown on the resume in real time as they are editing.  Built using <em><b>React.js</b></em>.
                                </span> <br /> <br />
                            </div>
                        </div>
                    </div>
                </Collapse>}
                <div className='d-flex flex-row justify-content-center align-items-center mb-3'>
                    <div style={{fontSize: 'x-large', fontWeight: 'bold'}}>{index+1}/{projects.length}</div>
                </div>

                <div className='d-flex flex-row justify-content-center align-items-center'>
                    <button onClick={() => setIndex(index - 1 >= 0 ? index - 1 : projects.length-1)}>Back</button>
                    <button onClick={() => setIndex(index + 1 < projects.length ? index + 1 : 0)}>Next</button>
                </div>

                <p className='mt-3'>NOTE: This portfolio website uses <em><b>React.js</b></em> and <em><b>Bootstrap</b></em></p>
            </div>

        </>
    )
}