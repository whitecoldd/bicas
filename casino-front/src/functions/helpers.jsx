export let getNewGames = (games) => {
    let timeNow = Date.now()
    let NowWithoutPeriod = timeNow - (7 * 24 * 60 * 60 * 1000)
    let sortedGames = games.filter((game) => (game.createdAt > NowWithoutPeriod && game.createdAt < timeNow) && true)
    return sortedGames.sort((a, b) => b.createdAt - a.createdAt)
}

export let getGamesByCateg = (categ, games) => {
    let sortedGames = games.filter((game) => {
        return game.categs.includes(categ);
    })
    return sortedGames
}


export const getGameById = (ID, games) => {
    let arr = []
    arr = games.filter(game => {
        if (game.id == ID) {
            return true
        } else return false
    })
    return arr[0]
}