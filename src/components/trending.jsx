// import { useRef } from "react";
// import { useNavigate } from "react-router-dom";
import * as S from "../styles/global.style"

export default function Trending () {

    // const navigate = useRef(useNavigate());

    return (
        <S.TrendingBox>
        <S.Title>PXP</S.Title>

            {/* <S.Trends onClick={() => navigate()}> */}
            <S.Trends># PIMPE</S.Trends>
            <S.Trends># FELICAO</S.Trends>
            <S.Trends># GI</S.Trends>
            <S.Trends># WENDS</S.Trends>
            <S.Trends># LUCÃO</S.Trends>
            <S.Trends># JUAN</S.Trends>
            <S.Trends># BODONES</S.Trends>

          {/* <S.ErrorLoadTrendsMessage>
            <p>There are no hashtags yet.</p>
          </S.ErrorLoadTrendsMessage> */}
      </S.TrendingBox>
    )
}
