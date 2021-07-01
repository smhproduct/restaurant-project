import * as actionTypes from './actionTypes';
import axios from 'axios';
import { baseUrl } from './baseUrl';

export const addComment = (dishId, rating, author, comment) => ({
    type: actionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        author: author,
        rating: rating,
        comment: comment
    }
})

export const loadDishes = dishes => ({
    type: actionTypes.LOAD_DISHES,
    payload: dishes
})

export const dishesLoading = () => ({
    type: actionTypes.DISHES_LOADING
})

export const fetchDishes = () => {//loaddishes ar dishes loading duita alada dispatch function, oderke consecutively perform koranor jonno ami ei dispatch ta call korsi
    return dispatch => {
        dispatch(dishesLoading());

        axios.get(baseUrl + "dishes")
            .then(response => response.data)
            .then(dishes => dispatch(loadDishes(dishes)))

    }
}
//ei uporer fetchdishes dispatch function e kaahini ase. Dispatch function by default ALWAYS object return kore
//But ami ekhane dispatch er bhitor DUITA aro dispatch pass korsi, jeta kora possible na
//So ei rule bending e help korse redux thunk, jeta amra store.js e install kore nisi

/*export const resetFeedbackForm = () => {
    return dispatch => {
        dispatch(actions.reset(actionTypes.FEEDBACK))
    }

}*/

export const commentLoading = () => ({
    type: actionTypes.COMMENT_LOADING
})

export const loadcomments = comments => ({
    type: actionTypes.LOAD_COMMENTS,
    payload: comments
})

export const fetchComments = () => {
    return dispatch => {
        dispatch(commentLoading());
        axios.get(baseUrl + 'comments')
            .then(response => response.data)
            .then(comments => dispatch(loadcomments(comments)))
    }
}
/*export const fetchDishes = () => {//loaddishes ar dishes loading duita alada dispatch function, oderke consecutively perform koranor jonno ami ei dispatch ta call korsi
    return dispatch => {
        dispatch(dishesLoading());

        axios.get(baseUrl + "dishes")
            .then(response => response.data)
            .then(dishes => dispatch(loadDishes(dishes)))

    }
}*/