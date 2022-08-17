import React, { useState } from 'react'
import "../../../assets/css/language.css"
import MuiDrop from '../mui_drop/MuiDrop'
import { useSelector, useDispatch } from 'react-redux';

import { setCurrLang } from "../../../redux_store/globalReducer"
import { MenuItem } from '@mui/material';

export default function Language() {

    let allLangs = useSelector((state) => state.globalReducer.allLangs)
    let currLang = useSelector((state) => state.globalReducer.currLang)
    let dispatch = useDispatch()

    let [dropOpen, setdropOpen] = useState(false)

    return (
        <div className="lang_wrapper">
            <MuiDrop sx={{ width: '100%' }}
                dropOpen={dropOpen}
                DropBtn={
                    <div className="leftMenu_languageBtn">
                        <div className="leftMenu_oneItem">
                            {allLangs.map((lang) => {
                                if (lang.slug == currLang) {
                                    return (
                                        <>
                                            <div className="leftMenu_oneItem_img lang">
                                                <img src={'./assets/img/' + lang.img} alt="" />
                                            </div>
                                            <span>{lang.title}</span>
                                        </>
                                    )
                                }
                            })}
                            
                        </div>
                        <div className="leftMenu_language_arrow">
                            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L6 6L11 1" stroke="white" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </div>
                    </div>
                }
                DropItems={
                    <div className="nav_dropdown">
                        {allLangs.map((lang) => {
                            return (
                                <div className="navDropdown_Item lang_item" onClick={() => { dispatch(setCurrLang(lang.slug)); setdropOpen(false) }}>
                                    <div className="navDropdown_ItemImg">
                                        <img src={'./assets/img/' + lang.img} alt="" />
                                    </div>
                                    <div className="navDropdown_ItemText">{lang.title}</div>
                                </div>
                            )
                        })}
                    </div>
                }
            />
        </div>
    )
}