//import cart from './cart';
import items from './items';
import selectedItem from './selectedItem';

import { combineReducers } from 'redux';
const rootReducer = combineReducers({
    items,
    selectedItem
});

export default rootReducer;