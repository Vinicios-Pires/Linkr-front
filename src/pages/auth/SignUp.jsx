import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export default function SignUp() {
  const { userInfo } = useContext(UserContext);

  return <div>{`SignUp pages, token is: ${userInfo?.token}`}</div>;
}
