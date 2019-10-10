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
            content: 'Lorem Ipsum is simply dummy text of the printing and \
                    typesetting industry. Lorem Ipsum has been the industry\'s \
                    standard dummy text ever since the 1500s, when an unknown \
                    printer took a galley of type and scrambled it to make \
                    '
        },
        {
            img: img2,
            title: 'React',
            content: 'Lorem Ipsum is simply dummy text of the printing and \
                    typesetting industry. Lorem Ipsum has been the industry\'s \
                    standard dummy text ever since the 1500s, when an unknown \
                    printer took a galley of type and scrambled it to make \
                    '
        },
        {
            img: img3,
            title: 'Network',
            content: 'Lorem Ipsum is simply dummy text of the printing and \
                    typesetting industry. Lorem Ipsum has been the industry\'s \
                    standard dummy text ever since the 1500s, when an unknown \
                    printer took a galley of type and scrambled it to make \
                    '
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