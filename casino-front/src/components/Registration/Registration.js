import React, { useState } from "react";
import styles from "./registration.module.css";
import "./registration.css";
import { Container, Image, Button } from "react-bootstrap";
import bcs from "../../assets/Assets/logobcs.svg";
import gift from "../../assets/Assets/logogift.svg";
import demo from "../../assets/Assets/logodemo.svg";
import fb from "../../assets/Assets/fblogo.svg";
import google from "../../assets/Assets/googlelogo.svg";
import apple from "../../assets/Assets/applelogo.svg";
import ReCAPTCHA from "react-google-recaptcha";
import Modal from "react-modal";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import axios from "axios";
import {login} from '../../redux_store/apiCalls'
import {useDispatch, useSelector} from 'react-redux'
import { publicRequest } from "../../requestMethods";
const Registration = ({ openModal, setopenModal, Vision, setVision }) => {
  // const [Open, setOpen] = useState(false);
  const [Data, setData] = useState(false);
  const [value, setValue] = useState("");
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "40%",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "1200px",
      height: "677px",
      color: "white",
      background:
        "linear-gradient(180deg, #542637 0%, #171C2C 100%),linear-gradient(0deg, #625F67, #625F67)",
      borderRadius: "30px",
      border: "1px white solid",
    },
    overlay: {
      zIndex: 1000,
    },
  };
  const dispatch = useDispatch()
  const [inputs, setInputs] = useState({});
  const [inputs1, setInputs1] = useState({});
  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleChange1 = (e) => {
    setInputs1((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleChangePhone = (e) => {
    setValue(e);
    console.log(e)
  };
  const userReg = { ...inputs, phone: value.toString() };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await publicRequest.post(
        `/api/auth/register`,
        userReg
      );
      console.log(res.data);
    } catch (e) {
      console.log(e);
    }
  };
  const isFetching = useSelector((state) => state.user);
  const userLog = { ...inputs1 };
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      login(dispatch, userLog);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      {/* <button onClick={() => setOpen(true)}></button> */}
      <Modal isOpen={openModal} style={customStyles}>
        <Container className="d-flex h-100">
          <Container
            id="flex2"
            className={`d-flex flex-column justify-content-evenly align-items-start h-100 ${styles.line1}`}
          >
            <Container className="ms-0 ps-0">
              <span className={styles.purple}>
                Join the gambling revolution
              </span>
              <h1 className={`text-start pt-3 ${styles.bold}`}>
                Casino for the <span className={styles.purple}>chosen one</span>
                .Register and win your favorite games
                <span className={styles.purple}>.</span>
              </h1>
            </Container>
            <Container className="ms-0 ps-0">
              <Container className="d-flex align-items-start ms-0 ps-0">
                <Image src={bcs}></Image>
                <h4 className="ps-2 pb-3">
                  Get{" "}
                  <span className={`${styles.purple} ${styles.bold}`}>
                    400 BCS
                  </span>{" "}
                  for registration
                </h4>
              </Container>
              <Container className="d-flex align-items-start ms-0 ps-0">
                <Image src={gift}></Image>
                <h4 className="ps-2 pb-3">
                  Up to{" "}
                  <span className={`${styles.purple} ${styles.bold}`}>
                    100%
                  </span>{" "}
                  +{" "}
                  <span className={`${styles.purple} ${styles.bold}`}>30</span>{" "}
                  free spins
                </h4>
              </Container>
              <Container className="d-flex align-items-start ms-0 ps-0">
                <Image src={demo}></Image>
                <h4 className="ps-2 pb-3">
                  Try{" "}
                  <span className={`${styles.purple} ${styles.bold}`}>
                    DEMO
                  </span>{" "}
                  games before playing
                </h4>
              </Container>
            </Container>
          </Container>
          <Container id="flex1" className="d-flex flex-column h-100">
            <Container className="d-flex justify-content-end">
              <Button
                variant="transparent"
                onClick={() => setopenModal(false)}
                className={`${styles.btnX}`}
              >
                X
              </Button>
            </Container>
            {Vision ? (
              <>
                <Container className="d-flex justify-content-around m-1 pt-4">
                  <h3
                    className={`${styles.underline} ps-3 pe-3 text-uppercase`}
                  >
                    Registration
                  </h3>
                  <h3
                    type="button"
                    className="ps-3 pe-3 text-uppercase"
                    onClick={() => setVision(false)}
                  >
                    Login
                  </h3>
                </Container>
                <Container>
                  <form className="d-flex flex-column">
                    <label className={`${styles.formLabel2}`} htmlFor="email">
                      Email
                    </label>
                    <input
                      className={`${styles.formControl2}`}
                      name="email"
                      type="email"
                      onChange={handleChange}
                    />
                    <label
                      className={`${styles.formLabel2}`}
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <input
                      className={`${styles.formControl2}`}
                      name="password"
                      type="password"
                      onChange={handleChange}
                    />
                    <label className={`${styles.formLabel2}`} htmlFor="phone">
                      Phone number
                    </label>
                    <PhoneInput
                      country={"md"}
                      value={value}
                      disableCountryCode={false}
                      autoFormat={true}
                      className='phonesearch'
                      searchStyle={{color: "white", border: "1px white solid"}}
                      onChange={handleChangePhone}
                      name="phone"
                    />

                    <div className="d-flex align-items-center justify-content-between">
                      <input
                        type="submit"
                        className={`${styles.btnCreate} mt-4 mb-4`}
                        value="Create Account"
                        onClick={handleSubmit}
                      />
                      <div className="mt-2 ms-2 mb-1">
                        <ReCAPTCHA
                          size="compact"
                          sitekey="6LeUq60gAAAAAKVSujImoAt_puPSkH5XDJdJ4yyZ"
                        />
                      </div>
                    </div>
                    <Container className="d-flex align-items-baseline ms-0 ps-0">
                      <input type="checkbox" className="me-2" id="check" />
                      <label>
                        I agree with Terms & Conditions and Privacy Policy. I
                        confirm that I am at least 18 years old.
                      </label>
                    </Container>
                  </form>
                  <Container
                    className={`d-flex justify-content-center align-items-start ms-0 mt-4 pt-4 ps-0 ${styles.line}`}
                  >
                    <h5>Sign up with:</h5>
                    <Image className="ps-3" src={fb}></Image>
                    <Image className="ps-3" src={google}></Image>
                    <Image className="ps-3" src={apple}></Image>
                  </Container>
                </Container>
              </>
            ) : (
              <>
                <Container className="d-flex justify-content-around m-1 pt-4">
                  <h3
                    type="button"
                    className="ps-3 pe-3 text-uppercase"
                    onClick={() => setVision(true)}
                  >
                    Registration
                  </h3>
                  <h3
                    className={`${styles.underline} ps-3 pe-3 text-uppercase`}
                  >
                    Login
                  </h3>
                </Container>
                <Container>
                  <form className="d-flex flex-column">
                    <label className={`${styles.formLabel2}`} htmlFor="email">
                      Email or Phone number
                    </label>
                    <input
                      className={`${styles.formControl2}`}
                      name="email"
                      type="email"
                      onChange={handleChange1}
                    />
                    <label
                      className={`${styles.formLabel2}`}
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <input
                      className={`${styles.formControl2}`}
                      name="password"
                      type="password"
                      onChange={handleChange1}
                    />
                    <div className="d-flex align-items-center justify-content-between">
                      <input
                        type="submit"
                        className={`${styles.btnCreate} mt-4 mb-4`}
                        //disabled={isFetching}
                        onClick={handleLogin}
                        value="LOG IN"
                      />
                      <div className="mt-2 ms-2 mb-1">
                        <ReCAPTCHA
                          size="compact"
                          sitekey="6LeUq60gAAAAAKVSujImoAt_puPSkH5XDJdJ4yyZ"
                        />
                      </div>
                    </div>
                    <Container className="d-flex align-items-baseline ms-0 ps-0">
                      <input type="checkbox" className="me-2" id="check" />
                      <label>
                        I agree with Terms & Conditions and Privacy Policy. I
                        confirm that I am at least 18 years old.
                      </label>
                    </Container>
                  </form>
                  <Container
                    className={`d-flex justify-content-center align-items-start ms-0 mt-4 pt-4 ps-0 ${styles.line}`}
                  >
                    <h5>Sign up with:</h5>
                    <Image className="ps-3" src={fb}></Image>
                    <Image className="ps-3" src={google}></Image>
                    <Image className="ps-3" src={apple}></Image>
                  </Container>
                </Container>
              </>
            )}
          </Container>
        </Container>
      </Modal>
    </>
  );
};

export default Registration;
