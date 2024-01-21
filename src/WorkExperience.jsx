import './App.css';

export default function WorkExperience() {
    return (
        <div id="workexperience" className='border border-dark p-5 m-md-5 mt-5 d-flex flex-column justify-content-center align-items-center rounded'>
            <h3><u>Work Experience</u></h3>
            <div className='column row-md p-md-5 d-flex flex-column-reverse flex-md-row justify-content-center align-items-center'>
                {/* <div className='col-md'>
                    <div title='Click the picture to access its source'>
                    </div>
                </div> */}
                <div className='col-md-9'>
                    <h5>Chesterfield County IST: Data Analytics Intern</h5>
                    <span>
                        Here, I worked closely with the Data & Analytics team of Chesterfield County IST.  I was responsible for managing and
                        analyzing data commonly used by various departments throughout Chesterfield County&#39;s department of Human Resources.  The data analysis was
                        done using SQL, specifically MySQL using Microsoft Azure Studio.  The queries developed were used to determine inconsistencies that were
                        present across different database schema, such as differing addresses or differing descriptions for county buildings.  These inconsistencies were
                        mainly found by relating rows of tables using a building&#39;s Parcel ID.
                    </span>
                </div>
            </div>
        </div>
    )
}