import { useState } from "react";
import styled from "styled-components";
import { fakeMenu2 } from "../../../../fakeData/fakeMenu";
import { theme } from "../../../../theme";
import Product from "./Product";

export default function Menu() {
  const [menu, setMenu] = useState(fakeMenu2);
  return (
    <MenuStyled className="menu">
      {menu.map(({ id, title, imageSource, price }) => {
        return (
          <Product
            key={id}
            title={title}
            imageSource={imageSource}
            leftDescription={price}
          />
        );
      })}
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  background: ${theme.colors.background_white};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  padding: 50px 50px 150px;
  display: grid;
  grid-row-gap: 60px;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
`;
