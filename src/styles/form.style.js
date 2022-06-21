import styled from "styled-components";
import theme from "./theme";
// SIGN UP AND IN
export const FormWrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  @media (max-width: ${({ theme }) => theme.breakPoints.laptop}) {
    flex-direction: column;
  }
`;

//POST POSTS
export const FormWrapper2 = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: clamp(350px, 100%, 611px);
  height: 209px;
  color: ${({ theme }) => theme.colors.secondary};
  background-color: ${({ theme }) => theme.colors.postBackground};

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  p{
    font: ${({ theme }) => theme.fonts.mainFont};
    font-size: ${({ theme }) => theme.fontSize.sm};
    width: clamp(350px, 100%, 445px);
    margin-left: 15px;
    margin-top: -20px;
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.laptop}) {
    flex-direction: column;
  }
`;

export const ImgTitleWrapper = styled.div`
position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  top: 35px;
  left: 20px;
  `;

export const FormBanner = styled.section`
  display: flex;
  flex-direction: column;

  color: ${({ theme }) => theme.colors.secondary};
  background: ${({ theme }) => theme.colors.main};
  box-shadow: ${({ theme }) => theme.shadow.gray};
  height: 100vh;
  width: 90%;
  font-family: ${({ theme }) => theme.fonts.logoFont};

  div {
    margin-top: 20%;
    margin-left: 15%;
    h1 {
      font-size: ${({ theme }) => theme.fontSize.xl};
      margin-bottom: 1rem;
    }
    h4 {
      font-size: ${({ theme }) => theme.fontSize.md};
      width: clamp(30%, 330px, 80vw);
    }
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.laptop}) {
    height: 30vh;
    width: 100%;
    div {
      margin: auto auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      h1 {
        font-size: ${({ theme }) => theme.fontSize.lg};
        margin-bottom: 0;
      }
      h4 {
        text-align: center;
        font-size: ${({ theme }) => theme.fontSize.sm};
        width: clamp(30%, 330px, 60vw);
      }
    }
  }
`;

const inputHeight = "3rem";
const inputWidth = "80%";

export const Form = styled.form`

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  margin: 25px 25px;
  padding-left: 70px;
  padding-right: 30px;
  height: 142px;
  width: clamp(350px, 100%, 600px);

  @media (max-width: ${({ theme }) => theme.breakPoints.laptop}) {
    heigth: 100vh;
  }

  input {
    width: clamp(350px, 100%, 503px);

    :first-child{
      height: 30px;
    }
    :last-child{
      height: 66px;
    }

    margin-right: 30px;
    margin-left: 10px;

    padding: 1rem;

    font-family: ${({ theme }) => theme.fonts.logoFont};
    font-size: ${({ theme }) => theme.fontSize.sm};
    border-radius: ${({ theme }) => theme.borderRadius.sm};
    border: none;
    background: ${({ theme }) => theme.colors.inputBackground};

    &::placeholder {
      color: ${({ theme }) => theme.colors.text2};
    }
  }

  button {
    position: relative;
    right: -192px;
    margin-right: 30px;

    width: 112px;
    height: 31px;
    cursor: pointer;

    font-family: ${({ theme }) => theme.fonts.logoFont};
    font-size: ${({ theme }) => theme.fontSize.sm};
    border-radius: ${({ theme }) => theme.borderRadius.sm};
    border: none;
    background: ${({ theme }) => theme.colors.buttonBackground};
    color: ${({ theme }) => theme.colors.secondary};
  }

  a {
    color: ${({ theme }) => theme.colors.secondary};
    font-size: ${({ theme }) => theme.fontSize.xs};
    text-decoration: underline;
    cursor: pointer;
    margin: 10px;
  }
`;
