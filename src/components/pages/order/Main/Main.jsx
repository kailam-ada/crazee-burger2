import styled from "styled-components";
import { theme } from "../../../../theme";
import Menu from "./Menu";

export default function Main() {
  return (
    <MainStyled className="main">
      {/* <div className="basket">Basket</div> */}
      <Menu />
    </MainStyled>
  );
}

const MainStyled = styled.div`
  background: ${theme.colors.background_white};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  flex: 1;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};

  display: grid;
  /* This code will be used later for Basket
  grid-template-columns: 25% 1fr; */
  grid-template-columns: 1fr;
  overflow-y: scroll;

  /* .basket {
    background: pink;
  } */
`;
