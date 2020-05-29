import {FETCH_HOUSES} from '../actions/houseAction';

const intialState = {
    houses: []
}

export default function(state = intialState, action) {

    switch(action.type) {
        case FETCH_HOUSES:
            return {
                ...state,
                houses: action.payload
            }
    }

    return state;
}