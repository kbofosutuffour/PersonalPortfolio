import './App.css'
 
export default function Introduction() {
    return (
    <div id="about" className='bg-white mx-0 mx-mb-5'>
        <div className='row'>
            <div className='col-md border p-2'>
                <h4>Who am I?</h4>
                <span>Hardworking college student with great interest in software development.  Diligent and resilient with my work.</span>
            </div>
            <div className='col-md border p-2'>
                <h4>Personal Info</h4>
                <ul className="list-unstyled">
                    <li className='py-1'>Email: kbofosutuffour@wm.edu</li>
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
    </div>
    )

}