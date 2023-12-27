import './App.css'
 
export default function Introduction() {
    return (
        <div className='container-fluid'>
        <div className='row'>
            <div className='col border p-2'>
                <h4>Who am I?</h4>
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.sit amet, Qui deserunt consequatur fugit repellendusillo voluptas?</span>
            </div>
            <div className='col border p-2'>
                <h4>Personal Info</h4>
                <ul className="list-unstyled">
                    <li className='py-1'>Email: kbofosutuffour@wm.edu</li>
                    <li className='py-1'>Phone: +1 (804) 502-9552</li>
                    <li className='py-1'>Residence: Richmond, VA</li>
                </ul>

            </div>
            <div className='col border p-2'>
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