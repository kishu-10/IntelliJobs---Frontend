import React from 'react'
import Footer from "./Footer";
import Navbar from "./Navbar";

const Resume = () => {
  return (
    <>
    <Navbar />
    <div class="container resume-container">
        <div class="row">
            <div class="col-lg-2">
                <div class="sidebar-list">
                    <ul class="list">
                        <li><a class="sidebar-link" href="#/">Personal Details</a></li>
                        <li><a class="sidebar-link" href="#/">Education</a></li>
                        <li><a class="sidebar-link" href="#/">Skills</a></li>
                    </ul>
                </div>
            </div>
            <div class="col-lg-10">
                <div class="section--profile">
                    <h2 class="mb-4 text-primary">Resume</h2>
                    <div class="accordion accordion-sm" id="faq">
                            <div class="card">
                                <div class="card-header" data-toggle="collapse" data-target="#collapse1"
                                    aria-expanded="false" aria-controls="collapse1"><span>Personal Details</span><i class="ic-chevron-down"></i></div>
                                <div class="collapse" id="collapse1" aria-labelledby="faq1" data-parent="#faq">
                                    <div class="card-body">
                                        <ul class="list list-separator">
                                            <li>
                                                <p>Answers</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/* <div className="row row--grey text-center">
      <div className="container row--grey col-lg-3 col-6">
            <div className='resume-sidebar col-lg-8'>
                <p>Personal Details</p>
            </div>
            <div className='resume-sidebar col-lg-8'>
                <p>Education</p>
            </div>
            <div className='resume-sidebar col-lg-8'>
                <p>Skills</p>
            </div>
      </div>
      <div className="container col-lg-9 col-9">
      </div>
    </div> */}
    <Footer />
  </>
  )
}

export default Resume