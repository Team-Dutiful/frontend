import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyled = createGlobalStyle`
    // css 초기값 정의
    ${reset}
    :root {
        --vh: 100%;
    }
`;

export default GlobalStyled;
