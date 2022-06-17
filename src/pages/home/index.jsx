import React, { useEffect, useRef } from "react";
import * as S from "../../styles/global.style";
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";

import Header from "../../components/header.js";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useRef(useNavigate());
  const { userToken } = useContext(UserContext);

  useEffect(() => {
    if (!userToken) navigate.current("/");
  }, [userToken]);

  return (
    <>
      <Header />
      <S.Body>
        <h1>TESTE</h1>
      </S.Body>
    </>
  );
}
