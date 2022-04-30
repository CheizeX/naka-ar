import styled from "styled-components";

export const StyledNavBar = styled.nav`
  width: 100%;
  padding: 0 30px;
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.font};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  z-index: 9;
  font-size: ${({ theme }) => theme.fontSize[20]};
  font-weight: ${({ theme }) => theme.fontWeight[600]};
`;
