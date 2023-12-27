import { useState } from 'react'
import './App.css'
import wm_logo from './assets/wm_logo_green.png'
import data from './data.json'

export default function Education() {

    const [index, setIndex] = useState(0);
    const classes = data.classes;

    return (

            <div className='border p-5 m-5'>
                <div>
                    <h3><u>Education</u></h3>
                    <div style={{columnGap: 10,}} className='d-flex flex-row justify-content-flex-start align-items-center mt-3'>
                        <div><img style={{width: 100}} src={wm_logo}/></div>
                        <div>
                            <h5>College of William and Mary</h5>
                            <h6>Bachelor of Science: Computer Science, Mathematics</h6>
                            <span>GPA: 3.7</span>
                        </div>
                    </div>

                    <div className='border px-3 py-3 mt-5'>
                        <h4>Classes</h4>

                        {classes[index].id == 301 && (<div className='row p-5'>
                            <div className='col'><img style={{width: 50}} src={wm_logo}/></div>
                            <div className='col-8'>
                                <h6>CSCI 301: Software Development</h6>
                                <span>
                                An introduction to principled software development, emphasizing design at the module level as well as tools and techniques.
                                Topics include object-oriented class design and implementation, abstraction techniques, debugging techniques,
                                defensive programming, development and analysis tools, and testing. Emphasizes the role of the individual programmer
                                in large software development projects.
                                </span>
                            </div>

                        </div>)}

                        {classes[index].id == 435 && (<div className='row p-5'>
                            <div className='col'><img style={{width: 50}} src={wm_logo}/></div>
                            <div className='col-8'>
                                <h6>CSCI 435: Software Engineering</h6>
                                <span>
                                Covered various topics in software engineering such as software life cycle,
                                software requirements analysis, software system design, software implementation and
                                testing, software maintenance, and team programming.  Large emphasis on the 
                                <em> Agile Software Development</em> methodology, Requirements/Design Specification,
                                and Continuous Testing.  Students worked in teams to complete projects using our understanding
                                of software engineering practices. 
                                </span>
                            </div>

                        </div>)}

                        {classes[index].id == 421 && (<div className='row p-5'>
                            <div className='col'><img style={{width: 50}} src={wm_logo}/></div>
                            <div className='col-8'>
                                <h6>CSCI 421: Database Systems</h6>
                                <span>
                                Introduced students to multiple aspects of database management systems. 
                                Most of the course will focus on the relational model, SQL, 
                                approaches to database design and normalization and application support.
                                </span>
                            </div>

                        </div>)}

                        {classes[index].id == 241 && (<div className='row p-5'>
                            <div className='col'><img style={{width: 50}} src={wm_logo}/></div>
                            <div className='col-8'>
                                <h6>CSCI 241: Data Structures</h6>
                                <span>
                                Continuation of fundamental concepts of computer science: data abstraction, data structures, and data representation.
                                Discussed various structures such as lists, stacks, queues, trees, balanced trees, priority queues, hashing, and their applications. 
                                Students completed projects with various structures to strengthen their understanding of their usage.
                                </span>
                            </div>

                        </div>)}

                        {classes[index].id == 303 && (<div className='row p-5'>
                            <div className='col'><img style={{width: 50}} src={wm_logo}/></div>
                            <div className='col-8'>
                                <h6>CSCI 303: Algorithms</h6>
                                <span>
                                    A systematic study of algorithms and their complexity, including searching, sorting, selecting, and algorithms for graphs.
                                    A survey of algorithm design methods, including greedy algorithms, divide-and-conquer, dynamic programming, and backtracking.
                                    An introduction to NP-complete problems.
                                </span>
                            </div>

                        </div>)}
                        <div className='d-flex flex-row justify-content-center align-items-center'>
                            <button onClick={() => setIndex(index - 1 >= 0 ? index - 1 : classes.length-1)}>Back</button>
                            <button onClick={() => setIndex(index + 1 < classes.length ? index + 1 : 0)}>Next</button>
                        </div>
                    </div>

                </div>
            </div>

    )

}