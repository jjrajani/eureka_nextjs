import { createContext, ReactNode } from "react";
import useUserInfo, { UseUserInfo } from "components/organisms/UserInfoModal/context/useUserInfo";

const defaultValue: UseUserInfo = {
  didSubmit: false,
  setValues: () => {},
  values: {
    first: "",
    last: "",
    email: "",
  },
};

const UserInfoContext = createContext(defaultValue);

export const UserInfoContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const value = useUserInfo();

  return (
    <UserInfoContext.Provider value={value}>
      {children}
    </UserInfoContext.Provider>
  );
};

export default UserInfoContext;
