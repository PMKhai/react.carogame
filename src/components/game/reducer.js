import * as types from './constant';

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
  user: null,
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
    case types.CLICK_SQUARE:
      const { stepNumber } = state;
      const { history } = state;
      const { winner } = state;
      const { xIsNext } = state;

      const histories = history.slice(0, stepNumber + 1);
      const current = histories[histories.length - 1];
      const squares = current.squares.slice();
      const i = action.index;

      if (winner || squares[i]) {
        return state;
      }
      squares[i] = xIsNext ? 'X' : 'O';

      let newState = {
        ...state,
        history: histories.concat([
          {
            squares,
            x: Math.floor(i / 20 + 1),
            y: (i % 20) + 1,
          },
        ]),
        xIsNext: !xIsNext,
        stepNumber: histories.length,
        display: null,
      };

      const winners = calculateWinner(squares, i);
      if (winners) {
        newState = { ...newState, winner: winners[0], result: winners[1] };
      }
      return newState;
    case types.JUMP_TO:
      const { step } = action;
      console.log(step);
      return {
        ...state,
        stepNumber: step,
        xIsNext: step % 2 === 0,
        display: step,
      };
    case types.FETCH_USER:
      return { ...state, user: action.userInfo };
    default:
      return state;
  }
};

const calculateWinner = (squares, index) => {
  const lines = [
    [
      index - 4,
      index - 3,
      index - 2,
      index - 1,
      index,
      index + 1,
      index + 2,
      index + 3,
      index + 4,
    ],
    [
      index - 80,
      index - 60,
      index - 40,
      index - 20,
      index,
      index + 20,
      index + 40,
      index + 60,
      index + 80,
    ],
    [
      index - 80 - 4,
      index - 60 - 3,
      index - 40 - 2,
      index - 20 - 1,
      index,
      index + 20 + 1,
      index + 40 + 2,
      index + 60 + 3,
      index + 80 + 4,
    ],
    [
      index + 80 - 4,
      index + 60 - 3,
      index + 40 - 2,
      index + 20 - 1,
      index,
      index - 20 + 1,
      index - 40 + 2,
      index - 60 + 3,
      index - 80 + 4,
    ],
  ];

  const result = [];
  for (let i = 0; i < 9; i += 1) {
    const [a, b, c, d, e] = [
      lines[0][i],
      lines[0][i + 1],
      lines[0][i + 2],
      lines[0][i + 3],
      lines[0][i + 4],
    ];
    const checkRow = checkRim([a, b, c, d]);
    if (
      squares[a] &&
      squares[a] === squares[b] &&
      squares[b] === squares[c] &&
      squares[c] === squares[d] &&
      squares[d] === squares[e] &&
      checkRow &&
      (squares[a - 1] === squares[a] ||
        squares[a - 1] === null ||
        squares[a - 1] === undefined ||
        squares[e + 1] === squares[a] ||
        squares[e + 1] === null ||
        squares[e + 1] === undefined)
    ) {
      result.push(squares[a]);
      result.push([a, b, c, d, e]);
      return result;
    }

    const [aa, bb, cc, dd, ee] = [
      lines[1][i],
      lines[1][i + 1],
      lines[1][i + 2],
      lines[1][i + 3],
      lines[1][i + 4],
    ];
    if (
      squares[aa] &&
      squares[aa] === squares[bb] &&
      squares[bb] === squares[cc] &&
      squares[cc] === squares[dd] &&
      squares[dd] === squares[ee] &&
      (squares[aa - 20] === squares[aa] ||
        squares[aa - 20] === null ||
        squares[aa - 20] === undefined ||
        squares[ee + 20] === squares[aa] ||
        squares[ee + 20] === null ||
        squares[ee + 20] === undefined)
    ) {
      result.push(squares[aa]);
      result.push([aa, bb, cc, dd, ee]);
      return result;
    }

    const [aaa, bbb, ccc, ddd, eee] = [
      lines[2][i],
      lines[2][i + 1],
      lines[2][i + 2],
      lines[2][i + 3],
      lines[2][i + 4],
    ];
    if (
      squares[aaa] &&
      squares[aaa] === squares[bbb] &&
      squares[bbb] === squares[ccc] &&
      squares[ccc] === squares[ddd] &&
      squares[ddd] === squares[eee] &&
      checkRow &&
      (squares[aaa - 20 - 1] === squares[aaa] ||
        squares[aaa - 20 - 1] === null ||
        squares[aaa - 20 - 1] === undefined ||
        squares[eee + 20 + 1] === squares[aaa] ||
        squares[eee + 20 + 1] === null ||
        squares[eee + 20 + 1] === undefined)
    ) {
      result.push(squares[aaa]);
      result.push([aaa, bbb, ccc, ddd, eee]);
      return result;
    }

    const [aaaa, bbbb, cccc, dddd, eeee] = [
      lines[3][i],
      lines[3][i + 1],
      lines[3][i + 2],
      lines[3][i + 3],
      lines[3][i + 4],
    ];
    if (
      squares[aaaa] &&
      squares[aaaa] === squares[bbbb] &&
      squares[bbbb] === squares[cccc] &&
      squares[cccc] === squares[dddd] &&
      squares[dddd] === squares[eeee] &&
      checkRow &&
      (squares[aaaa + 20 - 1] === squares[aaaa] ||
        squares[aaaa + 20 - 1] === null ||
        squares[aaaa + 20 - 1] === undefined ||
        squares[eeee - 20 + 1] === squares[aaaa] ||
        squares[eeee - 20 + 1] === null ||
        squares[eeee - 20 + 1] === undefined)
    ) {
      result.push(squares[aaaa]);
      result.push([aaaa, bbbb, cccc, dddd, eeee]);
      return result;
    }
  }
  return null;
};

const checkRim = (arr) => {
  if (arr[0] % 10 === 9 && Math.floor(arr[0] / 10) % 2 === 1) return false;
  if (arr[1] % 10 === 9 && Math.floor(arr[1] / 10) % 2 === 1) return false;
  if (arr[2] % 10 === 9 && Math.floor(arr[2] / 10) % 2 === 1) return false;
  if (arr[3] % 10 === 9 && Math.floor(arr[3] / 10) % 2 === 1) return false;
  return true;
};

export default reducer;
