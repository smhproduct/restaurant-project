import { combineReducers } from 'redux';
import * as actionTypes from './actionTypes';
import { InitialContactForm } from './forms';
import { actions, createForms } from 'react-redux-form';

const dishReducer = (dishState = { isLoading: false, dishes: [] }, action) => {
    //Ekhane dishstate ta ekta object jekhane isLoading ar dishState duitai ase,
    //to ekhan theke dishState ke return korbo tokhon Menu.js e <Menuitem/> er agey mapping er shomoy duitai pass hobe object hishebe
    //so just dishstate er dishes ke access korar jonnoi ami okhane dishes.dishes likhsi 
    switch (action.type) {
        case actionTypes.DISHES_LOADING:
            return {
                ...dishState,
                isLoading: true,
                dishes: []
            }
        case actionTypes.LOAD_DISHES:
            return {
                ...dishState,
                isLoading: false,
                dishes: action.payload
            }
        default:
            return dishState;
    }
}

const commentReducer = (commentState = { isLoading: true, comments: [] }, action) => {
    switch (action.type) {
        case actionTypes.LOAD_COMMENTS:
            return {
                ...commentState,
                isLoading: false,
                comments: action.payload
            };

        case actionTypes.COMMENT_LOADING:
            return {
                ...commentState,
                isLoading: true,
                comments: []
            };

        case actionTypes.ADD_COMMENT:
            let comment = action.payload;
            comment.id = commentState.length;
            comment.date = new Date().toDateString();
            //console.log(comment);
            return commentState.concat(comment);
        default:
            return commentState;
    }
}

export const Reducer = combineReducers({
    dishes: dishReducer,
    comments: commentReducer,
    ...createForms({//ekhane contact form ke redux e rakhar jonno agey spread kore object er ekta property hishebe rakhte hoi, shamne jodi aro lage, comma diye diye aro property create kore store kora jabe
        feedback: InitialContactForm
    })
})