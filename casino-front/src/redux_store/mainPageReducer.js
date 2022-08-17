import { createSlice } from "@reduxjs/toolkit";



export const mainPageReducer = createSlice({
    name: 'mainPage',
    initialState: {
        buyBonusBanner: {
            img: 'promoBanner.jpg',
            title: 'Dimond mystery',
            btnText: 'TAKE BONUS',
        },
        history: [
            {
                id: 1,
                gameTitle: 'Lord of the ocean',
                user: 'Player_22032',
                betAmount: '0.05 BTC',
                multiplier: 'x 2',
                payout: '0.1 BTC',
            }, {
                id: 2,
                gameTitle: 'Lord of the ocean',
                user: 'Player_22032',
                betAmount: '0.05 BTC',
                multiplier: 'x 2',
                payout: '0.1 BTC',
            }, {
                id: 3,
                gameTitle: 'Lord of the ocean',
                user: 'Player_22032',
                betAmount: '0.05 BTC',
                multiplier: 'x 2',
                payout: '0.1 BTC',
            }, {
                id: 4,
                gameTitle: 'Lord of the ocean',
                user: 'Player_22032',
                betAmount: '0.05 BTC',
                multiplier: 'x 2',
                payout: '0.1 BTC',
            },
        ]
    },
    reducers: {

    }
})

export default mainPageReducer.reducer