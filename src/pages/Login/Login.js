import React, { useState } from "react";
import book_now_bg from "../../images/book_now_bg.webp";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";


const Login = () => {
    const localemail = localStorage.getItem("email");
const localpassword = localStorage.getItem("password");
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
   
    
    if (localemail === email && localpassword === password) {
      localStorage.setItem("token", "Token_Received_Successfully")  
      setShow(true);
      alert("Login Sucessfull");
    } else {
      alert("invailed credientials");
    }
    navigate('/dashboard')
    
  };
  

  return (
    <>
        <form onSubmit={handleSubmit}>
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
                        Email <span className="compulsory_icon">*</span>{" "}
                      </div>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        name="email"
                        placeholder={"Ex. mail@website.com"}
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
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        name="password"
                        placeholder={"Ex. ******"}
                      />
                    </div>
                  </div>
                </div>
                <div>
                  {/*Signup button*/}
                  <Button
                    variant="primary"
                    title="Book Demo"
                    type="submit"
                    style={{
                      width: "100%",
                      height: "5vh",
                      marginTop: "1%",
                    }}
                  >
                    Login
                  </Button>

                  {/* Login button*/}

                  <div>
                    <a href="/signup">
                      <Button
                        variant="primary"
                        title="Login"
                        style={{
                          width: "100%",
                          height: "5vh",
                          marginTop: "1%",
                        }}
                      >
                        Register Now
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
      </form>
    </>
  );
};

export default Login;
