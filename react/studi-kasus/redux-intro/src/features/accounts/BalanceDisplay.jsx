import { connect } from "react-redux";
// import { blance } from "./accountSlice";

function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function BalanceDisplay({ blance }) {
  return <div className="balance">{formatCurrency(blance )}</div>;
}

function mapStateToProps(state) {
  return {
    blance: state.account.blance,
  };
}

export default connect(mapStateToProps)(BalanceDisplay);
