import React, { useState } from 'react';
import "../../../assets/css/history.css";

import { useSelector } from 'react-redux';



export default function History() {

    let [shownTab, setShownTab] = useState('casino')

    let historyArr = useSelector((state) => state.mainPageReducer.history)

    return (
        <section className="history">
            <div className="history_btns">
                <button className="my_btn btn_w" onClick={() => setShownTab('casino')}>Casino</button>
                <button className="my_btn btn_tr" onClick={() => setShownTab('betting')}>Betting</button>
            </div>

            <div className={"history_table history_table_casino " + ((shownTab == 'casino') && "history_table_show")}>
                <div className="history_table_header">
                    <span>Game title</span>
                    <span>User</span>
                    <span>Bet (amount)</span>
                    <span>Multiplier</span>
                    <span>Payout</span>
                </div>

                <div className="history_table_body">

                    {historyArr.map((row) => {
                        return (
                            <div key={row.id} className="history_table_row">
                                <span>{row.gameTitle}</span>
                                <span>{row.user}</span>
                                <span>{row.betAmount}</span>
                                <span>{row.multiplier}</span>
                                <span>{row.payout}</span>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className={"history_table history_table_betting " + ((shownTab == 'betting') && "history_table_show")} >
                <div className="history_table_header">
                    <span>Game title</span>
                    <span>User</span>
                    <span>Bet (amount)</span>
                    <span>Multiplier</span>
                    <span>Payout</span>
                </div>

                <div className="history_table_body">

                    {historyArr.map((row) => {
                        return (
                            <div key={row.id} className="history_table_row">
                                <span>{row.gameTitle}</span>
                                <span>{row.user}</span>
                                <span>{row.betAmount}</span>
                                <span>{row.multiplier}</span>
                                <span>{row.payout}</span>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}