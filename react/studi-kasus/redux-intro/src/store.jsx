import { combineReducers, createStore } from "redux";

const initialStateAccount = {
  blance: 0,
  loan: 0,
  loanPurpose: "",
};

const initialStateCustomer = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};

function accountReducer(state = initialStateAccount, action) {
  switch (action.type) {
    case "account/blance":
      return { ...state, blance: state.blance + action.payload };
    case "account/withdraw":
      return { ...state, blance: state.blance - action.payload };
    case "account/requestLoan":
      if (state.loan > 0) return;
      return {
        ...state,
        loan: action.payload.amount,
        blance: state.blance + action.payload.amount,
        loanPurpose: action.payload.purpose,
      };
    case "account/payLoan":
      return {
        ...state,
        loan: 0,

        loanPurpose: "",
        blance: state.blance - state.loan,
      };

    default:
      return state;
  }
}

function customerReducer(state = initialStateCustomer, action) {
  switch (action.type) {
    case "customer/createCustomer":
      console.info(action);
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalID: action.payload.nationalID,
        createdAt: action.payload.createdAt,
      };
    case "customer/updateName":
      return {
        ...state,
        fullName: action.payload,
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(rootReducer);

// store.dispatch({ type: "account/blance", payload: 500 });
// store.dispatch({ type: "account/withdraw", payload: 200 });
// console.info(store.getState());

// store.dispatch({
//   type: "account/requestLoan",
//   payload: { amount: 200, purpose: "Buy car" },
// });
// console.info(store.getState());

// store.dispatch({ type: "account/payLoan" });
// console.info(store.getState());

function blance(amount) {
  return { type: "account/blance", payload: amount };
}

store.dispatch(blance(500));
console.info(store.getState());

function withdraw(amount) {
  return { type: "account/withdraw", payload: amount };
}
store.dispatch(withdraw(500));
console.info(store.getState());

function requestLoan(amount, purpose) {
  return {
    type: "account/requestLoan",
    payload: { amount, purpose },
  };
}
store.dispatch(requestLoan(500, "Buy car"));
console.info(store.getState());

function payLoan() {
  return { type: "account/payLoan" };
}
store.dispatch(payLoan());
console.info(store.getState());

function createCustomer(fullName, nationalID) {
  console.info(fullName)
  return {
    type: "customer/createCustomer",
    payload: { fullName, nationalID, createdAt: new Date().toISOString() },
  };
}

store.dispatch(createCustomer("Muhamad Rayhan",12334));
console.info(store.getState());

function updateName(fullName) {
  return {
    type: "customer/updateName",
    payload: fullName,
  };
}


