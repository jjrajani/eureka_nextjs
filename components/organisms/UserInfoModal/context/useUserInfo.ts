import { useCallback, useState } from "react";
import { UserFormState } from "types/types";

export interface UseUserInfo {
  didSubmit: boolean;
  setValues: (vals: UserFormState) => void;
  values: UserFormState;
}

const useUserInfo = (): UseUserInfo => {
  const [values, _setValues] = useState<UserFormState>({
    email: "",
    first: "",
    last: "",
  });
  const [didSubmit, setDidSubmit] = useState(false);

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
