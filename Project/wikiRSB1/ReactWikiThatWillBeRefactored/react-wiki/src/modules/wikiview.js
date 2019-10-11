import { createAction, handleActions } from 'redux-actions';

const WIKIVIEWACTION = 'wikiview/WIKIVIEWACTION';
export const wikiviewaction = createAction(WIKIVIEWACTION);

const initialState = {
    titleArr: [
        { title: 'Spring Boot first' }
    ],
    contentsArr: [
        { contents: '#Spring Boot first\n ##second.' }
    ]
};

const wikiview = handleActions(
    {
        [WIKIVIEWACTION]: state => state
    },
    initialState
);

export default wikiview;