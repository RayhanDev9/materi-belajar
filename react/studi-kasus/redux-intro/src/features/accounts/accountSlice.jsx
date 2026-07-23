import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blance: 0,
  loan: 0,
  loanPurpose: "",
  isLoading: false,
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    blance(state, action) {
      state.blance += action.payload;
      state.isLoading = false;
    },
    withdraw(state, action) {
      state.blance -= action.payload;
    },
    requestLoan: {
      prepare(amount, purpose) {
        return {
          payload: {
            amount,
            purpose,
          },
        };
      },
      reducer(state, action) {
        console.info(action);
        console.info(action.payload);
        if (state.loan > 0) return;
        ((state.loan = action.payload.amount),
          (state.blance += action.payload.amount),
          (state.loanPurpose = action.payload.purpose));
      },
    },
    payLoan(state) {
      ((state.blance -= state.loan),
        ((state.loan = 0), (state.loanPurpose = "")));
    },
    convertingCurrency(state) {
      console.info(state);
      state.isLoading = true;
    },
  },
});

console.info(accountSlice);

export const { withdraw, requestLoan, payLoan } = accountSlice.actions;

export function blance(amount, currency) {
  if (currency === "USD") return { type: "account/blance", payload: amount };

  return async function (dispatch, getState) {
    // API call
    const res = await fetch(
      `https://api.frankfurter.dev/v1/latest?amount=${amount}&base=${currency}&symbols=USD`,
    );

    const data = await res.json();
    console.info(data);
    const converted = data.rates.USD;

    dispatch({ type: "account/convertingCurrency", payload: converted });
    dispatch({ type: "account/blance", payload: converted });
  };
}

export default accountSlice.reducer;

// export default function accountReducer(state = initialStat, action) {
//   switch (action.type) {
//     case "account/blance":
//       return {
//         ...state,
//         blance: state.blance + action.payload,
//         isLoading: false,
//       };
//     case "account/withdraw":
//       return { ...state, blance: state.blance - action.payload };
//     case "account/requestLoan":
//       if (state.loan > 0) return;
//       return {
//         ...state,
//         loan: action.payload.amount,
//         blance: state.blance + action.payload.amount,
//         loanPurpose: action.payload.purpose,
//       };
//     case "account/payLoan":
//       return {
//         ...state,
//         loan: 0,

//         loanPurpose: "",
//         blance: state.blance - state.loan,
//       };
//     case "account/convertingCurrency":
//       return { ...state, isLoading: true };

//     default:
//       return state;
//   }
// }

// export function blance(amount, currency) {
//   if (currency === "USD") return { type: "account/blance", payload: amount };

//   return async function (dispatch, getState) {
//     // API call
//     const res = await fetch(
//       `https://api.frankfurter.dev/v1/latest?amount=${amount}&base=${currency}&symbols=USD`,
//     );

//     const data = await res.json();
//     console.info(data);
//     const converted = data.rates.USD;

//     dispatch({ type: "account/convertingCurrency", payload: converted });
//     dispatch({ type: "account/blance", payload: converted });
//   };
// }

// export function withdraw(amount) {
//   return { type: "account/withdraw", payload: amount };
// }

// export function requestLoan(amount, purpose) {
//   return {
//     type: "account/requestLoan",
//     payload: { amount, purpose },
//   };
// }

// export function payLoan() {
//   return { type: "account/payLoan" };
// }
