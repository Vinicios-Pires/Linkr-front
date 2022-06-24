import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "../styles/global.style";

import { TrendingContext } from "../contexts/trending.context.jsx";
import { UserContext } from "../contexts/user.context.jsx";

export default function Trending() {
  const { trending, getTrending } = useContext(TrendingContext);
  const { userToken } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userToken) navigate.current("/");
    else getTrending();
  }, [userToken]);


  return (
    <S.TrendingBox>
      <S.Title>trending</S.Title>

      {trending.map(({ id, name }) => (
        <S.Trends
          key={id}
          onClick=
          {async () => {
            navigate(`/hashtag/${name}`);
          }}
          > # {name}
        </S.Trends>
      ))}

    </S.TrendingBox>
  );
}
