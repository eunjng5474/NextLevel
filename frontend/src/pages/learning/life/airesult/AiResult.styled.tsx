import styled from "styled-components";

const AiResult = styled.div`
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid ${(props) => props.theme.colors.white};
  display: flex;
`;

const AiResultButtonContainer = styled.button`
  /* border: 1px solid red; */
  margin-right: 5px;
  background-color: ${(props) => props.theme.colors.main};
  border: none;
`;

const AiResultButton = styled.img`
  /* border: 1px solid pink; */
  height: 30px;
`;

export { AiResult, AiResultButtonContainer, AiResultButton };
