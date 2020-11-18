import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { loadGames } from '../actions/gamesAction';
import Game from '../components/Game';

const Home = () => {
    // FETCH GAMES
    const dispatch = useDispatch();
    useEffect(() => {
        console.log('in useEffect')
        dispatch(loadGames());
    }, [dispatch])

    // Get data from store
    const { newGames, upcoming, popular } = useSelector(state => state.games);
    return (
        <GameList>
            <h2>Upcoming Games</h2>
            <Games>
                {upcoming.map((game) => (
                    <Game
                        key={game.id}
                        name={game.name}
                        released={game.released}
                        id={game.id}
                        image={game.background_image}
                    />
                ))}
            </Games>
            <h2>Popular Games</h2>
            <Games>
                {popular.map((game) => (
                    <Game
                        key={game.id}
                        name={game.name}
                        released={game.released}
                        id={game.id}
                        image={game.background_image}
                    />
                ))}
            </Games>
            <h2>New Games</h2>
            <Games>
                {newGames.map((game) => (
                    <Game
                        key={game.id}
                        name={game.name}
                        released={game.released}
                        id={game.id}
                        image={game.background_image}
                    />
                ))}
            </Games>
        </GameList>
    )
}

const GameList = styled(motion.div)`
    padding: 0rem 5rem;
    h2{
        padding: 5rem 0rem;
    }

`;
const Games = styled(motion.div)`
    display:grid;
    min-height:80vh;
    grid-template-columns:repeat(auto-fit,minmax(500px,1fr));
    grid-column-gap:3rem;
    grid-row-gap:5rem
`;

export default Home
