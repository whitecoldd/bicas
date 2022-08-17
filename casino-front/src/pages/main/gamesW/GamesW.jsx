import React, { useEffect, useState } from 'react'
import "../../../assets/css/gamesW.css"
import GameCard from '../../../components/gameCard/GameCard'
import SectionTitle from '../../../components/ui/sectionTitle/SectionTitle'
import { getGamesByCateg, getNewGames } from '../../../functions/helpers'

import { useSelector } from 'react-redux';


// import bannerImg from "../../../assets/img/promoBanner.jpg"




export default function GamesW({ title, titleIcon, firstCardBig, allAndNew, categs, games, limitGames, isfilter, isSeeAll, showSeeMore, showCategsNav, showBanner }) {

    let [Games, setGames] = useState([])

    let [sortedGames, setsortedGames] = useState([])

    let firstLoadLmit = 3

    let banner = useSelector((state) => state.mainPageReducer.buyBonusBanner)

    useEffect(() => {
        let arr = games.slice(0, firstLoadLmit)
        setGames(games)
        setsortedGames(arr)
    }, [])
    useEffect(() => {
        let arr = Games.slice(0, firstLoadLmit)
        setsortedGames(arr)
    }, [Games])

    let [selectedCateg, setselectedCateg] = useState('all')

    let getAllGames = () => {
        setGames(games)
    }

    let seeMoreGames = (currQuant) => {
        let limit = currQuant + 1
        if (sortedGames.length <= limit) {
            let newArr = Games.slice(0, limit)
            setsortedGames(newArr)
        }
    }

    return (
        <section className="gamesW gamesW_BG">

            <SectionTitle
                icon={titleIcon}
                title={title}
            />

            <div className="gamesW_topBlock" style={(!showCategsNav) ? { justifyContent: 'flex-end' } : {}}>

                {(showCategsNav)
                    &&
                    <div className="gamesW_cats_w">

                        {allAndNew
                            &&
                            <>
                                <div className={"gamesW_cats_item " + ((selectedCateg == 'all') && "selected")} onClick={() => { setselectedCateg('all'); getAllGames(); }}>All</div>
                                <div className={"gamesW_cats_item " + ((selectedCateg == 'new') && "selected")} onClick={() => { setselectedCateg('new'); setGames(getNewGames(games)) }}>New</div>
                                <div className="gamesW_cats_item">|</div>
                            </>
                        }

                        {Object.entries(categs).map((categ) => {
                            return (
                                <div key={categ[1].slug} className={"gamesW_cats_item " + ((selectedCateg == categ[1].slug) && "selected")}
                                    onClick={() => {
                                        setGames(getGamesByCateg(categ[1].slug, games));
                                        setselectedCateg(categ[1].slug)
                                    }}
                                >{categ[1].title}</div>
                            )
                        })}

                    </div>
                }
                

                {isfilter
                    ?
                    <div className="gamesW_right">
                        <span>Filter</span>
                        <div className="gamesW_filter_img">
                            <svg viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="4" y="10" width="6" height="2" rx="1" fill="#939393" />
                                <rect x="2" y="5" width="10" height="2" rx="1" fill="#939393" />
                                <rect width="14" height="2" rx="1" fill="#939393" />
                            </svg>
                        </div>
                    </div>
                    : isSeeAll
                    &&
                    <>
                        <div className="gamesW_right gamesW_right_seeAll" onClick={() => getAllGames()}>
                            <span>See all</span>
                        </div>
                    </>
                }
            </div>

            <div className="gamesContainer">
                {   
                (sortedGames.length > 0)
                ?
                sortedGames.map((game, i) => {
                    if (i < limitGames || !limitGames) {
                        return (
                            <GameCard
                                key={game.id}
                                widthClass={(i == 0 && firstCardBig) && 'gameCard_big'}
                                game={game}
                                i={i}
                            />
                        )
                    }
                })
                :
                <p className="nogames_message">There is no games in this category</p>
                }
            </div>

            {(showSeeMore) &&
                (sortedGames.length != Games.length)
                &&
                <div className="seeMore_btn" onClick={() => seeMoreGames(sortedGames.length)}>
                    <hr />
                    <span>+ See more</span>
                    <hr />
                </div>
            }

            {(showBanner)
                &&
                <div className="gamesW_promoBanner">
                    <img src={"./assets/img/" + banner.img} alt="" />
                    <div className="gamesW_promoBanner_content">
                        <h3 className="gamesW_promoBanner_title">{banner.title}</h3>
                        <button className="my_btn green_btn">{banner.btnText}</button>
                    </div>
                </div>
            }
            
        </section>
    )
}