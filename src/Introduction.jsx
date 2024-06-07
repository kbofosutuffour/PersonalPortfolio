import './App.css'
 
export default function Introduction() {
    return (
    <div id="about" className='d-flex flex-column flex-md-row justify-content-center' style={{columnGap: 0}}>
        <div className='col-md-5 border p-2'>
            <h4>Introduction</h4>
            <span>
            I&apos;m a Virginia-based software developer with degrees in Computer Science and Mathematics from William and Mary. 
            I specialize in web and mobile app development using frameworks like React, Angular, Django, Flask, and React Native, 
            and I&apos;m currently exploring cloud computing with AWS.
            </span>
        </div>
        <div className='col-md border p-2'>
            <h4>Personal Info</h4>
            <ul className="list-unstyled">
                <li className='py-1'>Email: kbofosutuffour@gmail.com</li>
                <li className='py-1'>Phone: +1 (804) 502-9552</li>
                <li className='py-1'>Residence: Richmond, VA</li>
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