import { useCallback, useState } from "react";

interface FormVals {
  email: string;
  first: string;
  last: string;
}

export interface UseUserInfo {
  didSubmit: boolean;
  setValues: (vals: FormVals) => void;
  values: FormVals;
}

const useUserInfo = (): UseUserInfo => {
  const [values, _setValues] = useState<FormVals>({
    email: "",
    first: "",
    last: "",
  });
  const [didSubmit, setDidSubmit] = useState(false);

  const setValues = useCallback(
    (vals: FormVals) => {
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
