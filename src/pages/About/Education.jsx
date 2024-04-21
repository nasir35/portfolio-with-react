import React from "react";
import "./Edu.css";
import graduateIcon from "../../images/graduate-icon.png";

const Education = () => {
  const eduData = [
    {
      id: "01",
      duration: "2015-2017",
      degree: "SSC on Science",
      institute: "Chilora Purba Amber Pur Kari Gori High School",
      result: "Passed on 2017 with GPA-4.82 (Out of 5.00)",
    },
    {
      id: "02",
      duration: "2019-2021",
      degree: "HSC on Science",
      institute: "Aganagar Adarsha College",
      result: "Passed on 2021 with GPA-5.00 (Out of 5.00)",
    },
    {
      id: "03",
      duration: "2022 - Running",
      degree: "BSC on Computer Science & Enginnering",
      institute: "Mymensingh Engineering College",
      result: "Till 2nd semester : CGPA 3.14 (Out of 4.00)",
    },
  ];
  return (
    <div className="edu-box-container">
      {eduData.map((dt) => (
        <div
          key={dt.id}
          className="edu-box grid grid-cols-6 gap-3 hover:bg-indigo-700 text-gray-600 hover:text-white trasition duration-150">
          <div>
            <img src={graduateIcon} className="img col-span-1" alt="" />
          </div>
          <div className="col-span-5">
            <p className="duration">{dt.duration}</p>
            <h2>
              {dt.degree.substring(0, 3)} <small>{dt.degree.substring(3)}</small>
            </h2>
            <h6>{dt.institute}</h6>
            <p className="">{dt.result}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Education;
