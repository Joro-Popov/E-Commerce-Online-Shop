import styled from 'styled-components';
import Button from "@material-ui/core/Button";
import { styled as MUIStyled } from "@material-ui/core/styles";

export const CollectionItemContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  &:hover {
    .image {
      opacity: 0.8;
    }
    .button {
      display: flex;
      opacity: 0.85;
    }
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
`;

export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const NameContainer = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const PriceContainer = styled.span`
  width: 10%;
`;

export const ButtonContainer = MUIStyled(Button)({
  width: "80%",
  opacity: 0.7,
  position: "absolute",
  bottom: "50px",
  backgroundColor: "white",
  color: "black",
  display: "none",
  "&:hover": {
    backgroundColor: "black",
    color: "white",
  },
});