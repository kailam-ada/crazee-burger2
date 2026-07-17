import { useState } from "react";
import styled from "styled-components";
import { fakeMenu } from "../../../../fakeData/fakeMenu";
import { theme } from "../../../../theme";
import Card from "../../reusable-ui/Card";
import { formatPrice } from "../../../../utils/maths";

export default function Menu() {
  const [menu, setMenu] = useState(fakeMenu.MEDIUM);
  return (
    <MenuStyled className="menu">
      {menu.map(({ id, title, imageSource, price }) => {
        return (
          <Card
            key={id}
            title={title}
            imageSource={imageSource}
            leftDescription={formatPrice(price)}
          />
        );
      })}
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  background: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.strong};
  padding: 50px 50px 150px;
  display: grid;
  grid-row-gap: 60px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  justify-items: center;
  overflow-y: scroll;
`;
