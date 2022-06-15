import { useContext } from "react";
import { UserContext } from "../contexts/user.context";
import SignPage from "../pages/auth/sign.page";

import Header from "../components/header.js";
import * as S from "../styles/global.style.js";

export default function HomePage() {
  const { userToken } = useContext(UserContext);

  return userToken ? (
    <>
      <Header />
      <S.Body>
        <h1>TESTE</h1>
      </S.Body>
    </>
  ) : (
    <SignPage isSignUp={false} />
  );
}
