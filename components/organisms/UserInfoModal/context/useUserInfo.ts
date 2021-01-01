import { useCallback, useState } from "react";
import { UserFormState } from "types/types";

export interface UseUserInfo {
  didSubmit: boolean;
  setValues: (vals: UserFormState) => void;
  values: UserFormState;
}

const useUserInfo = (): UseUserInfo => {
  const [values, _setValues] = useState<UserFormState>({
    email: "test@place.com",
    first: "test",
    last: "test",
  });
  const [didSubmit, setDidSubmit] = useState(true);
  // const [didSubmit, setDidSubmit] = useState(false);

  const setValues = useCallback(
    (vals: UserFormState) => {
      _setValues(vals);
      setDidSubmit(true);
    },
    [_setValues]
  );

  return {
    didSubmit,
    setValues,
    values,
  };
};

export default useUserInfo;
