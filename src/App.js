import React, { useState, useEffect } from "react"
import {RiArrowRightCircleFill} from 'react-icons/ri'

const url = "https://course-api.com/react-tabs-project"


const App = () => {

  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)
  const [value,setValue] = useState(0)

  const getData = async()=>{
    const response = await fetch(url)
    // console.log(response)
    const data = await response.json()
    console.log(data);

    console.log(setJobs)
    setJobs(data)
    setLoading(false)
  }
  useEffect(()=>{
    getData()
  },[])

  if(loading){
    return(
      <section className="section loading">
        <h1>Loading...</h1>
      </section>
    )
  }


  const {company, duties, dates, title} = jobs[value]

  return (
<section className="section">
  <div className="title">
    <h2>experience</h2>
    <div className="underline"></div>
  </div>

  <div className="jobs-center">
    <div className="btn-container">
      {jobs.map((item,index)=>{
        return(
          <button key={item.id}
          onClick={()=>setValue(index)}
          className={`job-btn ${index === value && 'active-btn'}`}

          >
            {item.company}
        
          </button>
        )
      })}
    </div>

    {/* job info */}
    <article className="job-info">
      <h3>{title}</h3>
      <h4>{company}</h4>
      <p className="job-date">{dates}</p>
      {duties.map((duty, index)=>{
        return(
          <div className="job-desc" key={index}>
            <RiArrowRightCircleFill className="job-icon"/>
            <p>{duty}</p>

          </div>
        )
      })}


    </article>
    <button className="btn" type="button">more info</button>

  </div>
</section>
  )
}

export default App
