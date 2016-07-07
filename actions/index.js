export const CURRENT_BOARD = 'CURRENT_BOARD';
export const SQUARE_INDEX = 'SQUARE_INDEX';

export function getBoardState(){
  return {
    type: CURRENT_BOARD,
  };
}

export function getSquareIndex(index){
  return {
    type: SQUARE_INDEX,
    payload: index
  };
}
