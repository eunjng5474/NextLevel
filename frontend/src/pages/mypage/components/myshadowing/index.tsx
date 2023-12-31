import { useDramaResultGetHook } from "@/hooks/mypage/useDramaResultGetHook";
import React, { useEffect } from "react";
import {
  StyledClipContainer,
  StyledClipBox,
  StyledImageBox,
  StyledImage,
  StyledContentContainer,
  StyledTtile,
  StyledClipButton,
  StyledTextContainer,
  StyledArtist,
} from "./MyShadowing.styled";
import { useNavigate } from "react-router-dom";
import { S3_ADDRESS } from "@/api/api";
import { useTranslation } from "react-i18next";
const MyShadowing = (props: any) => {
  const { t } = useTranslation();
  const { result, getDramaResult } = useDramaResultGetHook();
  const navigate = useNavigate();
  useEffect(() => {
    getDramaResult();
  }, []);

  const handleModal = (clip: any) => {
    props.openModal();
    props.setMedia({
      id: clip.id,
      url: clip.image,
      title: clip.title,
      type: clip.problemType,
    });
  };

  return (
    <StyledClipContainer>
      {result?.map((clip: any) => {
        return (
          <StyledClipBox key={clip.id} onClick={() => handleModal(clip)}>
            <StyledImageBox>
              <StyledImage src={S3_ADDRESS + clip.image}></StyledImage>
            </StyledImageBox>
            <StyledContentContainer>
              <StyledTextContainer>
                <StyledTtile>{clip.title}</StyledTtile>
                <StyledArtist>최근 학습 날짜 : {clip.date}</StyledArtist>
              </StyledTextContainer>
              <StyledClipButton>{t("mypage.learn")}</StyledClipButton>
            </StyledContentContainer>
          </StyledClipBox>
        );
      })}
    </StyledClipContainer>
  );
};
export default MyShadowing;
