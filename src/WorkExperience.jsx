import './App.css';

export default function WorkExperience() {
    return (
        <div id="workexperience" className='border border-dark p-5 m-md-5 mt-5 d-flex flex-column justify-content-center align-items-center'>
            <h3><u>Work Experience</u></h3>
            <div className='column row-md p-md-5 d-flex flex-column-reverse flex-md-row justify-content-center align-items-center'>
                {/* <div className='col-md'>
                    <div title='Click the picture to access its source'>
                    </div>
                </div> */}
                <div className='col-md-9'>
                    <h6>Chesterfield County IST: Data Analytics Intern</h6>
                    <span>
                    Responsible for managing and analyzing data commonly used by various departments of 
                    Chesterfield County’s Department of Human Resources.  Queried data from SQL databases using Microsoft Azure Studio.
                    Developed queries to determine inconsistencies across different database schema
                    </span>
                </div>
            </div>
        </div>
    )
}