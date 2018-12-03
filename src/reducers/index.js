import { combineReducers } from 'redux';
import { cards, cardsHasErrored, cardsIsLoading } from './cards';
import { masters, mastersHasErrored, mastersIsLoading } from './masters';

export default combineReducers({
    cards,
    cardsHasErrored,
    cardsIsLoading,
    masters,
    mastersHasErrored,
    mastersIsLoading
});