'use strict';
import * as actionEvents from '../actions/actionTypes';
import {initialState} from '../initialState';

export function portfolioReducer(state = initialState.portfolio, action) {
    const actionType = action.type;

    switch (actionType) {        
        default:
            return state;
    }
}