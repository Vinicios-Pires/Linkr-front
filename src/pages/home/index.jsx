import { useContext, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/user.context";

import Header from "../../components/header.js";
import PostForm from "../../components/PostForm/PostForm";
import Posts from "../../components/Posts/Posts";
import Trending from "../../components/trending";

// import { FormWrapper } from "../../styles/form.style";
import * as S from "../../styles/global.style";
import { Div, TimelineHeader } from "./style";

export default function HomePage() {
  const navigate = useRef(useNavigate());
  const { userToken } = useContext(UserContext);

  useEffect(() => {
    // if (!userToken) navigate.current("/");
    if (!userToken) console.log("no token");
  }, [userToken]);

  return (
    <>
      <Header />
      {/* <FormWrapper> */}
        <S.Body>
        <S.ContentWrapper>
        <S.MainContentWrapper>
          <Div>
            <TimelineHeader>timeline</TimelineHeader>
          </Div>
          <PostForm />
          <Posts />
          </S.MainContentWrapper>
          <S.SecondaryContentWrapper>
          <Trending></Trending>
        </S.SecondaryContentWrapper>
        </S.ContentWrapper>
        </S.Body>
      {/* </FormWrapper> */}
    </>
  );
}

