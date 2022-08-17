import React, { useState } from "react";
import "./profile.css";
import { Container, Image, Button, Accordion } from "react-bootstrap";
import profile from "../../assets/Assets/profile.svg";
import lock from "../../assets/Assets/lock.svg";
import gift from "../../assets/Assets/gift.svg";
import check from "../../assets/Assets/check.svg";
import profB from "../../assets/Assets/profB.svg";
import lockB from "../../assets/Assets/lockB.svg";
import giftB from "../../assets/Assets/giftB.svg";
import checkB from "../../assets/Assets/checkB.svg";
import prof from "../../assets/Assets/prof.svg";
import id from "../../assets/Assets/id.svg";
import money from "../../assets/Assets/money.svg";
import trash from "../../assets/Assets/trash.svg";
import checked from "../../assets/Assets/checked.svg";
import phone from "../../assets/Assets/phone.svg";
import progress from "../../assets/Assets/progress.svg";
import more from "../../assets/Assets/more.svg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Profile = () => {
  const [Active, setActive] = useState(false);
  const [value, setValue] = useState();
  const [picSize, setPicSize] = useState(false);
  const [picSize1, setPicSize1] = useState(true);
  const [picSize2, setPicSize2] = useState(true);
  const [picSize3, setPicSize3] = useState(true);

  const handlePicSize = () => {
    setPicSize(false);
    setPicSize1(true);
    setPicSize2(true);
    setPicSize3(true);
  };
  const handlePicSize1 = () => {
    setPicSize(true);
    setPicSize1(false);
    setPicSize2(true);
    setPicSize3(true);
  };
  const handlePicSize2 = () => {
    setPicSize(true);
    setPicSize1(true);
    setPicSize2(false);
    setPicSize3(true);
  };
  const handlePicSize3 = () => {
    setPicSize(true);
    setPicSize1(true);
    setPicSize2(true);
    setPicSize3(false);
  };
  return (
    <>
      <Container className="profile-box m-0 p-0">
        <Container className="p-0 m-0">
          <Tabs>
            <TabList>
              <Tab onClick={handlePicSize}>
                <Image src={picSize ? profile : profB} />
              </Tab>
              <Tab onClick={handlePicSize1}>
                <Image src={picSize1 ? lock : lockB} />
              </Tab>
              <Tab onClick={handlePicSize2}>
                <Image src={picSize2 ? gift : giftB} />
              </Tab>
              <Tab onClick={handlePicSize3}>
                <Image src={picSize3 ? check : checkB} />
              </Tab>
            </TabList>

            <TabPanel>
              <Container className="d-flex flex-column align-items-baseline p-5">
                <h3 className="bold black">Personal Information</h3>
                <Container className="d-flex flex-column align-items-baseline">
                  <form className="d-flex flex-column w-100">
                    <label className="form-label1" htmlFor="nick">
                      Nickname
                    </label>
                    <input className="form-control1" name="nick" type="text" />
                    <Container className="p-0 m-0">
                      <label className="form-label1" htmlFor="email">
                        Email
                      </label>
                      <Container className="d-flex align-items-center justify-content-between p-0 m-0">
                        <input
                          className="form-control1 w-50"
                          name="email"
                          type="email"
                        />
                        <input
                          type="submit"
                          className="btn-confirm ms-5"
                          value="Send Confirmation"
                        />
                      </Container>
                    </Container>
                    <label className="form-label1" htmlFor="phone">
                      Phone number
                    </label>
                    <PhoneInput
                      country={"gb"}
                      value={value}
                      disableCountryCode={false}
                      autoFormat={true}
                      onChange={(value) => setValue(value)}
                    />
                    <label className="form-label1" htmlFor="bd">
                      Birthday
                    </label>
                    <input className="form-control1" name="bd" type="text" />
                    <Container className="p-0 m-0">
                      <input
                        type="submit"
                        className="btn-save mt-4 mb-4"
                        value="Save Changes"
                      />
                    </Container>
                  </form>
                </Container>
              </Container>
            </TabPanel>
            <TabPanel>
              <div className="p-5">
                <Container className="d-flex align-items-baseline">
                  <h2 className="pe-3 black">Google 2FA</h2>
                  {Active ? (
                    <h6 className="red">not activated</h6>
                  ) : (
                    <h6 className="green">activated</h6>
                  )}
                </Container>
                <Container>
                  <p className="black">
                    2nd security layer of your account. Set 2FA to protect your
                    account (available only when signed up with Google or when
                    email and password set)
                  </p>
                </Container>
                <Container className="d-flex justify-content-center">
                  <Button
                    onClick={() => setActive(!Active)}
                    className="btn-activate"
                    variant="transparent"
                  >
                    {Active ? "Activate" : "Disable"}
                  </Button>
                </Container>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="">
                <Container className="pt-4 ps-5">
                  <h3 className="bold black"> Active bonuses</h3>
                </Container>
                <Container
                  fluid
                  className="bg-darkgray d-flex justify-content-between pe-4"
                >
                  <div className="d-flex pt-3 pb-3 ps-5">
                    <Image src={money}></Image>
                    <Container className="ps-4">
                      <p className="white bold">
                        Bonus <span className="purple">50.00</span> USD
                      </p>
                      <div className="d-flex flex-column w-100">
                        <span className="d-flex justify-content-between white">
                          Veidjer : <span className="purple">x25</span>{" "}
                        </span>
                        <span className="d-flex justify-content-between white">
                          Up to : <span className="purple">02.06.2022</span>{" "}
                        </span>
                        <span className="d-flex justify-content-between white">
                          Made bets :{" "}
                          <span className="purple">1.00 from 250.00 </span>{" "}
                        </span>
                      </div>
                      <span className="lightgray mfs-1">
                        What do with this bonus?
                      </span>
                    </Container>
                  </div>
                  <div className="d-flex flex-column align-items-center justify-content-between p-4 position-relative">
                    <p className="white bold">
                      0.50 <span className="purple"> %</span>
                    </p>
                    <Image src={progress}></Image>
                    <button className="btn-save1">Start Play</button>
                    <button className="nobr-btn">
                      {" "}
                      <Image src={trash} className="trashcan"></Image>
                    </button>
                  </div>
                </Container>
              </div>
              <Container className="mt-5 ps-5 pe-5 pt-0 pb-5">
                <h3 className="bold black pb-1">Welcome bonuses</h3>
                <Container className="d-flex justify-content-between m-0 p-0">
                  <Container className="bg-darkgray card d-flex flex-column align-items-center me-4">
                    <h6 className="white pt-4 pb-5">
                      Make <span className="bold">1</span> deposits
                    </h6>
                    <div className="w-100 d-flex justify-content-between ps-3 pe-3">
                      <h4 className="purple bold">UP TO</h4>
                      <h4 className="white bold">100%</h4>
                    </div>
                    <div className="w-100 d-flex justify-content-between ps-3 pe-3 pb-5">
                      <h4 className="purple bold">BONUS</h4>
                      <h4 className="white bold">30 FS</h4>
                    </div>
                    <h2 className="bold text-uppercase mt-3 mb-2 lightgray">
                      received
                    </h2>
                  </Container>
                  <Container className="bg-darkgray card d-flex flex-column align-items-center me-4">
                    <h6 className="white pt-4 pb-5">
                      Make <span className="bold">2</span> deposits
                    </h6>
                    <div className="w-100 d-flex justify-content-between ps-3 pe-3">
                      <h4 className="purple bold">UP TO</h4>
                      <h4 className="white bold">120%</h4>
                    </div>
                    <div className="w-100 d-flex justify-content-between ps-3 pe-3 pb-5">
                      <h4 className="purple bold">BONUS</h4>
                      <h4 className="white bold">40 FS</h4>
                    </div>
                    <button className="btn-save1 mt-3 mb-2">
                      Make a payment
                    </button>
                    <a className="lightgray pb-4 no-dec">Learn more ?</a>
                  </Container>
                  <Container className="bg-darkgray card d-flex flex-column align-items-center me-4">
                    <h6 className="white pt-4 pb-5">
                      Make <span className="bold">3</span> deposits
                    </h6>
                    <div className="w-100 d-flex justify-content-between ps-3 pe-3">
                      <h4 className="purple bold">UP TO</h4>
                      <h4 className="white bold">130%</h4>
                    </div>
                    <div className="w-100 d-flex justify-content-between ps-3 pe-3 pb-5">
                      <h4 className="purple bold">BONUS</h4>
                      <h4 className="white bold">50 FS</h4>
                    </div>
                    <button className="btn-save1-dis mt-3 mb-2" disabled>
                      Make a payment
                    </button>
                    <a className="lightgray pb-4 no-dec">Learn more ?</a>
                  </Container>
                  <Container className="bg-darkgray card d-flex flex-column align-items-center">
                    <h6 className="white pt-4 pb-5">
                      Make <span className="bold">4</span> deposits
                    </h6>
                    <div className="w-100 d-flex justify-content-between ps-3 pe-3">
                      <h4 className="purple bold">UP TO</h4>
                      <h4 className="white bold">140%</h4>
                    </div>
                    <div className="w-100 d-flex justify-content-between ps-3 pe-3 pb-5">
                      <h4 className="purple bold">BONUS</h4>
                      <h4 className="white bold">60 FS</h4>
                    </div>
                    <button className="btn-save1-dis mt-3 mb-2" disabled>
                      Make a payment
                    </button>
                    <a className="lightgray pb-4 no-dec">Learn more ?</a>
                  </Container>
                </Container>
              </Container>
            </TabPanel>
            <TabPanel>
              <div className="d-flex align-items-stretch ps-5 pt-4">
                <Image src={prof}></Image>
                <div className="d-flex flex-column w-auto ps-2">
                  <h4 className="bold mb-0 black">KYC</h4>
                  <p className="mb-0 black">ID Information</p>
                </div>
              </div>
              <Container className="d-flex flex-column justify-content-center h-100">
                <Container className="d-flex justify-content-between align-items-center w-40 pt-5">
                  <Image src={id}></Image>
                  <Image src={more}></Image>
                  <Image src={phone}></Image>
                  <Image src={more}></Image>
                  <Image src={checked}></Image>
                </Container>
                <Container className="d-flex align-items-center flex-column mt-4">
                  <h3 className="text-uppercase gray bold ">
                    status: <span className="black bold ms-3">not started</span>{" "}
                  </h3>
                  <p className="gray">
                    Verify your identity to get all player's capabilities
                  </p>
                  <button className="btn-activate mt-5">
                    Open verification form
                  </button>
                </Container>
              </Container>
              <div className="mt-5 ps-4">
                <Accordion className="pb-3" defaultActiveKey={["0"]}>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>What is KYC?</Accordion.Header>
                    <Accordion.Body className="gray">
                      KYC is a process used by online casinos and many other
                      businesses to verify the identity and financial
                      information of customers. The main aim is to assess risk
                      potential, prevent underage gambling, and block financial
                      crime, such as fraud, corruption, bribery, and money
                      laundering.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      How will my information be used and stored?
                    </Accordion.Header>
                    <Accordion.Body className="gray">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      How does KYC affect my betting?
                    </Accordion.Header>
                    <Accordion.Body className="gray">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </TabPanel>
          </Tabs>
        </Container>
      </Container>
    </>
  );
};

export default Profile;
