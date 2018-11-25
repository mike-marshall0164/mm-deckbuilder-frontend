import { combineReducers } from 'redux';
import { cards, cardsHasErrored, cardsIsLoading } from './cards';

export default combineReducers({
    cards,
    cardsHasErrored,
    cardsIsLoading
});