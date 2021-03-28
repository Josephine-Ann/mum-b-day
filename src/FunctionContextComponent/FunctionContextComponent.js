import React, { useContext } from 'react'
import { MainPageContext } from '../MainPageProvider'
import { MainPage } from '../components/MainPage/MainPage';

export const FunctionContextComponent = () => {
    const {
        state: { pictureChosen }
    } = useContext(MainPageContext);
    return (
        pictureChosen === '' ? (
            <MainPage />
        ) : (
            <MainPage />
        )

    )

}

