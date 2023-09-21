import { useEffect } from "react";
import { useState } from "react";
import Job from "../Job/Job";

const FeatureJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div>
      <div className="text-center">
        <h2 className="text-5xl">Feature Jobs {jobs.length}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel a
          laboriosam placeat similique!
        </p>
      </div>
      <div>
        {
            jobs.map(job => <Job key={job.id} job={job}> </Job>)
        }
        
      </div>
    </div>
  );
};

export default FeatureJobs;
