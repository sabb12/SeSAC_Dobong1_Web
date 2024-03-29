const DEPOSIT = "bank/DEPOSITE";
const WITHDRAW = "bank/wiTHDRAW";

export const deposit = (payload) => ({ type: DEPOSIT, payload: payload });

export const withdraw = (payload) => {
  return { type: WITHDRAW, payload: payload };
};

const initialState = 0;
export const bankReducer = (state = initialState, action) => {
  switch (action.type) {
    case DEPOSIT:
      return state + action.payload;
    case WITHDRAW:
      return state - action.payload;
    default:
      return state;
  }
};
