import './App.css'
import resume from './resume.pdf'

export default function Headers() {
    return (
        <>
            <div className='col p-5'>
                <h1>Kwaku Ofosu-Tuffour</h1>
                <h3>Aspiring Software Engineer | Web Developer</h3>
                <a href={resume} download={"Resume - Kwaku Ofosu-Tuffour"}>
                <button>Print Resume</button></a>
            </div>
            <nav className="sticky-top navbar navbar-expand-lg navbar-light bg-light px-3">
                <a className='navbar-brand px-1'>Home</a>
                <a className='navbar-brand px-1' href="#about">About</a>
                <a className='navbar-brand px-1' href="#education">Education</a>
                <a className='navbar-brand px-1' href="#projects">Projects</a>
                <a className='navbar-brand px-1' href="#workexperience">Work Experience</a>

            </nav>
        </>

    )
}