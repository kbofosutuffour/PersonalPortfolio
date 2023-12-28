
import './App.css'

export default function Footer() {
    return (
        <footer className='border mt-5' style={{backgroundColor: '#F1EAFF'}}>
            <div className='row d-flex flex-row justify-content-center align-items-flex-start'>
                <div className='col-md px-5 py-3 p-md-5'>
                    <h5>Send a message</h5>
                    <form>
                        <div className='form-group m-2'>
                            <input placeholder='Name:' className="form-control"></input>
                        </div>
                        <div className='form-group m-2'>
                            <input placeholder='Email:' className="form-control"></input>
                        </div>
                        <div className='form-group m-2'>
                        <textarea placeholder='Leave a message here' className="form-control"></textarea>
                        </div>

                    </form>
                </div>
                <div className='col-md px-5 py-3 p-md-5'>
                    <h5>Get in touch</h5>
                    <p>Phone: +1 (804) 502-9552</p>
                    <p>Email: kbofosutuffour@wm.edu</p>
                    <p>LinkedIn: kwaku-ofosu-tuffour-6827871b5</p>
                    {/* <a href={'www.linkedin.com/in/kwaku-ofosu-tuffour-6827871b5'}><p>LinkedIn</p></a> */}
                </div>
            </div>
        </footer>
    )

}