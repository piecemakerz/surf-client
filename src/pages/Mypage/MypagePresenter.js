import React from "react";
import styled from "@emotion/styled";
import { size } from "../../constants/DiviceSize";
import UserFeatures from "../../components/UserFeature";
import UserInfo from "../../components/UserInfo";

const MypageWrap = styled.section`
  width: 1250px;
  display: flex;
  flex-direction: column;
  margin: 160px auto;
  @media (max-width: 1300px) {
    width: 1100px;
  }

  @media (max-width: ${size.laptop}) {
    width: 100%;
    margin-right: 0;
  }

  @media (max-width: ${size.tablet}) {
    margin-right: 0;
    width: 100%;
  }
`;
const MypageLabel = styled.label`
  font-size: 2rem;
  color: #343a40;
  border-bottom: 3px solid #343a40;
  width: fit-content;
  padding-bottom: 4px;
  font-weight: 600;
  margin-bottom: 2.4rem;

  @media (max-width: ${size.laptop}) {
    font-size: 1.5rem;
  }
  @media (max-width: ${size.tablet}) {
    font-size: 1.2rem;
    margin-bottom: 1.6rem;
  }
`;
const UserInfoWrap = styled.section`
  background: #f8f9fa;
  width: 100%;
  margin-bottom: 2.5rem;
  border: none;
  box-shadow: #dee2e6 0 2px 6px;
  border-radius: 6px;

  // display
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: start;

  @media (max-width: 1300px) {
    flex-direction: column;
    justify-content: center;
    height: 100%;
  }
`;

export default function MypagePresenter({ userData, changeImgApi }) {
  return (
    <MypageWrap>
      <MypageLabel>마이페이지</MypageLabel>
      <UserInfoWrap>
        <UserInfo userData={userData} changeImgApi={changeImgApi} />
        <UserFeatures userData={userData} />
      </UserInfoWrap>
    </MypageWrap>
  );
}