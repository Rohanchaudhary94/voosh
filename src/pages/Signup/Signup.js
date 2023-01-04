import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./page8.scss";
import "./Input.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";

import book_now_bg from "../../images/book_now_bg.webp";
import Button from "react-bootstrap/Button";

const Signup = () => {
  const navigate = useNavigate();
  

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    companyname: "",
    password: "",
  });

  let name, value;

  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    const { name, email, phone, password, companyname } = user;

    if ((name, email, phone, password)) {
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("phone", phone);
      localStorage.setItem("companyname", companyname);
      localStorage.setItem("password", password);
      localStorage.setItem("signup", email);
      

      alert("Registration Sucessfull");
    }
    navigate("/login");
  };

  return (
    <>
      {/* id="margin alaga tha" */}
      <div className="page8_container" id="Waitinglist">
        <div className="page8_container_text">
          <div className="title">Book A Demo Now</div>
        </div>

        <div className="page8_text_container">
          <div className="card_container">
            <div className="email_container">
              {/* login Form started */}
              <div>
                <div className="full_width" style={{ marginBottom: 5 }}>
                  <div className="input_container">
                    <div className="input_label">
                      Name <span className="compulsory_icon">*</span>{" "}
                    </div>
                    <input
                      type="text"
                      value={user.name}
                      onChange={handleInputs}
                      name="name"
                      placeholder={"Ex. John Doe"}
                    />
                  </div>
                </div>

                <div className="full_width" style={{ marginBottom: 5 }}>
                  <div className="input_container">
                    <div className="input_label">
                      Email <span className="compulsory_icon">*</span>{" "}
                    </div>
                    <input
                      type="email"
                      value={user.email}
                      onChange={handleInputs}
                      name="email"
                      placeholder={"Ex. mail@website.com"}
                    />
                  </div>
                </div>

                <div className="full_width" style={{ marginBottom: 5 }}>
                  <div className="input_container">
                    <div className="input_label">
                      Company Name <span className="compulsory_icon">*</span>{" "}
                    </div>
                    <input
                      type="companyname"
                      value={user.companyname}
                      onChange={handleInputs}
                      name="companyname"
                      placeholder={"Ex. XYZ LTD"}
                    />
                  </div>
                </div>

                <div className="full_width" style={{ marginBottom: 5 }}>
                  <div className="input_container">
                    <div className="input_label">
                      Phone <span className="compulsory_icon">*</span>{" "}
                    </div>
                    <input
                      type="phone"
                      value={user.phone}
                      onChange={handleInputs}
                      name="phone"
                      placeholder={"Ex. 0123456789"}
                    />
                  </div>
                </div>

                <div className="full_width" style={{ marginBottom: 5 }}>
                  <div className="input_container">
                    <div className="input_label">
                      Password <span className="compulsory_icon">*</span>{" "}
                    </div>
                    <input
                      type="password"
                      value={user.password}
                      onChange={handleInputs}
                      name="password"
                      placeholder={"Ex. ******"}
                    />
                  </div>
                </div>
              </div>
              <div>
               
                <Button
                  variant="primary"
                  title="Book Demo"
                  onClick={PostData}
                  style={{
                    width: "100%",
                    height: "5vh",
                    marginTop: "1%",
                  }}
                >
                  Signup Now
                </Button>

                {/* Login button*/}

                <div>
                  <a href="/login">
                    <Button
                      variant="primary"
                      title="Login"
                      style={{
                        width: "100%",
                        height: "5vh",
                        marginTop: "1%",
                      }}
                    >
                      Already Registerd
                    </Button>
                  </a>
                </div>
                {/*  */}
              </div>
            </div>
          </div>
        </div>
        <img src={book_now_bg} className="waiting_list" />
      </div>
      ); )
    </>
  );
};

export default Signup;
