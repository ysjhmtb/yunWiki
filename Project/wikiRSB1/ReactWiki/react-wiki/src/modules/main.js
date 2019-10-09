import { createAction, handleActions } from 'redux-actions';
import img1 from '../assets/images/spring-boot-logo.png';
import img2 from '../assets/images/React-icon.png';
import img3 from '../assets/images/networkDesign.jpg';

const NOHAVE = 'main/NOHAVE';
export const nohave = createAction(NOHAVE);

const initialState = {
    menuArr: [
        {
            img: img1,
            title: 'Spring Boot',
            content: 'Spring Boot contents'
        },
        {
            img: img2,
            title: 'React',
            content: 'React contents'
        },
        {
            img: img3,
            title: 'Network',
            content: 'Network contents'
        }
    ]
};

const main = handleActions(
    {
        [NOHAVE]: state => state
    },
    initialState
);

export default main;