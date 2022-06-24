import { useContext, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/user.context";

import Header from "../../components/header.js";
import PostsHashtag from "../../components/PostsUser/hashtag.posts.jsx";
import Trending from "../../components/trending";

import * as S from "../../styles/global.style";
import { Div, TimelineHeader } from "./style";

export default function HomePage() {
  const navigate = useRef(useNavigate());
  const { userToken } = useContext(UserContext);

  useEffect(() => {
    if (!userToken) navigate.current("/");
    // if(!userToken) console.log("no token");
  }, [userToken]);

  return (
    <>
      <Header />
      {/* <FormWrapper> */}
      <S.Body>
        <S.ContentWrapper>
          <S.PostsWrapper>
            <Div>
              <TimelineHeader>Hashtag</TimelineHeader>
            </Div>
            <PostsHashtag />
          </S.PostsWrapper>
          <S.TrendWrapper>
          <Trending/>
        </S.TrendWrapper>
        </S.ContentWrapper>
      </S.Body>
      {/* </FormWrapper> */}
    </>
  );
}
