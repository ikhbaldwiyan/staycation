import { CHECKOUT_BOOKING } from "../types";

const initialState = {
  date: {
    startDate: new Date(),
    endDate: new Date(),
  },
  duration: "1",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CHECKOUT_BOOKING:
      return action.payload;
    default:
      return state;
  }
}
