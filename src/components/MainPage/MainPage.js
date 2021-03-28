import React, { useContext } from 'react';
import ReactPlayer from 'react-player';
import { MainPageContext } from '../../MainPageProvider';
import { Navbar } from '../Navbar/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import './MainPage.scss'

export const MainPage = () => {
    const {
        state: {
            pictureChosenArray,
            url,
            allUrls,
            orderPicture
        },
        updatePhoto
    } = useContext(MainPageContext);
    return (
        <div>
            <Navbar />
            <div id="upper-panels">
                <div id="panel-left">
                </div>
                <div id="panel-right">
                    <ReactPlayer id="video-all" url={url} />
                </div>
            </div>
            <div id="panel-lower">
                <div id="video-individual-box">
                    <ReactPlayer id="video-individual" url={allUrls[orderPicture]} />
                    <div id="video-individual-text">
                        <FontAwesomeIcon onClick={() => { updatePhoto(-1) }} icon={faCaretLeft} />
                        <p>{pictureChosenArray[orderPicture]}</p>
                        <FontAwesomeIcon onClick={() => { updatePhoto(1) }} icon={faCaretRight} />
                    </div>
                </div>
                <div id="letter">
                    <p> Dear Mum...</p>
                    <p> We put together these videos because even if we have to avoid a virus, we are still thinking of you.
                </p>
                    <p>Maybe we cannot sit together at the same table, but it doesn’t mean it’s not important to celebrate the
                    birthday of one of the kindest, most thoughtful people we know.</p>
                    <p> Keep working on your passions, keep chatting with loved ones every day, keep spending quality time with
                    dad. I know it’s not easy, but soon we will all be able to get together in person. We love you!
                </p>
                </div>
            </div>
        </div>

    )
}