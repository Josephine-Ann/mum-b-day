import React from 'react';

export const MainPageContext = React.createContext();

export class MainPageProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pictureChosenArray: ["Will, Megan and Ada",
                "Éva's family", "Louis", "Louise",
                "Diane's family", "David, Joey and Maura",
                "Tom", "David and Katey", "Bill and Clair",
                "Sandra's family", "Maura", "Elaine and Rob", "Shirley",
                "Karin", "Naomi", "Nathan", "Greg", "Kate and Jono",
                "Ann Daly", "Frankie", "Ann Tector", "Bobby", "Nora and John",
                "Jane", "Adeline and Louis", "Nanny", "Peter"],
            orderPicture: 0,
            menuOpen: false,
            url: 'https://youtu.be/XhXvJsGjTmM',
            allUrls: [
                'https://youtu.be/xmRSuyFpnEU',
                'https://youtu.be/bduFok9sdaQ',
                'https://youtu.be/EcJUf1AwMng',
                'https://youtu.be/HPskaR0NZEA',
                'https://youtu.be/cuE4onTLWfA',
                'https://youtu.be/xJQFIIcV-Go',
                'https://youtu.be/yngXXx-qdew',
                'https://youtu.be/Xyeyw9XJnjI',
                'https://youtu.be/0j36zknsC7c',
                'https://youtu.be/YWRdWelcmbE',
                'https://youtu.be/82RMOo8ZjKk',
                'https://youtu.be/0nEpx59CSBo',
                'https://youtu.be/L8FicbcNlmE',
                'https://youtu.be/B9qMD9TuNeU',
                'https://youtu.be/uqlxzFE2xeU',
                'https://youtu.be/_2GXtWZ_x7g',
                'https://youtu.be/5SiaOklfkrY',
                'https://youtu.be/7_k50bkSc3U',
                'https://youtu.be/pgK17UYZ1h8',
                'https://youtu.be/Xq0uqpDdVVI',
                'https://youtu.be/cuUld0TTio4',
                'https://youtu.be/xjhjFUYOVIk',
                'https://youtu.be/IcveCwvkpzY',
                'https://youtu.be/xkvqOy-_RFQ',
                'https://youtu.be/NGsvoMVK9Pc',
                'https://youtu.be/pa6cJpjx_-0',
                'https://youtu.be/tp2WaPfAkHU',

            ]
        };
    }

    updatePhoto = async (direction) => {
        if (this.state.orderPicture !== (this.state.pictureChosenArray.length - 1)) {
            this.setState({
                orderPicture: (this.state.orderPicture + (direction)),
                pictureChosen: this.state.pictureChosenArray[this.state.orderPicture + (direction)]
            })
        }
    }

    openMenu = async () => {
        if (this.state.menuOpen) {
            this.setState({
                menuOpen: false
            })
        } else {
            this.setState({
                menuOpen: true
            })
        }
    }

    render() {
        return (
            <MainPageContext.Provider
                value={{
                    state: this.state,
                    updatePhoto: this.updatePhoto,
                    openMenu: this.openMenu
                }}>
                {!this.state.loading ? this.props.children : "Loading Main Page List..."}
            </MainPageContext.Provider>
        );
    }
}

export default MainPageContext;
