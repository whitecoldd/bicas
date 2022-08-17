import { createSlice } from "@reduxjs/toolkit";


export const globalReducer = createSlice({
    name: 'global',
    initialState: {
        categories: {
            slots: {
                slug: 'slots',
                title: 'Slots',
                img: '',
            },
            roulette: {
                slug: 'roulette',
                title: 'Roulette',
                img: '',
            },
            card_games: {
                slug: 'card_games',
                title: 'Card games',
                img: '',
            },
            tournaments: {
                slug: 'tournaments',
                title: 'Tournaments',
                img: '',
            },
            jackpots: {
                slug: 'jackpots',
                title: 'Jackpots',
                img: '',
            },
            buy_bonus: {
                slug: 'buy_bonus',
                title: 'Buy bonus',
                img: '',
            },
            live: {
                slug: 'live',
                title: 'Live',
                img: '',
            },
        },
        games: [
            {
                id: 1,
                cardImg: 'gameCardImg.png',
                cardBigImg: 'gameBigCardImg.png',
                iframe: <iframe src="https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?lang=ru&amp;cur=RUB&amp;gameSymbol=vs20fruitsw&amp;websiteUrl=https%3A%2F%2Fdemogamesfree.pragmaticplay.net&amp;jurisdiction=99&amp;lobbyURL=https%3A%2F%2Fwww.pragmaticplay.com" frameborder="0" width="100%" height="100%" scrolling="no" id="myFrame"></iframe>,
                stats: [{
                        statName: 'Payout',
                        value: '19%',
                    },
                    {
                        statName: 'Best Made',
                        value: 'USD 52,876.81',
                    },
                    {
                        statName: 'Games Played',
                        value: 26.584,
                    },
                    {
                        statName: 'Biggest Win',
                        value: 'USD 12,876.11',
                    },
                ],
                categs: [ 'card_games', 'jackpots' ],
                createdAt: 1660571111124,
            }, {
                id: 2,
                cardImg: 'gameCardImg.png',
                cardBigImg: 'gameBigCardImg.png',
                iframe: <iframe src="https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?lang=ru&amp;cur=RUB&amp;gameSymbol=vs20fruitsw&amp;websiteUrl=https%3A%2F%2Fdemogamesfree.pragmaticplay.net&amp;jurisdiction=99&amp;lobbyURL=https%3A%2F%2Fwww.pragmaticplay.com" frameborder="0" width="100%" height="100%" scrolling="no" id="myFrame"></iframe>,
                stats: [{
                        statName: 'Payout',
                        value: '99%',
                    },
                    {
                        statName: 'Best Made',
                        value: 'USD 52,876.81',
                    },
                    {
                        statName: 'Games Played',
                        value: 26.584,
                    },
                    {
                        statName: 'Biggest Win',
                        value: 'USD 12,876.11',
                    },
                ],
                categs: ['slots', 'card_games'],
                createdAt: 1660571193052,
            }, {
                id: 3,
                cardImg: 'gameCardImg.png',
                cardBigImg: 'gameBigCardImg.png',
                iframe: <iframe src="https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?lang=ru&amp;cur=RUB&amp;gameSymbol=vs20fruitsw&amp;websiteUrl=https%3A%2F%2Fdemogamesfree.pragmaticplay.net&amp;jurisdiction=99&amp;lobbyURL=https%3A%2F%2Fwww.pragmaticplay.com" frameborder="0" width="100%" height="100%" scrolling="no" id="myFrame"></iframe>,
                stats: [{
                        statName: 'Payout',
                        value: '99%',
                    },
                    {
                        statName: 'Best Made',
                        value: 'USD 52,876.81',
                    },
                    {
                        statName: 'Games Played',
                        value: 26.584,
                    },
                    {
                        statName: 'Biggest Win',
                        value: 'USD 12,876.11',
                    },
                ],
                categs: ['slots', 'card_games'],
                createdAt: 1660571204999,
            }, {
                id: 4,
                cardImg: 'gameCardImg.png',
                cardBigImg: 'gameBigCardImg.png',
                iframe: <iframe src="https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?lang=ru&amp;cur=RUB&amp;gameSymbol=vs20fruitsw&amp;websiteUrl=https%3A%2F%2Fdemogamesfree.pragmaticplay.net&amp;jurisdiction=99&amp;lobbyURL=https%3A%2F%2Fwww.pragmaticplay.com" frameborder="0" width="100%" height="100%" scrolling="no" id="myFrame"></iframe>,
                stats: [{
                        statName: 'Payout',
                        value: '100%',
                    },
                    {
                        statName: 'Best Made',
                        value: 'USD 52,876.81',
                    },
                    {
                        statName: 'Games Played',
                        value: 26.584,
                    },
                    {
                        statName: 'Biggest Win',
                        value: 'USD 12,876.11',
                    },
                ],
                categs: ['slots', 'card_games', 'buy_bonus'],
                createdAt: 1660585345514,
            },
        ],
        isSidebarShown: true,
        allLangs: [
            {slug: 'en', title: 'English', img: 'lang.png'},
            {slug: 'ru', title: 'Русский', img: 'lang.png'},
            {slug: 'ro', title: 'Romana', img: 'lang.png'},
        ],
        currLang: 'en',
    },
    reducers: {
        setisSidebarShown: (state, action) => {
            state.isSidebarShown = action.payload
        },
        setCurrLang: (state, action) => {
            state.currLang = action.payload
        }
    }
})


export const {
    setAllGames,
    setisSidebarShown,
    setCurrLang,
} = globalReducer.actions

export default globalReducer.reducer