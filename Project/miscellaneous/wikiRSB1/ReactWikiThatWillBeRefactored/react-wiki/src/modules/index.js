import {combineReducers} from 'redux';
import main from './main';
import wikiview from './wikiview';

const rootReducer = combineReducers({
    main,
    wikiview
});

export default rootReducer;