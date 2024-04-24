import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./features/accountSlice";
import customerReducer from "./features/customerSlice";

const store = configureStore({
  reducer: {
    account: accountReducer,
    customer: customerReducer,
  },
});

export default store;
//{account:account}  //{account}
