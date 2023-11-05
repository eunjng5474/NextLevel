import styled from "styled-components";
const StyledMyInfoContainer = styled.div`
  width: 100vw;
  height: 22vh;
  position: absolute;
  top: 20vh;
`;

const StyledMyInfoBox = styled.div`
  width: 85%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 10px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const StyledWelcomeBox = styled.div`
  display: flex;
  align-items: center;
`;
const StyledWelcome = styled.div`
  margin-top: 2vh;
  margin-left: 4vw;
  font-family: ${(props) => props.theme.fonts.semiboldfont};
  font-size: ${(props) => props.theme.fontsize.large};
`;

const StyledWelcomeIcon = styled.img`
  margin-top: 2vh;
  margin-left: 1vw;
  width: 18px;
  height: 18px;
`;

const StyledTierContainer = styled.div`
  margin-top: 3vh;
  margin-left: 4vw;
`;

const StyledTierBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5vh;
`;
const StyledTier = styled.img`
  width: 18px;
  height: 18px;
`;
const StyledTierName = styled.div`
  font-family: ${(props) => props.theme.fonts.semiboldfont};
  font-size: ${(props) => props.theme.fontsize.regular};
`;

const StyledProgressBarContainer = styled.div`
  display: flex;
  align-items: center;
`;
const StyledPrpgressBarInfo = styled.div`
  font-family: ${(props) => props.theme.fonts.semiboldfont};
  font-size: ${(props) => props.theme.fontsize.regular};
`;
export {
  StyledMyInfoContainer,
  StyledMyInfoBox,
  StyledWelcomeBox,
  StyledWelcome,
  StyledWelcomeIcon,
  StyledTierContainer,
  StyledTierBox,
  StyledTier,
  StyledTierName,
  StyledProgressBarContainer,
  StyledPrpgressBarInfo,
};
