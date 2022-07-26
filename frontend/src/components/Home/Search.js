  import React from 'react'

  export default function Search() {
    let searchstyle = {
      width: "30%",
      left:"0",
      
    }
    return (
      <div>
        <h1>
          Search Reaults with Filters
        </h1>
        <div style={searchstyle}>

        const checkList = ["Bengaluru/Banglore", "Delhi/NCR", "Hyderabad", "Mumbai"];

        return (
          <div className="checkList">
            <div className="title">Location</div>
            <div className="list-container">
              {checkList.map((item, index) => (
                <div key={index}>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        );

        const checkList = ["0-3 Lakhs", "3-6 Lakhs", "6-10 Lakhs", "10-15 Lakhs"];

        return (
          <div className="checkList">
            <div className="title">Location</div>
            <div className="list-container">
              {checkList.map((item, index) => (
                <div key={index}>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          </div>
        );

        </div>
    )
  }
