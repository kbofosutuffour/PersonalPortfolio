import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Introduction from './Introduction'
import Education from './Education'
import Projects from './Projects'
import WorkExp from './WorkExp'
import Footer from './Footer'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Introduction />
      <Education />
      <Projects />
      <WorkExp />
      <Footer />
    </>
  )
}

export default App
