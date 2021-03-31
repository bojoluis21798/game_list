import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type IconProps = {
  isDown: boolean;
};

export const Icon = styled(FontAwesomeIcon)<IconProps>`
  transform: rotate(0deg);
  ${(props) => !props.isDown && `transform: rotate(180deg);`}

  transition: 0.4s ease;
`;
