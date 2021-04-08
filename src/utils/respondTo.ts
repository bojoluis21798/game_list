import { css, FlattenSimpleInterpolation } from "styled-components";

export default function respondTo(
  breakpoint: "tablet" | "desktop",
  content: FlattenSimpleInterpolation
): FlattenSimpleInterpolation {
  return css`
    @media only screen and (min-width: ${breakpoint === "tablet"
        ? "768px"
        : "1024px"}) {
      ${content}
    }
  `;
}
