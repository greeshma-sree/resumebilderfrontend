import React from 'react'
import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <>
      <section style={{ width: "100%", overflow: 'hidden', height: "450px", backgroundImage: "url('https://img.freepik.com/free-photo/top-view-business-office-desk-background-applying-job-form-pen-pencil-eyeglasses-tree-wooden-table-background-with-copy-space_1921-21.jpg?semt=ais_hybrid&w=740&q=80')", backgroundSize: "cover", backgroundAttachment: 'fixed' }}>

        <div className="row mt-5">
          <div className="col-12 col-md-4" ></div>
          <div className="col-12 col-md-4 border py-5 rounded my-5 text-center">
            <h4>Designed to get hired</h4>
            <p>Your skills,your story,your next job-all in one.</p>
            <Link  to={"/resume"}>
              <button className='btn btn-primary'>MAKE YOUR RESUME</button>
            </Link>
          </div>
          <div className="col-12 col-md-4"></div>
        </div>
      </section>
      <section>
        <h1 className='text-center p-5'>Tools</h1>
        <div className="row">
          <div className="col-12 col-md-6 p-5">
            <h4>Resume</h4>
            <p>Create unlimited new resume and easily edit theme afterwards</p>
            <h4>Cover Letter</h4>
            <p>Easily write proffesional coverLetter.</p>
            <h4>Job Letter</h4>
            <p>Automatically recieve new and relevent job posting.</p>
            <h4>Applications</h4>
            <p>Effortlessly manage and track your job application in an organised manner</p>


          </div>

          <div className="col-12 col-md-6">
            <img className='w-75 ms-5' src="https://content-management-files.canva.com/cdn-cgi/image/f=auto,q=70/5799a5c2-bd3d-41d1-8999-530f890a2748/header_resumes2.jpg" alt="" />
          </div>
        </div>
      </section>
      <section style={{
        width: "100%", overflow: 'hidden', height: "450px",
        backgroundImage: "url('https://img.freepik.com/premium-photo/two-men-looking-resume-form_31965-150826.jpg?semt=ais_incoming&w=740&q=80')", backgroundSize: "cover", backgroundAttachment: "fixed"
      }}>
      </section>
      <section>
        <h2 className='text-center p-5' >Testimony</h2>
        <div className="row">
          <div className="col-6 col-md-6">
            <h3 className='m-5'>Trusted By Professionals WorldWide</h3>
            <p className='m-5'>At Livecareer, we don't just help you create resumes-we help you land the job,Whether you"re a seasoned proffessional or just starting out,our tools are designed to get results.

            </p>
            <p className='m-5'>In Fact, users who used LiveCareer reposted getting hired an average of 48days faster.</p>
            <p className='m-5'>Join thousands of job seekers who"re fast-tracked their careers with a resume that fully standsout</p>
          </div>
          <div className="col-6">
            <div className="row m-5">
              <div className="col-3"><img src="https://www.profilebakery.com/wp-content/uploads/2025/05/Profile-Picture-before-796x1024.jpg" alt="" width={"70px"} /></div>
              <div className="col-3"><img src="https://i2.wp.com/www.profilebakery.com/wp-content/uploads/2023/04/Profile-Image-AI.jpg" alt="" width={"90px"} /></div>
              <div className="col-3"><img src="https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg" alt="" width={"90px"} /></div>
              <div className="col-3"><img src="https://vheer.com/_next/image?url=%2Fimages%2FlandingPages%2Fai_profile_picture_generator%2Fpreview_image_1.webp&w=1080&q=75" alt="" width={"90px"} /></div>
            </div>
               <div className="row m-5">
              <div className="col-3"><img src="https://www.profilebakery.com/wp-content/uploads/2025/05/Profile-Picture-before-796x1024.jpg" alt="" width={"70px"} /></div>
              <div className="col-3"><img src="https://i2.wp.com/www.profilebakery.com/wp-content/uploads/2023/04/Profile-Image-AI.jpg" alt="" width={"90px"} /></div>
              <div className="col-3"><img src="https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg" alt="" width={"90px"} /></div>
              <div className="col-3"><img src="https://vheer.com/_next/image?url=%2Fimages%2FlandingPages%2Fai_profile_picture_generator%2Fpreview_image_1.webp&w=1080&q=75" alt="" width={"90px"} /></div>
            </div>
               <div className="row m-5">
              <div className="col-3"><img src="https://www.profilebakery.com/wp-content/uploads/2025/05/Profile-Picture-before-796x1024.jpg" alt="" width={"70px"} /></div>
              <div className="col-3"><img src="https://i2.wp.com/www.profilebakery.com/wp-content/uploads/2023/04/Profile-Image-AI.jpg" alt="" width={"90px"} /></div>
              <div className="col-3"><img src="https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg" alt="" width={"90px"} /></div>
              <div className="col-3"><img src="https://vheer.com/_next/image?url=%2Fimages%2FlandingPages%2Fai_profile_picture_generator%2Fpreview_image_1.webp&w=1080&q=75" alt="" width={"90px"} /></div>
            </div>
            
          </div>
        </div>
      </section>
     
    </>
  )
}

export default LandingPage