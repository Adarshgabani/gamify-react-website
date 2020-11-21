import axios from 'axios';
import { popularGamesURL, newGamesURL, upcomingGamesURL, searchGameURL } from '../api';

//action creator
export const loadGames = () => async (dispatch) => {
    //fatch axios
    const popularGamesData = await axios.get(popularGamesURL());
    const newGamesData = await axios.get(newGamesURL());
    const upcomingGamesData = await axios.get(upcomingGamesURL());

    dispatch({
        type: 'FETCH_GAMES',
        payload: {
            popular: popularGamesData.data.results,
            newGames: newGamesData.data.results,
            upcoming: upcomingGamesData.data.results
        }
    })
}

export const fetchSearch = (game_name) => async (dispatch) => {
    const searchGame = await axios.get(searchGameURL(game_name));
    dispatch({
        type: 'FETCH_SEARCHED',
        payload: {
            searched: searchGame.data.results,
        }
    })
}