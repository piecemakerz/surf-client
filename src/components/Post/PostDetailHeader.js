import React, { useState } from "react";
import styled from "@emotion/styled";
import { AiFillHeart } from "react-icons/ai";
import { sendLike } from "../../postApi";
import { useSelector } from "react-redux";

const DetailImgWrap = styled.div`
  position: relative;
  width: 100%;

  box-shadow: #495057 0 2px 3px;
  border: none;
  border-radius: 8px 8px 0 0;
  background: none;
  @media (max-width: 1300px) {
    border-radius: 0;
  }
`;
const DetailImg = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
  @media (max-width: 1300px) {
    border-radius: 0;
  }
`;
const LikeButton = styled.button`
  width: 48px;
  height: 48px;
  background: none;
  text-align: center;
  line-height: 1;
  opacity: 0.9;
  border-radius: 50%;
  font-size: 2.5rem;
  cursor: pointer;
  border: none;

  z-index: 1;
  position: absolute;
  top: 85%;
  left: 94%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);

  &:focus {
    outline: none;
  }

  svg {
    color: ${props => (props.like ? "#c92a2a" : "#ffa8a8")};
    transition: all ease 0.5s;
    &:focus {
      outline: none;
    }
    &:hover {
      transform: scale(1.3);
      color: #c92a2a;
    }
  }
`;

export default function PostDetailHeader({ postData }) {
  const login = useSelector(state => state.signIn);

  const [like, setLike] = useState(false);

  const handleImageLoadFailure = e => {
    e.target.src = "/images/no_image_indicator.png";
  };

  const id = postData.id;
  const handleClickLike = () => {
    if (!like) {
      setLike(prev => !prev);
      sendLike(id);
    }
  };
  return (
    <DetailImgWrap>
      <DetailImg
        src={postData.title_image}
        alt={postData.title}
        onError={handleImageLoadFailure}
      />
      {login.isSignIn ? (
        like || postData.liked ? (
          <LikeButton like="like">
            <AiFillHeart />
          </LikeButton>
        ) : (
          <LikeButton onClick={handleClickLike}>
            <AiFillHeart />
          </LikeButton>
        )
      ) : null}
    </DetailImgWrap>
  );
}

// 클릭 되지 않은 상태에서만 api 호출할 수 있도록 처리
// 로그인 상태인지 확인하고 like button 조건부 랜더링
