
import './App.css'

export default function Footer() {
    return (
        <footer className='border mt-5' style={{backgroundColor: '#F1EAFF'}}>
            <div className='row d-flex flex-row justify-content-center align-items-flex-start'>
                <div className='col-md px-5 py-3 p-md-5'>
                    <div className='opacity-25'>
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
                    <div className='d-flex flex-column justify-content-center align-items-center position-relative bottom-50 '><h5>Feature Coming Soon</h5></div>
                </div>
                <div className='col-md px-5 py-3 p-md-5'>
                    <h4>Get in touch</h4>
                    <p style={{fontSize: 'larger'}}>Phone: +1 (804) 502-9552</p>
                    <p style={{fontSize: 'larger'}}>Email: kbofosutuffour@gmail.com</p>
                    <a href="https://www.linkedin.com/in/kwaku-ofosu-tuffour-6827871b5"><p style={{fontSize: 'larger'}}>LinkedIn</p></a>
                </div>
            </div>
        </footer>
    )

}