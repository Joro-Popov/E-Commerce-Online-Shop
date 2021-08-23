import styled from 'styled-components';
import Button from "@material-ui/core/Button";
import { styled as MUIStyled } from "@material-ui/core/styles";


export const ButtonContainer = MUIStyled(Button)({
  marginTop: "auto",
  backgroundColor: "black",
  color: "white",
  "&:hover": {
    backgroundColor: "white",
    color: "black",
  },
});

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
`;

export const CartItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

export const EmptyMessageContainer = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;
