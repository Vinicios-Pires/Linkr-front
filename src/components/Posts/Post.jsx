import {
  PostHeader,
  PostWrapper,
  LikesWrapper,
  BottomWrapper,
  ButtonsWrapper,
  TextWrapper,
  ModalStyle,
} from "./styles";
import Link from "./Link";
import { AiOutlineHeart, AiFillHeart, AiFillDelete, AiOutlineEdit } from "react-icons/ai";
import axios from "axios";
import { useContext, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/user.context";
import ReactTooltip from "react-tooltip";
import Modal from "react-modal";
import DeletePost from "../DeletePost";

Modal.setAppElement("#root");

export default function Post({
  pictureUrl,
  username,
  description,
  linkData,
  userHasLiked,
  likes,
  postId,
  authorId,
}) {
  const navigate = useRef(useNavigate());
  const { userToken, userInfo } = useContext(UserContext);

  const [isLiked, setIsLiked] = useState(userHasLiked);
  const [numberOfLikes, setNumberOfLikes] = useState(likes.length);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const goToUserProfile = () => {
    navigate.current(`/user/${authorId}`);
  };

  const handleLike = () => {
    const likeAction = userHasLiked ? "dislike" : "like";
    const config = {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    };
    axios
      .post(`${process.env.REACT_APP_API_URL}/posts/${postId}/${likeAction}`, {}, config)
      .then(() => {
        setNumberOfLikes(isLiked ? numberOfLikes - 1 : numberOfLikes + 1);
        setIsLiked(!isLiked);
      })
      .catch(console.dir);
  };

  const formatLikesMessage = () => {
    const likedBy = likes.filter((username) => username !== userInfo.username);
    if (isLiked) likedBy.unshift("Você");

    let likesMessage = "";
    if (likedBy.length > 0) likesMessage = likedBy[0].toString();
    if (likedBy.length > 1) likesMessage = likesMessage + `, ${likedBy[1]}`;
    if (likedBy.length > 2)
      likesMessage = likesMessage + `and other ${likes.length - 1} people`;

    return likesMessage;
  };

  const currentUserIsAuthor = authorId === userInfo.id;

  return (
    <PostWrapper>
      <PostHeader>
        <img onClick={goToUserProfile} src={pictureUrl} alt="avatar" />
        <TextWrapper>
          <h1 onClick={goToUserProfile}>{username}</h1>
          <h3>{description}</h3>
        </TextWrapper>
        {currentUserIsAuthor && (
          <ButtonsWrapper>
            <AiOutlineEdit />
            <AiFillDelete onClick={() => setModalIsOpen(true)} />
          </ButtonsWrapper>
        )}
        <Modal isOpen={modalIsOpen} style={ModalStyle} contentLabel="Modal">
          <DeletePost postId={postId} closeModal={() => setModalIsOpen(false)} />
        </Modal>
      </PostHeader>
      <BottomWrapper>
        <LikesWrapper isLiked={isLiked}>
          {isLiked ? (
            <AiFillHeart onClick={handleLike} />
          ) : (
            <AiOutlineHeart onClick={handleLike} />
          )}
          <h3 data-tip={formatLikesMessage()}>{numberOfLikes} Likes</h3>
          <ReactTooltip place="bottom" type="light" effect="solid" />
        </LikesWrapper>
        <Link linkData={linkData} />
      </BottomWrapper>
    </PostWrapper>
  );
}
