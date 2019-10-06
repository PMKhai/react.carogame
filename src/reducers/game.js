import * as types from '../constants';

const initialStates = {
  history: [
    {
      squares: Array(400).fill(null),
      x: null,
      y: null,
    },
  ],
  xIsNext: true,
  stepNumber: 0,
  winner: null,
  result: null,
  display: null,
};

const reducer = (state = initialStates, action) => {
  switch (action.type) {
    case types.CLICK_PLAY_AGAIN:
      return {
        ...state,
        history: [
          {
            squares: Array(400).fill(null),
            x: null,
            y: null,
          },
        ],
        xIsNext: true,
        stepNumber: 0,
        winner: null,
        result: null,
        display: null,
      };
    default:
      return state;
  }
};

export default reducer;
