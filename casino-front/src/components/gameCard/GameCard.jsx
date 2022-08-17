import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "../../assets/css/gameCard.css";

export default function GameCard({ widthClass, game, i }) {

    let [showStats, setshowStats] = useState(false)

    let path = './assets/img/'

    return (
        <div className={"gameCard " + widthClass}>
            <img src={path + ((i == 0 && widthClass) ? game.cardBigImg : game.cardImg)} alt=""/>
            <div className="gameCard_hover">
                <div className={"gameCard_hover_default " + ((showStats) && "hide_hover_default")}>
                    <div className="gameCard_iconBtns">
                        <div className="gameCard_iconBtn">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M9.15376 0.643473C9.42015 -0.214491 10.5799 -0.214491 10.8463 0.643473L12.5969 6.28283C12.7161 6.66653 13.0577 6.92631 13.4431 6.92631H19.1085C19.9704 6.92631 20.3288 8.08071 19.6315 8.61096L15.0481 12.0962C14.7363 12.3334 14.6057 12.7537 14.7249 13.1375L16.4756 18.7768C16.742 19.6347 15.8037 20.3482 15.1064 19.8179L10.523 16.3326C10.2111 16.0955 9.78887 16.0955 9.47701 16.3326L4.8936 19.8179C4.19629 20.3482 3.25806 19.6347 3.5244 18.7768L5.27512 13.1375C5.39423 12.7537 5.26374 12.3334 4.9519 12.0962L0.36848 8.61096C-0.328841 8.08071 0.0295356 6.92631 0.891461 6.92631H6.55691C6.94235 6.92631 7.28393 6.66653 7.40307 6.28283L9.15376 0.643473Z"
                                    fill="white" />
                            </svg>
                        </div>
                        <div className="gameCard_iconBtn" onClick={() => setshowStats(true)}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M20 0.3998V3.3439C20 3.56793 19.8241 3.74387 19.6 3.74387C19.38 3.74387 19.2001 3.56792 19.2001 3.3439L19.1999 1.37585L11.5076 9.16026C11.3595 9.31232 11.0876 9.31232 10.9395 9.16026L8.25146 6.44021L0.687165 14.1006C0.607239 14.1766 0.503098 14.2167 0.399124 14.2167C0.299132 14.2167 0.199139 14.1807 0.119041 14.1006C-0.0370012 13.9485 -0.0409826 13.6925 0.115062 13.5367L7.96723 5.58838C8.04317 5.51244 8.14732 5.4723 8.25129 5.4723C8.35924 5.4723 8.46339 5.51226 8.53933 5.58838L11.2234 8.30843L18.6437 0.799937H16.6916C16.4676 0.799937 16.2917 0.619847 16.2917 0.399969C16.2917 0.179913 16.4676 0 16.6916 0H19.5997C19.6357 0 19.6677 0.00397891 19.6997 0.015916C19.7198 0.015916 19.7397 0.023874 19.7558 0.0318316C19.8518 0.0717939 19.9277 0.147913 19.9677 0.243929C19.9758 0.263996 19.9838 0.279912 19.9838 0.299979C19.9957 0.331983 19.9999 0.363987 19.9999 0.399971L20 0.3998Z"
                                    fill="white" />
                                <path
                                    d="M14.415 12.416V19.6003C14.415 19.8203 14.2351 20.0002 14.015 20.0002H12.0269C11.8069 20.0002 11.627 19.8201 11.627 19.6003V12.416C11.627 12.1919 11.807 12.016 12.0269 12.016H14.015C14.2351 12.016 14.415 12.1919 14.415 12.416Z"
                                    fill="white" />
                                <path
                                    d="M4.82322 14.6082V19.6003C4.82322 19.8204 4.64727 20.0003 4.42325 20.0003H2.44311C2.22306 20.0003 2.04314 19.8202 2.04314 19.6003L2.04297 14.6082C2.04297 14.3882 2.22306 14.2083 2.44294 14.2083H4.42307C4.64711 14.2083 4.82322 14.3882 4.82322 14.6082H4.82322Z"
                                    fill="white" />
                                <path
                                    d="M18.8079 6.23169H16.8238C16.6037 6.23169 16.4238 6.41178 16.4238 6.63166V19.6003C16.4238 19.8204 16.6039 20.0003 16.8238 20.0003H18.8079C19.028 20.0003 19.2079 19.8202 19.2079 19.6003V6.6321C19.2079 6.41205 19.028 6.23196 18.8079 6.23196V6.23169Z"
                                    fill="white" />
                                <path
                                    d="M9.21905 10.0758H7.23493C7.01488 10.0758 6.83496 10.2517 6.83496 10.4758V19.6003C6.83496 19.8204 7.01488 20.0003 7.23493 20.0003H9.21905C9.44308 20.0003 9.61902 19.8202 9.61902 19.6003V10.4762C9.61902 10.2522 9.44308 10.0761 9.21905 10.0761V10.0758Z"
                                    fill="white" />
                            </svg>
                        </div>
                    </div>
                    <Link to={'/games/' + game.id}><button className="my_btn btn_p">Play</button></Link>
                    <Link to={'/games/' + game.id}><button className="my_btn btn_w">Play Demo</button></Link>
                    {/* <button className="my_btn btn_p"> <Link to={'/games/' + game.id}>Play</Link> </button>
                    <button className="my_btn btn_w"> <Link to={'/games/' + game.id}>Play Demo</Link> </button> */}
                </div>
                <div className={"gameCard_hover_stats " + ((showStats) ? "showStats" : "")}>
                    <div className="gameCard_stats_title">Statistics</div>
                    <div className="gameCard_stats_close" onClick={() => setshowStats(false)}>
                        <svg viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="1.70711" y1="1" x2="12" y2="11.2929" stroke="white" strokeLinecap="round" />
                            <line x1="1" y1="11.2929" x2="11.2929" y2="1" stroke="white" strokeLinecap="round" />
                        </svg>
                    </div>

                    <div className="gameCard_stats_content">

                        {(game.stats) ?
                            <div className="gameCard_stats_content_w">
                                {game.stats.map((stat) => {
                                    return (
                                        <div key={stat.statName} className="gameCard_stats_row">
                                            <span className="left">{stat.statName}</span>
                                            <span className="right">{stat.value}</span>
                                        </div>
                                    )
                                })}
                            </div>
                            :
                            <p>There is no stats for this game</p>
                        }
                        
                    </div>

                    <button className="my_btn btn_p">Play</button>
                </div>
            </div>
        </div>
    )
}