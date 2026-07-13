import styled from "styled-components";
import Profile from "./Profile";
import ToggleButton from "../../reusable-ui/ToggleButton";
import { toast } from "react-toastify";
import { useContext } from "react";
import ToastAdmin from "./ToastAdmin";
import OrderContext from "../../../../context/OrderContext";

export default function NavbarRightSide() {
  // const [isAdminMode, setIsAdminMode] = useState(false);
  const { isAdminMode, setIsAdminMode } = useContext(OrderContext);

  const displayToastNotification = () => {
    if (!isAdminMode) {
      toast.info("Mode admin activé", {
        // icon: <FaUserSecret size={30} />,
        theme: "dark",
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    setIsAdminMode(!isAdminMode);
  };

  return (
    <NavbarRightSideStyled className="right-side">
      <ToggleButton
        isChecked={isAdminMode}
        labelIfUnchecked="ACTIVER LE MODE ADMIN"
        labelIfChecked="DÉSACTIVER LE MODE ADMIN"
        onToggle={displayToastNotification}
      />
      <ToastAdmin />
      <Profile />
    </NavbarRightSideStyled>
  );
}

const NavbarRightSideStyled = styled.div`
  display: flex;
  align-items: center;
  padding-right: 50px;
  gap: 50px;
`;
