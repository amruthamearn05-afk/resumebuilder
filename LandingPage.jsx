// rfce
import React from 'react'
import { Link } from 'react-router-dom'



function LandingPage() {
  return (
    <>
      {/* landing part */}
      <section style={{width:'100%',height:'100vh',backgroundImage:"url('https://i0.wp.com/www.cpasitesolutions.com/cpa-websites/wp-content/uploads/2024/06/local-seo-for-bookeepers-1.png?fit=2240%2C1260&ssl=1')",backgroundAttachment:'fixed',backgroundPosition:'top',backgroundSize:'cover'}} className='container-fluid row align-items-center'>
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4 shadow-lg  py-5 rounded mt-5 mx-3 text-center" style={{backgroundColor:'rgba(255,255,255,0.5)'}}>
          <h3>Designed to get hired,
            Your skills, your story, your next job - all in one.
          </h3>
          <Link to={'/resume'} className='btn text-white' style={{backgroundColor:'purple'}}>Make Your Resume</Link>
            
        </div>
        <div className="col-md-4"></div>
      </div>
      </section>
      {/* tools */}
      <section className='m-5'>
        <h1 className='text-center '>Tools</h1>
        <div className="container row align-items-center">
          <div className="col-md-6">
            <div className='my-3'>
              <h4>Resume</h4>
              <h6>Create unlimited new resumes and easily edit them afterwards.</h6>
            </div>
            <div className='my-3'>
              <h4>Cover Letters</h4>
              <h6>Easily write professional cover letters.</h6>
            </div>
            <div className='my-3'>
              <h4>Jobs</h4>
              <h6>Automatically receive new and relevant job postings.</h6>
            </div>
            <div className='my-3'>
              <h4>Applications</h4>
              <h6>Effortlessly manage and track your job applications in an organized manner.</h6>
            </div>
          </div>
          <div className="col-md-6">
            <img className='img-fluid mx-2'src="https://cdn-images.zety.com/images/zety/landings/builder/resume-builder-jumbotron-image@3x.png" alt="resume" />
          </div>
        </div>
      </section>
      {/* image */}
      <section style={{height:'580px',width:'100%',backgroundImage:"url('https://images.unsplash.com/photo-1709715357520-5e1047a2b691?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVzaW5lc3MlMjBtZWV0aW5nfGVufDB8fDB8fHww&fm=jpg&q=60&w=3000')",backgroundSize:'cover',backgroundPosition:'center',backgroundAttachment:'fixed'}}></section>
      {/* testimony */}
      <section className='m-5'>
        <h1 className='text-center my-5'>Testimonial</h1>
        <div className="row container">
          <div className='col-md-5 col-12'>
            <h3 className='my-5'>Trusted by professionals worldwide.</h3>
            <p className='fs-5' style={{textAlign:'justify'}}>
              At LiveCareer, we don't just help you create résumés — we help you land the job. Whether you're a seasoned professional or just starting out, our tools are designed to get results.
            </p>
            <p className='fs-5' style={{textAlign:'justify'}}>
              In fact, users who used LiveCareer reported getting hired an average of 48 days faster.
            </p>
            <p className='fs-5' style={{textAlign:'justify'}}>
             Join thousands of job-seekers who’ve fast-tracked their careers with a résumé that truly stands out.
            </p>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-6 col-12">
            <div className="row">
              <div className="col-3">
                <img className='w-100' src="https://img.freepik.com/free-photo/front-view-business-woman-suit_23-2148603018.jpg?semt=ais_hybrid&w=740&q=80" alt="person" />
              </div>
              <div className="col-3">
                <img className='w-100' src="https://img.freepik.com/free-photo/front-view-business-woman-suit_23-2148603018.jpg?semt=ais_hybrid&w=740&q=80" alt="person" />
              </div>
              <div className="col-3">
                <img className='w-100' src="https://img.freepik.com/free-photo/front-view-business-woman-suit_23-2148603018.jpg?semt=ais_hybrid&w=740&q=80" alt="person" />
              </div>
              <div className="col-3">
                <img className='w-100' src="https://img.freepik.com/free-photo/front-view-business-woman-suit_23-2148603018.jpg?semt=ais_hybrid&w=740&q=80" alt="person" />
              </div>
            </div>
            <div className="row my-3">
              <div className="col-3">
                <img className='w-100' src="https://img.freepik.com/free-photo/front-view-business-woman-suit_23-2148603018.jpg?semt=ais_hybrid&w=740&q=80" alt="person" />
              </div>
              <div className="col-3">
                <img className='w-100' src="https://img.freepik.com/free-photo/front-view-business-woman-suit_23-2148603018.jpg?semt=ais_hybrid&w=740&q=80" alt="person" />
              </div>
              <div className="col-3">
                <img className='w-100' src="https://img.freepik.com/free-photo/front-view-business-woman-suit_23-2148603018.jpg?semt=ais_hybrid&w=740&q=80" alt="person" />
              </div>
              <div className="col-3">
                <img className='w-100' src="https://img.freepik.com/free-photo/front-view-business-woman-suit_23-2148603018.jpg?semt=ais_hybrid&w=740&q=80" alt="person" />
              </div>
            </div>
            <div className="row my-3">
              <div className="col-3">
                <img className='w-100' src="https://img.freepik.com/free-photo/front-view-business-woman-suit_23-2148603018.jpg?semt=ais_hybrid&w=740&q=80" alt="person" />
              </div>
              <div className="col-3">
                <img className='w-100' src="https://img.freepik.com/free-photo/front-view-business-woman-suit_23-2148603018.jpg?semt=ais_hybrid&w=740&q=80" alt="person" />
              </div>
              <div className="col-3">
                <img className='w-100' src="https://img.freepik.com/free-photo/front-view-business-woman-suit_23-2148603018.jpg?semt=ais_hybrid&w=740&q=80" alt="person" />
              </div>
              <div className="col-3">
                <img className='w-100' src="https://img.freepik.com/free-photo/front-view-business-woman-suit_23-2148603018.jpg?semt=ais_hybrid&w=740&q=80" alt="person" />
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </>
  )
}

export default LandingPage