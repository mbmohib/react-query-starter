import styled from "styled-components";
import { space, flexbox, typography, layout } from "styled-system";

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;

  ${space}
  ${typography}
  ${flexbox}
  ${layout}
`;

export default Container;
