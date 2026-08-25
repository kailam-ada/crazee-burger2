import styled, { css } from "styled-components";
import { theme } from "../../../theme";

export default function TextInput({
  value,
  onChange,
  Icon,
  className,
  version = "normal",
  ...extraProps
}) {
  return (
    <TextInputStyled className={className} version={version}>
      <div className="icon">{Icon && Icon}</div>
      <input value={value} type="text" onChange={onChange} {...extraProps} />
    </TextInputStyled>
  );
}

const TextInputStyled = styled.div`
  /* background-color: ${theme.colors.white}; */
  border-radius: ${theme.borderRadius.round};
  display: flex;
  align-items: center;

  .icon {
    display: flex;
    /* justify-content: center;
    align-items: center; */
    font-size: ${theme.fonts.size.SM};
    margin: 0 13px 0 8px;
    /* color: ${theme.colors.greySemiDark}; */
  }

  input {
    border: none;
    font-size: ${theme.fonts.size.SM};
    width: 100%;

    &::placeholder {
      color: ${theme.colors.greyMedium};
    }
  }
  ${(props) => {
    if (props.version === "normal") return extraNormalStyle;
    if (props.version === "minimalist") return extraMinimalistStyle;
  }}
`;

const extraNormalStyle = css`
  background-color: ${theme.colors.white};
  padding: 18px 28px;

  input {
    color: ${theme.colors.dark};

    &::placeholder {
      background: ${theme.colors.white};
    }
  }
`;

const extraMinimalistStyle = css`
  background-color: ${theme.colors.white};
  padding: 8px 16px;
  color: ${theme.colors.greyBlue};

  input {
    background: ${theme.colors.white};
    color: ${theme.colors.dark};

    &:focus {
      outline: 0;
    }
  }
`;
