import './App.css'
import resume from './resume.pdf'
import { useState } from 'react';


export default function Headers() {
    const [section, setSection] = useState("Home");

    return (
        <>
            <div className='col px-5 py-2'>
                <h1 style={{textDecoration: 'underline', textDecorationColor: '#C0AFFB'}}>Kwaku Ofosu-Tuffour</h1>
                <h3>Software Engineer | Web Developer</h3>
                <a href={resume} download={"Resume - Kwaku Ofosu-Tuffour"}>
                <button>Print Resume</button></a>
            </div>
            <nav className="sticky-top d-flex flex-row justify-content-center justify-content-md-between align-items-center py-3 mx-0 mx-mb-5" style={{backgroundColor: '#C0B0FB', padding: '20px 70px'}}>
                <a className='navbar-brand px-1 d-none d-md-block' >
                    <div onClick={() => setSection("Home")} style={{fontSize: 'larger'}}>Home</div>
                </a>
                <a className='navbar-brand px-1 d-none d-md-block' href="#about"><div onClick={() => setSection("Home")} style={{fontSize: 'larger'}}>About</div></a>
                <a className='navbar-brand px-1' href="#education"><div onClick={() => setSection("Home")} style={{fontSize: 'larger'}}>Education</div></a>
                <a className='navbar-brand px-1' href="#projects"><div onClick={() => setSection("Home")} style={{fontSize: 'larger'}}>Projects</div></a>
                <a className='navbar-brand px-1' href="#workexperience"><div onClick={() => setSection("Home")} style={{fontSize: 'larger'}}>Work Experience</div></a>

            </nav>
        </>

    )
}