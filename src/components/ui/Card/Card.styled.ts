import styled from 'styled-components';

export const StyledCrad = styled.div`
  width: 320px;
  height: 420px;
  border-radius: 10px;
  background: ${({ theme }) => theme.background};
  box-shadow: 0 3px 5px ${({ theme }) => theme.shadow};
`;
