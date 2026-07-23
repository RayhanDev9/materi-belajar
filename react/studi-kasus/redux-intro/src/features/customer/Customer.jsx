import { useSelector } from "react-redux";
import store from "../../store-v1";

function Customer() {
  const customer = useSelector((store) => store.customer.fullName);
  return <h2>👋 Welcome, {customer}</h2>;
}

export default Customer;
