import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Jobcard = ({ job }) => {
  const navigate = useNavigate();
  return (
    <div className="border p-6 shadow rounded">
      <div className="flex justify-between items-center">
        <img className="h-8" src={assets.company_icon} alt="" />
      </div>
      <h4 className="font-medium text-xl mt-2">{job.title}</h4>
      <div className="flex items-center gap-3 mt-2 text-xs">
        <span className="bg-blue-300 border-blue-600 px-4 py-1.5 rounded">
          {job.level}
        </span>
        <span className="bg-red-300 border-red-600 px-4 py-1.5 rounded">
          {job.location}
        </span>
      </div>
      <p
        className="text-gray-500 text-sm mt-4"
        dangerouslySetInnerHTML={{ __html: job.description.slice(0, 150) }}
      ></p>
      <div className="flex mt-4 gap-4 text-sm">
        <button
          onClick={() => {
            navigate(`/apply-job/${job._id}`);
            scrollTo(0, 0);
          }}
          className="text-white px-4 py-2 bg-blue-500 rounded"
        >
          Apply Now
        </button>
        <button
          onClick={() => {
            navigate(`/apply-job/${job._id}`);
            scrollTo(0, 0);
          }}
          className="text-gray-600 border border-gray-700 rounded px-4 py-2"
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Jobcard;
