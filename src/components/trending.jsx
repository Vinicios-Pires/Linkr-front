// import { useRef } from "react";
// import { useNavigate } from "react-router-dom";
import * as S from "../styles/global.style"


export default function Trending () {

    // const navigate = useRef(useNavigate());

    return (
        <S.TrendingBox>
        <S.Title>trending</S.Title>

            {/* <S.Trends onClick={() => navigate()}> */}
            <S.Trends># Hashtag</S.Trends>
            <S.Trends># Hashtag</S.Trends>
            <S.Trends># Hashtag</S.Trends>
            <S.Trends># Hashtag</S.Trends>
            <S.Trends># Hashtag</S.Trends>

          {/* <S.ErrorLoadTrendsMessage>
            <p>There are no hashtags yet.</p>
          </S.ErrorLoadTrendsMessage> */}
      </S.TrendingBox>
    )
}
