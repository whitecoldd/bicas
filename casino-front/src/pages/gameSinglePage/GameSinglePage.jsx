import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'

import "../../assets/css/gameSinglePage.css"
import { getGameById } from '../../functions/helpers'

export default function GameSinglePage() {

    let params = useParams()

    let allGames = useSelector((state) => state.globalReducer.games)

    let currGame = getGameById(params.id, allGames)

  return (
    <div className="singleGamePage">
        {currGame.iframe}
    </div>
  )
}