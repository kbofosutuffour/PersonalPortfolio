import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';

import aiddata from './assets/aiddata.png';
import paradyme from './assets/paradyme.jpg';
import chesterfield from './assets/chesterfield.png';
import google from './assets/google.gif';

import './App.css';

export default function WorkExperience() {

    const workExperiences = ['google', 'paradyme', 'aiddata', 'chesterfield']
    const [index, setIndex] = useState(0);

    return (
        <div id="workexperience" className='border border-dark p-5 m-md-5 mt-5 d-flex flex-column justify-content-center align-items-center rounded'>
            <h3><u>Work Experience</u></h3>
                <div className='d-none d-md-flex flex-row justify-content-center align-items-center' style={{columnGap: '30px'}}>
                    <div style={{textDecoration: workExperiences[index] == 'google' ? 'underline' : 'none', fontSize: 'larger'}} onClick={() => setIndex(0)}>Google</div>
                    <div style={{textDecoration: workExperiences[index] == 'paradyme' ? 'underline' : 'none', fontSize: 'larger'}} onClick={() => setIndex(1)}>Paradyme Management</div>
                    <div style={{textDecoration: workExperiences[index] == 'aiddata' ? 'underline' : 'none', fontSize: 'larger'}} onClick={() => setIndex(2)}>AidData</div>
                    <div style={{textDecoration: workExperiences[index] == 'chesterfield' ? 'underline' : 'none', fontSize: 'larger'}} onClick={() => setIndex(3)}>Chesterfield County IST</div>
                </div>

                {<Collapse in={workExperiences[index] == 'google'}>
                <div>
                    <div className='column row-md p-md-5 d-flex flex-column-reverse flex-md-row justify-content-center align-items-center'>
                        <div className='col-md'>
                            <div title='Click the picture to access its source'>
                                <a href='https://about.google/'><img style={{width: 300}} src={google}/></a>
                            </div>
                        </div>
                        <div className='col-md-9'>
                            <h5>Google: Software Engineer</h5>
                            <span>
                            I recently joined Google as a Software Engineer!  I will be working within Google&apos;s Core Area in creating and extending
                            features to a new aspect of Google&apos;s internal services.  I work within a team developing methods of incorporate Generative A.I.
                            into internal websites in hopes of boosting overall productivity for Google engineers.  For this role, I will be debugging, modifying, and
                            testing software using JavaScript (Angular), Python, and C++.  
                            </span>
                        </div>
                    </div>
                </div>
                </Collapse>}

                {<Collapse in={workExperiences[index] == 'paradyme'}>
                <div>
                    <div className='column row-md p-md-5 d-flex flex-column-reverse flex-md-row justify-content-center align-items-center'>
                        <div className='col-md'>
                            <div title='Click the picture to access its source'>
                                <a href='https://paradyme.us/'><img style={{width: 200}} src={paradyme}/></a>
                            </div>
                        </div>
                        <div className='col-md-9'>
                            <h5>Paradyme: Software Engineer</h5>
                            <span>
                            This was my first full-time professional experience after graduating from William and Mary.  
                            For this role, I collaborated with C3.AI to design, develop, and maintain advanced technical AI solutions, playing a crucial role in the overall project lifecycle. 
                            In addition to these responsibilities, I focused on building and improving tools that enable users to understand and analyze large-scale data more effectively. 
                            This involved developing user-friendly interfaces and robust back-end systems to process and visualize complex datasets. 
                            My technical expertise extended to performing debugging, modifications, and thorough testing of software applications, 
                            utilizing a diverse set of programming languages including JavaScript (React), Python, and Java. 
                            </span>
                        </div>
                    </div>
                </div>
                </Collapse>}
                {<Collapse in={workExperiences[index] == 'aiddata'}>
                    <div>
                        <div className='column row-md p-md-5 d-flex flex-column-reverse flex-md-row justify-content-center align-items-center'>
                            <div className='col-md'>
                                <div title='Click the picture to access its source'>
                                    <a href='https://www.aiddata.org/'><img style={{width: 200, border: '1px solid black'}} src={aiddata}/></a>
                                </div>
                            </div>
                            <div className='col-md-9'>
                                <h5>AidData: Software Developer Assistant</h5>
                                <span>        
                                While working full-time under <a onClick={() => setIndex(1)}>Paradyme Management</a>, I also worked closely with William and Mary’s Global Research Institute Finance team, specifically with their Foreign Development Finance Team, on various projects. 
                                In this role, I managed and maintained several internal websites that were built using a combination of Java, Backbone, and Node.js technologies. 
                                Additionally, I handled the integration and management of PostgreSQL and MongoDB databases, ensuring that the data infrastructure was robust and reliable. 
                                This involved not only the upkeep of existing systems but also the development of new features to enhance functionality and user experience.
                                </span>
                            </div>
                        </div>               
                    </div>
                </Collapse>}
                {<Collapse in={workExperiences[index] == 'chesterfield'}>
                    <div>
                        <div className='column row-md p-md-5 d-flex flex-column-reverse flex-md-row justify-content-center align-items-center'>
                            <div className='col-md'>
                                <div title='Click the picture to access its source'>
                                    <a href='https://www.chesterfield.gov/338/Information-Systems-Technology'><img style={{width: 200}} src={chesterfield} /></a>
                                </div>
                            </div>
                            <div className='col-md-9'>
                                <h5>Chesterfield County IST: Data Analytics Intern</h5>
                                <span>
                                    In close collaboration with Chesterfield County&#39;s IST Data & Analytics team, I was responsible for the management and analysis of data
                                    critical to the operations of various departments within the county&#39;s Human Resources division.  Employing SQL, specifically MySQL via Microsoft Azure Studio, I conducted comprehensive data analyses to improve operational effectiveness and resource distribution.
                                    This analysis was used to determine inconsistencies present across different database schema, such as variations in addresses or differing descriptions for county buildings.  inconsistencies were
                                    mainly found by relating rows of tables using a building&#39;s Parcel ID.
                                </span>
                            </div>
                        </div>
                    </div>
                </Collapse>}

            <div className='d-flex flex-row justify-content-center align-items-center'>
                    <button onClick={() => setIndex(index - 1 >= 0 ? index - 1 : workExperiences.length-1)}>Back</button>
                    <button onClick={() => setIndex(index + 1 < workExperiences.length ? index + 1 : 0)}>Next</button>
            </div>
        </div>
    )
}