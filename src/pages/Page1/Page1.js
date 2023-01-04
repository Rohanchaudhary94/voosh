import "./page1.scss";
import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Landing_bg from "../../images/landing_bg.webp";
import MyProfile from "../../images/MyProfile.webp";
import Three_lines from "../../images/Three_lines.webp";
import Arrow from "../../images/Arrow.webp";
// import Page8 from "Page8/Page8";
import Button from "react-bootstrap/Button";

import page1 from "../../images/page1.webp";
import page1_2 from "../../images/page1_2.webp";
import page1_3 from "../../images/page1_3.webp";
import page1_4 from "../../images/page1_4.webp";
import page1_5 from "../../images/page1_5.webp";
import page1_6 from "../../images/page1_6.webp";

const Page1 = () => {
  return (
    <div className="page1_container" id="page1">
      <div className="landing_bg_container">
        <img src={Landing_bg} className="landing_bg_icon" alt="landing" />
      </div>

      <div className="page1_title_container_content">
        <div className="page1_title_container">
          <div className="title">
            Consolidate your restaurants' insights in one place. Unlock growth.
          </div>
          <div className="subtitle">
            Your one stop solution to view mission-critical data and insights
            from all your locations in one place.
          </div>

          <div className="button_arrow_container">
            <div className="button_container_style">
            <br/>
             
              <div>
              <Button
                href="/#Waitinglist">
                Book Demo
              </Button>{" "}
            </div>

            </div>

            <div className="arrow_img_container">
              <img src={Arrow} className="arrow_img" alt="landing" />
            </div>
          </div>
        </div>

        <div className="my_profile_container">
          <img src={Three_lines} className="three_lines" alt="landing" />
          <img src={MyProfile} className="my_profile_icon" alt="landing" />
        </div>
          <div className="page1-outlet-container">
          <img src={page1} className="page1-outlet-icon1" alt="landing" />
          <img src={page1_2} className="page1-outlet-icon2" alt="landing" />
          <img src={page1_3} className="page1-outlet-icon3" alt="landing" />
          <img src={page1_4} className="page1-outlet-icon4" alt="landing" />
          <img src={page1_5} className="page1-outlet-icon5" alt="landing" />
          <img src={page1_6} className="page1-outlet-icon6" alt="landing" />
        </div>
      </div>
    </div>
  );
};

export default Page1;
