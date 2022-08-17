import React, { useState } from 'react'
import "../../assets/css/footer.css"
import { useSelector } from 'react-redux';

import { Link } from "react-router-dom";

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Language from '../ui/language/Language';

import Logo from "../../assets/img/lOGO.svg"
import Curacao from "../../assets/img/Curacao 1.png"



export default function Footer() {

    let isSidebarShown = useSelector((state) => state.globalReducer.isSidebarShown)


    const [itemsArr, setitems] = useState([
        { id: 1, img: 'bitcoincash.png' },
        { id: 1, img: 'bitcoincash.png' },
        { id: 1, img: 'bitcoincash.png' },
        { id: 1, img: 'bitcoincash.png' },
        { id: 1, img: 'bitcoincash.png' },
        { id: 1, img: 'bitcoincash.png' },
        { id: 1, img: 'bitcoincash.png' },
        { id: 1, img: 'bitcoincash.png' },
        { id: 1, img: 'bitcoincash.png' },
        { id: 1, img: 'bitcoincash.png' },
        { id: 1, img: 'bitcoincash.png' },
        { id: 1, img: 'bitcoincash.png' },
    ])

    const items = itemsArr.map((item) => {
        return (
            <div className="footer_slide item" /* style={{ margin: '0 50px', }} */>
                <img src={'./assets/img/' + item.img} alt="" />
            </div>
        )
    })

    const Carousel = () => (
        <AliceCarousel
            autoWidth
            autoPlay
            autoPlayStrategy="none"
            autoPlayInterval={1000}
            animationDuration={1000}
            animationType="fadeout"
            infinite
            touchTracking={true}
            disableDotsControls
            /* disableButtonsControls */
            items={items}
        />
    )

    let [linksCasino, setlinksCasino] = useState([
        { path: '#', linkText: 'Providers' },
        { path: '#', linkText: 'Providers' },
        { path: '#', linkText: 'Providers' },
        { path: '#', linkText: 'Providers' },
        { path: '#', linkText: 'Providers' },
        { path: '#', linkText: 'Providers' },
        { path: '#', linkText: 'Providers' },
        { path: '#', linkText: 'Providers' },
    ])
    let [linksAbout, setlinksAbout] = useState([
        { path: '#', linkText: 'Providers' },
        { path: '#', linkText: 'Providers' },
        { path: '#', linkText: 'Providers' },
        { path: '#', linkText: 'Providers' },
        { path: '#', linkText: 'Providers' },
        { path: '#', linkText: 'Providers' },
    ])
    let [linksInfo, setlinksInfo] = useState([
        { path: '#', linkText: 'Providers' },
        { path: '#', linkText: 'Providers' },
        { path: '#', linkText: 'Providers' },
        { path: '#', linkText: 'Providers' },
        { path: '#', linkText: 'Providers' },
        { path: '#', linkText: 'Providers' },
        { path: '#', linkText: 'Providers' },
    ])

    return (
        <footer className={"footer " + ((!isSidebarShown) && "footer_fullWidth")}>
            <div className="footer_content">
                <div className="footer_logoAndSocials">
                    <div className="footer_logoAndIcon">
                        <Link to={'/'}>
                            <div className="footer_logo">
                                <img src={Logo} alt="" />
                            </div>
                        </Link>
                        <div className="footer_icon">
                            <img src={Curacao} alt=""/>
                        </div>
                    </div>

                    <Language />

                    <div className="footer_socials">
                        <a href="#">
                            <div className="footer_socialIcon">
                                <svg viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24.8745 2.53085C24.0797 2.89314 23.2012 3.12757 22.3436 3.25544C22.741 3.1915 23.3476 2.4456 23.5777 2.12593C23.9333 1.65707 24.247 1.1456 24.4143 0.570184C24.4353 0.527561 24.4562 0.463626 24.4143 0.442315C24.3516 0.421003 24.3307 0.421003 24.2888 0.463626C23.3267 0.996415 22.3436 1.35871 21.2978 1.63576C21.2142 1.65707 21.1514 1.63576 21.0887 1.57183C21.005 1.46527 20.9213 1.38002 20.8167 1.29478C20.3775 0.911169 19.8964 0.612807 19.3735 0.37838C18.6624 0.0800184 17.9094 -0.0478509 17.1355 0.0160837C16.4034 0.0587068 15.6714 0.271822 15.0229 0.634119C14.3745 0.975103 13.7889 1.46527 13.3078 2.06199C12.8267 2.65872 12.4712 3.38331 12.2829 4.15052C12.1156 4.87512 12.1156 5.59971 12.2202 6.34561C12.2411 6.47348 12.2202 6.49479 12.1156 6.47348C7.99508 5.85545 4.58574 4.34233 1.80387 1.12428C1.72021 0.975103 1.65746 0.975103 1.55288 1.12428C0.339735 2.97839 0.92539 5.962 2.45228 7.41119C2.66144 7.60299 2.8706 7.7948 3.07976 7.9866C2.9961 8.00791 1.99212 7.90136 1.09272 7.41119C0.967223 7.32594 0.904474 7.36857 0.904474 7.51775C0.883558 7.70955 0.904474 7.90136 0.946307 8.11447C1.17639 9.98989 2.45228 11.7374 4.20924 12.3981C4.41841 12.4833 4.64848 12.5686 4.87856 12.6112C4.48115 12.6965 4.06283 12.7604 2.93335 12.6751C2.78694 12.6538 2.7451 12.7178 2.78694 12.8669C3.6445 15.2538 5.50605 15.9571 6.88652 16.362C7.07477 16.4047 7.26302 16.4047 7.45126 16.4473C7.43035 16.4686 7.43035 16.4686 7.40943 16.4899C6.94927 17.2145 5.35964 17.7473 4.60665 18.003C3.24709 18.4932 1.78296 18.7063 0.360651 18.5571C0.130573 18.5145 0.0887402 18.5358 0.0259914 18.5571C-0.0367574 18.5998 0.0259914 18.6424 0.0887402 18.7063C0.381568 18.8981 0.674395 19.0686 0.967223 19.2391C1.86662 19.7293 2.82877 20.1129 3.81183 20.3899C8.9154 21.8178 14.6674 20.7735 18.495 16.8948C21.507 13.8473 22.5528 9.6489 22.5528 5.42922C22.5528 5.25872 22.741 5.17348 22.8665 5.08823C23.6404 4.49151 24.2888 3.76692 24.8745 2.97839C25 2.8079 25 2.6374 25 2.57347C25 2.55216 25 2.55216 25 2.55216C24.9791 2.46691 24.9791 2.48822 24.8745 2.53085Z" fill="#EB266F" />
                                </svg>
                            </div>
                        </a>
                        <a href="#">
                            <div className="footer_socialIcon">
                                <svg viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 25L1.78852 18.3137C0.766509 16.4902 0.235848 14.4314 0.235848 12.3529C0.235848 5.54902 5.79796 0 12.6179 0C19.4379 0 25 5.54902 25 12.3529C25 19.1569 19.4379 24.7059 12.6179 24.7059C10.5739 24.7059 8.54953 24.1961 6.74135 23.2157L0 25ZM7.07547 20.6863L7.48821 20.9412C9.04088 21.8627 10.8097 22.3529 12.6179 22.3529C18.1604 22.3529 22.6612 17.8627 22.6612 12.3333C22.6612 6.80392 18.1604 2.31373 12.6179 2.31373C7.07547 2.33333 2.57469 6.82353 2.57469 12.3529C2.57469 14.1765 3.08569 15.9804 4.04874 17.549L4.30425 17.9804L3.30189 21.7059L7.07547 20.6863Z" fill="#EB266F" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M17.2175 14.0591C16.7065 13.7454 16.0382 13.412 15.4486 13.6669C14.9965 13.863 14.7017 14.5689 14.3873 14.9415C14.23 15.1375 14.0532 15.1571 13.8173 15.0591C12.0877 14.3728 10.7709 13.216 9.80787 11.6277C9.65064 11.3728 9.67029 11.1964 9.86683 10.9611C10.1616 10.6277 10.5154 10.2356 10.594 9.78459C10.6727 9.33361 10.4565 8.8042 10.2599 8.39243C10.0241 7.88263 9.74891 7.13753 9.21825 6.84341C8.74655 6.5689 8.11762 6.72577 7.68523 7.07871C6.95803 7.68655 6.5846 8.60812 6.60425 9.54929C6.60425 9.8042 6.64356 10.0787 6.70252 10.3336C6.85976 10.9415 7.13491 11.5101 7.44938 12.0591C7.68523 12.4709 7.96039 12.863 8.23554 13.2552C9.15929 14.5101 10.3189 15.5885 11.6357 16.412C12.3039 16.8238 13.0115 17.1767 13.7583 17.412C14.5838 17.6865 15.3307 17.9807 16.2348 17.8042C17.1782 17.6277 18.1019 17.0395 18.4753 16.1375C18.5932 15.863 18.6326 15.5689 18.5736 15.2944C18.495 14.6865 17.6892 14.3532 17.2175 14.0591Z" fill="#EB266F" />
                                </svg>
                            </div>
                        </a>
                        <a href="#">
                            <div className="footer_socialIcon">
                                <svg viewBox="0 0 12 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.2196 12.8227L11.8465 8.69178H7.94456V6.0204C7.94456 4.88669 8.48188 3.79207 10.2345 3.79207H12V0.273654C12 0.273654 10.4009 0 8.86567 0C5.66738 0 3.5693 1.98074 3.5693 5.56431V8.71785H0V12.8487H3.5565V22.8306C4.27292 22.9479 5.00213 23 5.74414 23C6.48614 23 7.22814 22.9348 7.93177 22.8306V12.8227H11.2196Z" fill="#EB266F" />
                                </svg>
                            </div>
                        </a>
                        <a href="#">
                            <div className="footer_socialIcon">
                                <svg viewBox="0 0 23 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M23 5.00952C23 2.24762 20.7383 0 17.9592 0H5.04083C2.26167 0 0 2.24762 0 5.00952V10.9714C0 13.7524 2.26167 16 5.04083 16H17.94C20.7192 16 22.9808 13.7524 22.9808 10.9905V5.00952H23ZM15.41 8.4381L9.62167 11.2952C9.39167 11.4095 8.625 11.2571 8.625 10.9905V5.1619C8.625 4.89524 9.41083 4.74286 9.62167 4.87619L15.1608 7.86667C15.41 7.98095 15.64 8.32381 15.41 8.4381Z" fill="#EB266F" />
                                </svg>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="footer_links_w">
                    <div className="footer_links_column">
                        <p className="footerLinksCol_title">Casino</p>
                        <ul>
                            {linksCasino.map((link) => {
                                return <li key={link.path}><a href={link.path}>{link.linkText}</a></li>
                            })}
                        </ul>
                    </div>
                    <div className="footer_links_column">
                        <p className="footerLinksCol_title">About us</p>
                        <ul>
                            {linksAbout.map((link) => {
                                return <li key={link.path}><a href={link.path}>{link.linkText}</a></li>
                            })}
                        </ul>
                    </div>
                    <div className="footer_links_column">
                        <p className="footerLinksCol_title">Information</p>
                        <ul>
                            {linksInfo.map((link) => {
                                return <li key={link.path}><a href={link.path}>{link.linkText}</a></li>
                            })}
                        </ul>
                    </div>
                </div>
            </div>
            <hr/>
                <div className="footer_slider">
                    {Carousel()}
                </div>
        </footer>
    )
}