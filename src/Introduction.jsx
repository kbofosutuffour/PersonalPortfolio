import './App.css'
 
export default function Introduction() {
    return (
    <div id="about" className='d-flex flex-column flex-md-row justify-content-center' style={{columnGap: 0}}>
        <div className='col-md-5 border p-2'>
            <h4>Introduction</h4>
            <span>
            I&apos;m currently a Software Engineer at <a href='https://about.google/'>Google</a> working within their Core Product Area.
            I received a Bachelors of Science at <a href='https://www.wm.edu/'>William and Mary</a>, studying Computer Science and Mathematics. 
            I specialize in web and mobile app development using front-end and back-end frameworks based on JavaScript, Python, and Java.
            </span>
        </div>
        <div className='col-md border p-2'>
            <h4>Personal Info</h4>
            <ul className="list-unstyled">
                <li className='py-1'>Email: kbofosutuffour@gmail.com</li>
                <li className='py-1'>Phone: +1 (804) 502-9552</li>
                <li className='py-1'>Work Location: Sunnyvale, CA</li>
            </ul>

        </div>
        <div className='col-md border p-2'>
            <h4>Expertise</h4>
            <ul>
                <li>Front-end web development</li>
                <li>Back-end web development</li>
                <li>Mobile App development</li>
            </ul>
        </div>
    </div>
    )

}