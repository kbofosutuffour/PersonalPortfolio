import { useState } from 'react';
import './App.css';
import data from './data.json';
// import { v4 as uuidv4 } from 'uuid';

import h2h from './assets/H2H.mp4';
import rationales from './assets/Rationales.mp4';
import maze from './assets/Maze.mp4';
import weatherapp from './assets/WeatherApp.mp4';
import editable from './assets/EditableResume.mp4';
import Collapse from 'react-bootstrap/Collapse';


export default function Projects() {
    const [index, setIndex] = useState(0);
    const projects = Object.keys(data.projects);

    return (
        <>
            
            <div id="projects" className='p-3 mx-0 mt-5 d-flex flex-column justify-content-center align-items-center'>
                <h3><u>Projects</u></h3>

                <div className='d-none d-md-flex flex-row justify-content-center align-items-center' style={{columnGap: '30px'}}>
                    <div style={{textDecoration: projects[index] == "MarketApp" ? 'underline' : 'none', fontSize: 'larger'}} onClick={() => setIndex(0)}>H2H | Market Application</div>
                    <div style={{textDecoration: projects[index] == "Rationales" ? 'underline' : 'none', fontSize: 'larger'}} onClick={() => setIndex(1)}>Rationales Visualization</div>
                    <div style={{textDecoration: projects[index] == "Maze" ? 'underline' : 'none', fontSize: 'larger'}} onClick={() => setIndex(2)}>Android Maze Game</div>
                    <div style={{textDecoration: projects[index] == "WeatherApp" ? 'underline' : 'none', fontSize: 'larger'}} onClick={() => setIndex(3)}>Weather Forecast Website</div>
                    <div style={{textDecoration: projects[index] == "EditableResume" ? 'underline' : 'none', fontSize: 'larger'}} onClick={() => setIndex(4)}>Editable Resume Builder</div>
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
                                </span> <br /> <br />

                                <span>
                                For this project, the JavaScript-based <em><b>React Native</b></em> Mobile App development framework is used as the frontend to create all screens that the
                                user interacts with.  The frontend communicates with data stored in our SQL database using <em><b>Django</b></em>, a Python-based backend framework.
                                An API created using Django&#39;s REST API framework provides the medium of communication between the frontend and the backend.
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
                                <a href="https://github.com/keyonvafa/sequential-rationales"> Rationalization Model </a>.  Input code and completed generated code are
                                sent between the frontend and the model using <em><b>Flask</b></em>, a python based backend framework.
                                </span>
                                
                            </div>
                        </div>
                    </div>
                </Collapse>
                )}
                
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
                                The maze generation is done using various graphing algorithms implemented in <em>Java</em>,
                                including DFS, Prim, and Boruvka&#39;s graph algorithms.  The automated maze player is also implemented
                                using <em>Java</em>, using a &#34;Wizard&#34; (which actually already knows the path to the exit), or the
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
                                Simple weather forecast website that displays the current weather
                                conditions at any specified location.  Retrieves information using API calls from
                                <a href="https://www.weatherapi.com/"><em>Free Weather API</em></a>.  
                                The project uses <em><b>HTML, CSS, </b></em>and vanilla <em><b>JavaScript</b></em>
                            </span> <br /> <br />
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

                <div className='d-flex flex-row justify-content-center align-items-center'>
                    <button onClick={() => setIndex(index - 1 >= 0 ? index - 1 : projects.length-1)}>Back</button>
                    <button onClick={() => setIndex(index + 1 < projects.length ? index + 1 : 0)}>Next</button>
                </div>
            </div>

        </>
    )
}