import styled from "styled-components";
import Profile from "./Profile";
import ToggleButton from "../../reusable-ui/ToggleButton";
import { ToastContainer, toast } from "react-toastify";
import { theme } from "../../../../theme";
import { useState } from "react";

export default function NavbarRightSide({ username }) {
  const [isAdminMode, setIsAdminMode] = useState(false);

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
      <ToastContainer className="toaster" bodyClassName="body-toast" />
      <Profile username={username} />
    </NavbarRightSideStyled>
  );
}

const NavbarRightSideStyled = styled.div`
  display: flex;
  align-items: center;
  padding-right: 50px;
  gap: 50px;

  .profile {
    background: yellow;
  }

  .toaster {
    max-width: 300px;
  }

  .Toastify__toast.Toastify__toast-theme--dark.Toastify__toast--info {
    background: ${theme.colors.background_dark};
  }

  .body-toast {
    .Toastify__toast-icon.Toastify--animate-icon.Toastify__zoom-enter {
      margin-right: 20px;
      margin-left: 5px;
    }
    div {
      line-height: 1.3em;
    }
  }
`;
