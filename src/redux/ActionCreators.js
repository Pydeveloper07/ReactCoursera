import * as ActionTypes from './ActionTypes';
import {baseUrl} from '../shared/baseUrl';

export const addFeedback = (feedback) => ({
    type: ActionTypes.ADD_FEEDBACK,
    payload: feedback
});

export const postFeedback = (firstname, lastname, telnum, email, agree, contactType, message) => (dispatch) => {
    var newFeedback = {
        firstname: firstname,
        lastname: lastname,
        telnum: telnum,
        email: email,
        agree: agree,
        contactType: contactType,
        message: message
    };
    newFeedback.date = new Date().toISOString();
    return fetch(baseUrl + 'feedback', {
            method: 'POST',
            body: JSON.stringify(newFeedback),
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'same-origin'
        })
        .then((response) => {
            if (response.ok){
                return response;
            }
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        },
        (error) => {
            var errMess = new Error(error.message);
            throw errMess;
        })
        .then((response) => response.json())
        .then((feedback) => alert(`Feedback's been successfully posted!\n${JSON.stringify(feedback)}`))
        .catch((error) => alert('Feedback post failed!\n' + error.message));
};

export const addComment = (comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: comment
});

export const postComment = (dishId, rating, author, comment) => (dispatch) => {
    var newComment = {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    };
    newComment.date = new Date().toISOString();
    return fetch(baseUrl + 'comments', {
            method: 'POST',
            body: JSON.stringify(newComment),
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'same-origin'
        })
        .then((response) => {
            if (response.ok){
                return response;
            }
            var error = new Error('Error: ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        },
        (error) => {
            var errMess = new Error(error.message);
            throw errMess;
        })
        .then((response) => response.json())
        .then((response) => dispatch(addComment(response)))
        .catch((error) => alert(error.message + '. Comment could not be added'));
}

export const fetchComments = () => (dispatch) => {
    return fetch(baseUrl + 'comments')
        .then((response) => {
            if (response.ok){
                return response;
            }
            var error = new Error('Error: ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        },
        (error) => {
            var errMess = new Error(error.message);
            throw errMess;
        })
        .then((response) => response.json())
        .then((comments) => dispatch(addComments(comments)))
        .catch((error) => dispatch(commentsFailed(error.message)));
}

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});

export const commentsFailed = (errMess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errMess
});

export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading());
    return fetch(baseUrl + 'dishes')
        .then((response) => {
            if (response.ok){
                return response;
            }
            var error = new Error('Error: ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        },
        (error) => {
            var errMess = new Error(error.message);
            throw errMess;
        })
        .then((response) => response.json())
        .then((dishes) => dispatch(addDishes(dishes)))
        .catch((error) => dispatch(dishesFailed(error.message)));
};

export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING,
});

export const dishesFailed = (errMess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errMess
});

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});

export const fetchPromos = () => (dispatch) => {
    dispatch(promosLoading());
    return fetch(baseUrl + 'promotions')
        .then((response) => {
            if (response.ok){
                return response;
            }
            var error = new Error('Error: ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        },
        (error) => {
            var errMess = new Error(error.message);
            throw errMess;
        })
        .then((response) => response.json())
        .then((promos) => dispatch(addPromos(promos)))
        .catch((error) => dispatch(promosFailed(error.message)));
};

export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
});
export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
});
export const promosFailed = (errMess) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errMess
});

export const fetchLeaders = () => (dispatch) => {
    dispatch(leadersLoading());
    return fetch(baseUrl + 'leaders')
        .then((response) => {
            if (response.ok){
                return response;
            }
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        },
        (error) => {
            var errMess = new Error(error.message);
            throw errMess;
        })
        .then((response) => response.json())
        .then((leaders) => dispatch(addLeaders(leaders)))
        .catch((error) => dispatch(leadersFailed(error.message)));
}

export const addLeaders = (leaders) => ({
    type: ActionTypes.ADD_LEADERS,
    payload: leaders
});

export const leadersLoading = () => ({
    type: ActionTypes.LEADERS_LOADING,
});

export const leadersFailed = (errMess) => ({
    type: ActionTypes.LEADERS_FAILED,
    payload: errMess
});