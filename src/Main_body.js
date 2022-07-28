import React from "react";

function Main_body() {
  return (
    <div style={{display:"flex",marginTop:"50px"}}>
      <div className="main_container">
        <div className="left_container">
          <p style={{fontSize:"3vw",margin:"0px 0px",fontWeight:"bolder"}}>Get Started with</p>
          <p style={{fontSize:"3vw",margin:"0px 0px",fontWeight:"bolder"}}>Apptio Today</p>
          <p style={{fontSize:"1.8vw"}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley
          </p>
        </div>
        <div className="center_div">
          <div className="input_flex_container">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
          <div className="input_flex_container">
            <input type="text" placeholder="Work Email" />
            <input type="text" placeholder="Phone" />
          </div>
          <div className="input_flex_container">
            <input type="text" placeholder="Company" />
            <select>
              <option selected disabled>Job Function</option>
              <option>lorem</option>
              <option>lorem</option>
              <option>lorem</option>
              <option>lorem</option>
              <option>lorem</option>
            </select>
          </div>
          <div className="input_plane_container">
            <input type="text" placeholder="Country"></input>
          </div>
          <div className="input_plane_container">
            <input type="text" placeholder="How Can We Help?"  style={{ height:"8vh"}}></input>
          </div>
          <div  className="input_plane_container" >
            <button style={{ width:"20vw",float:"left",backgroundColor:"rgb(255, 98, 0)",height:"6vh"}}>Get Started</button>
          </div>
        </div>
        <div className="right_container">
        </div>
      </div>
      <div style={{display:"grid",placeItems:"center"}}>
      <img src="side_bar_crop_image.png" alt="side_bar_crop_image" style={{width:"3vw"}}/>
      </div>
    </div>
  );
}

export default Main_body;
