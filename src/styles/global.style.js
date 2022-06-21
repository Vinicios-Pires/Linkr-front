import styled from "styled-components";

export const Body = styled.main`
  /* display: flex; */
  width: 100%;
  margin: 0 auto;
  min-height: calc(100vh - ${({ theme }) => theme.spacing.headerHeight});
  margin-top: ${({ theme }) => theme.spacing.headerHeight};
  transition: all 300ms ease;

  @media (min-width: ${({ theme }) => theme.breakPoints.laptop}) {
    max-width: ${({ theme }) => theme.spacing.maxBodyWidth};
    margin-top: ${({ theme }) => theme.spacing.headerHeight};
  }
`

export const Header = styled.header`
  height: ${({ theme }) => theme.spacing.headerHeight};
  background-color: ${({ theme }) => theme.colors.main};
  color: ${({ theme }) => theme.colors.secondary};
  position: fixed;

  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  padding: 0;
  margin: 0;

  user-select: none;
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-family: ${({ theme }) => theme.fonts.logoFont};
    font-size: 49px;
    font-weight: 700;
    letter-spacing: 0.08em;
    padding-left: 20px;
  }
  nav {
    height: 100%;
    position: relative;
    padding-right: 20px;
    padding-left: 20px;

    ol {
      position: absolute;
      top: 0;
      right: 0;
      height: 100vw;
      width: 100vw;
      z-index: 2;
    }
    ul {
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 20px;
      list-style: none;
      z-index: 4;
      li {
        height: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        transition: filter 300ms;
        z-index: 5;

        svg {
          font-size: 22px;
          cursor: pointer;
        }
        img {
          height: 70%;
          margin: 0;
          border-radius: 50%;
          &:hover {
            filter: brightness(1.2);
          }
        }
      }
    }
  }
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: ${({ theme }) => theme.spacing.headerHeight};
  right: 0;
  width: 150px;
  border-radius: 0 0 0 20px;
  font-size: 18px;
  font-weight: 700;

  background-color: ${({ theme }) => theme.colors.main};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  span {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 90%;
    height: 90%;
    padding: 10px;
    margin: 5px;
    border-radius: 5px 5px 5px 5px;
    &:last-of-type {
      border-radius: 5px 5px 5px 15px;
    }
    cursor: pointer;
    transition: filter 300ms;
    &:hover {
      background-color: ${({ theme }) => theme.colors.main};
      filter: brightness(1.5);
    }
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  gap: 25px;
`

export const PostsWrapper = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
`
export const TrendWrapper = styled.div`
display: flex;
  justify-content: start;
  gap: 0.5rem;
  margin: 185px 0px auto 25px;

  flex-grow: 0;
  flex-shrink: 0;
  width: 301px;
  @media (max-width: ${({ theme }) => theme.breakPoints.laptop}) {
    display: none;
  }
`;

export const Trending = styled.div`
  background-color: ${({ theme }) => theme.colors.postBackground};
  height: 406px;
  width: 301px;
  left: 877px;
  top: 232px;
  border-radius: 16px;
`;

export const TrendingBox = styled.div`

  color: ${({ theme }) => theme.colors.secondary};
  background-color: ${({ theme }) => theme.colors.main};
  border-radius: 16px;
  width: 100%;
  height: auto;
  font-weight: 700;
  padding-bottom: 7px;
`;

export const Title = styled.div`
  font-size: 27px;
  line-height: 40px;
  border-bottom: 1px solid #484848;
  padding: 9px 0px 12px 16px;
`;

export const Trends = styled.div`
  font-size: 17px;
  margin: 10px 10px 0px 0px;
  padding: 0px 0px 10px 16px;
  letter-spacing: 0.05em;
  :hover {
    cursor: pointer;
    filter: brightness(0.9);
  }
`;

export const ErrorLoadTrendsMessage = styled.div`
  padding-left: 10px;
  background: none;
  margin-top: 0;
  width: 90%;
`;
