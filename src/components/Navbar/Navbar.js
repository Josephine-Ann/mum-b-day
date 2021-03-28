import React, { useContext } from 'react'
import { MainPageContext } from '../../MainPageProvider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './Navbar.scss'

export const Navbar = () => {
    const {
        state: {
            pictureChosen,
            menuOpen
        },
        openMenu
    } = useContext(MainPageContext);
    return (
        <div>
            <div id="navbar">
                <a href="#panel-lower" id="navbar-button">Participants</a>
                <FontAwesomeIcon onClick={() => { openMenu() }} icon={faBars} />
            </div>
            <div id="letter-navbar-show" className={menuOpen ? "letter-navbar-hide" : ""}>
                <p> Dear Mum...</p>
                <p> We put together these videos because even if we have to avoid a virus, we are still thinking of
                you.
        </p>
                <p>Maybe we cannot sit together at the same table, but it doesn’t mean it’s not important to
                celebrate the
            birthday of one of the kindest, most thoughtful people we know.</p>
                <p id="para"> Keep working on your passions, keep chatting with loved ones every day, keep spending quality
                time with
                dad. I know it’s not easy, but soon we will all be able to get together in person. We love you!
        </p>
            </div>
        </div>

    )
}