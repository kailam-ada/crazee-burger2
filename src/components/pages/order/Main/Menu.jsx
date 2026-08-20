import { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";
import Card from "../../reusable-ui/Card";
import { formatPrice } from "../../../../utils/maths";
import OrderContext from "../../../../context/OrderContext";

const DEFAULT_IMAGE = "/images/coming-soon.png";

export default function Menu() {
  const { menu, isAdminMode, handleDelete, resetMenu } =
    useContext(OrderContext);

  if (menu.length === 0)
    return (
      <div>
        <span>Pas de produit</span>
        <button onClick={resetMenu}>Générer de nouveau produits</button>
      </div>
    );
  return (
    <MenuStyled className="menu">
      {menu.map(({ id, title, imageSource, price }) => {
        return (
          <Card
            key={id}
            title={title}
            imageSource={imageSource ? imageSource : DEFAULT_IMAGE}
            leftDescription={formatPrice(price)}
            hasDeleteButton={isAdminMode}
            onDelete={() => handleDelete(id)}
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
