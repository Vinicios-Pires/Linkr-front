import styled from "styled-components";
import { Link } from "react-router-dom";


const StyledLink = styled(Link) `
    text-decoration: none;
`;

const Post = styled.div`
    display:flex;
    height: 276px;
    width: 611px;
    border-radius: 16px;
    background-color:#171717;  
    border-radius: 16px;
    margin-bottom: 16px;
    padding: 18px;
`;  
    
const Typography = styled.span`
    font-size:17px;
    color: #7B7B7B
`;

export {
    StyledLink,
    Post,
    Typography
}