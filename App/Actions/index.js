import { DATA_AVAILABLE } from "../constants/action-types";

import Data from "../instructions";

export function getData() {
  return dispatch => {
    setTimeout(() => {
      const data = Data.instructions;
      dispatch(
        {
          type: DATA_AVAILABLE,
          data: data
        },
        2000
      );
    });
  };
}
