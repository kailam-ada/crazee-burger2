import { useState } from "react";
import styled from "styled-components";
import { fakeMenu2 } from "../../../../fakeData/fakeMenu";
import { theme } from "../../../../theme";
import Product from "./Product";

export default function Menu() {
  const [menu, setMenu] = useState(fakeMenu2);
  return (
    <MenuStyled className="menu">
      {menu.map((produit) => {
        return (
          <Product
            imageSource={produit.imageSource}
            price={produit.price}
            title={produit.title}
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

  .produit {
    background: red;
    width: 240px;
    height: 330px;

    .image {
      border: 1px solid fuchsia;
      width: 200px;
      height: 145px;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .description {
      border: 1px solid fuchsia;
    }
  }
`;
