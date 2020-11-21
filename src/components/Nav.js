import { motion } from 'framer-motion';
import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../img/logo.svg';

// redux routes
import { fetchSearch } from '../actions/gamesAction';
import { useDispatch } from "react-redux";
//animation
import { fadeIn } from '../animations';

const Nav = () => {

    const dispatch = useDispatch();
    const [textInput, setTextInput] = useState('')

    //input handler
    const inputHandler = (e) => {
        setTextInput(e.target.value);
    }
    const submitSearch = (e) => {
        e.preventDefault()
        dispatch(fetchSearch(textInput));
        setTextInput('')
    }
    const clearSearch = () => {
        dispatch({ type: 'CLEAR_SERCHED' })
    }
    return (
        <StyledNav variants={fadeIn} initial='hidden' animate='show'>
            <Logo onClick={clearSearch}>
                <img src={logo} alt='logo' />
                <h1>Gamify</h1>
            </Logo>
            <div className="search">
                <form  >
                    <input value={textInput} onChange={inputHandler} type="text" />
                    <button onClick={submitSearch} type='submit'>Search</button>
                </form>
            </div>
        </StyledNav>
    )
}

const StyledNav = styled(motion.nav)`
    padding:3rem 5rem;
    text-align:center;
    input{
        width:30%;
        font-size:1.5rem;
        padding:0.5rem;
        border:none;
        margin-top:1rem;
        box-shadow: 0px 0px 30px rgba(0,0,0,0.2);
            }
            button{
                font-size: 1;
                border:none;
                padding:0.5rem 2rem;
                cursor: pointer;
                background: #ff7676;
                color:white;
                font-size:1.5rem;
            }
`;

const Logo = styled(motion.div)`
    display:flex;
    justify-content:center;
    padding:1rem;
    cursor: pointer;
    img{
        height:3rem;
        margin: 0rem 1rem;
    align-self: center;
    }
`;
export default Nav
