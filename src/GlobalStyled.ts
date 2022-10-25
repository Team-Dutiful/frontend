import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyled = createGlobalStyle`
    // css 초기값 정의
    ${reset}
`;

export default GlobalStyled;
