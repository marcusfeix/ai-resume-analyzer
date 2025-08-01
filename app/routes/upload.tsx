import { useState } from 'react'
import Navbar from "~/components/Navbar";
import FileUploader from "~/components/FileUploader";


const Upload= () => {
    const [isProcessing, setIsProcessing] = useState(false);
    const [statusText, setStatusText] = useState('');

    const handleSubmit= (e: FormEvent<HTMLFormElement>) =>{}


    return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover">
     <Navbar />
      <section className="main-section">
          <div className="page-heading py-16">
           <h1>Smart feedback through I.A.</h1>
          {isProcessing ? (
              <>
              <h2>{statusText}</h2>
              <img src="/images/resume-scan.gif" className="w-full" />
              </>
          ) : (
              <h2>Drop your resume for analysis and improvement</h2>
          )
          }
              {!isProcessing && (
                  <form id="upload-form" onSubmit={handleSubmit} className="flex flex-col gap-4 mt-8">
                      <div className="form-div">
                          <label htmlFor="company-name">Company Name</label>
                          <input type="text" name="company-name" placeholder="Company Name" id="company-name"/>
                      </div>
                      <div className="form-div">
                          <label htmlFor="job-title">Job Title</label>
                          <input type="text" name="job-tittle" placeholder="Job Title" id="job-title"/>
                      </div>
                      <div className="form-div">
                      <label htmlFor="job-description">Job Description</label>
                      <textarea rows={5} name="job-description" placeholder="Job description" id="job-description"/>
                      </div>
                      <div className="form-div">
                      <label htmlFor="uploader">Upload resume</label>
                      <FileUploader />
                          <button className="primary-button" type="submit">
                              Analyze resume
                          </button>
                     </div>

                  </form>
              )}
          </div>
      </section>
    </main>
    )
}
export default Upload
