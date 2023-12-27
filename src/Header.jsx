import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function Headers() {
    return (
        <div className='border-bottom'>
            <div className='col p-5'>
                <h1>Kwaku Ofosu-Tuffour</h1>
                <h3>Aspiring Software Engineer | Web Developer</h3>
                <button>Print Resume</button>
            </div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
                <a className='navbar-brand px-1'>Home</a>
                <a className='navbar-brand px-1'>About</a>
                <a className='navbar-brand px-1'>Education</a>
                <a className='navbar-brand px-1'>Projects</a>
                <a className='navbar-brand px-1'>Work Experience</a>

            </nav>
        </div>

    )
}