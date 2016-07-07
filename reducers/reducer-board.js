import {CURRENT_BOARD} from '../actions/index'; //just grabbing the name, not the function
import {SQUARE_INDEX} from '../actions/index';

export default function(state = [], action){
  switch (action.type){
    case CURRENT_BOARD:
      console.log(CURRENT_BOARD);
      return state; 
  }
  return state;
}

export default function(state = [], action){
  switch (action.type){
    case SQUARE_INDEX:
      console.log(SQUARE_INDEX + ' is ' + action.payload);
      return state;
  }
  return state;
}
