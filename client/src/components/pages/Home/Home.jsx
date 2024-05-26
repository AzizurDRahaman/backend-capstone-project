import React, { useEffect, useState } from 'react'
import Navbar from '../../UI/Navbar/Navbar'
import SearchBar from '../../UI/SearchBar/SearchBar'
import JobCard from '../../UI/Card/JobCard'

export default function Home() {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    const fetchJobs = async () => {
      try{
        const res = await fetch("http://localhost:3000/api/job/all",{
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          }
        });
        const data = await res.json();
        setJobs(data);
      }
      catch(err){
        console.log(err);
      }
    }
    fetchJobs();
  }, []);
  console.log(jobs);
  return (
    <>
        <Navbar/>
        <SearchBar/>
        <div >
          {
            jobs.map(job => <JobCard key={job._id} job={job}/>)
          }
        </div>
    </>
  )
}
