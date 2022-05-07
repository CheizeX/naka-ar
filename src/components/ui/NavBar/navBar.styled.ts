import styled, { css } from 'styled-components';
import { INavBarProps } from './navBar.interface';

export const StyledNavBar = styled.nav`
  position: fixed;
  width: 100%;
  padding: 0 10px;
  height: 74px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.font};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  z-index: 9;
  font-size: ${({ theme }) => theme.fontSize[20]};
  font-weight: ${({ theme }) => theme.fontWeight[600]};
  & > :first-child {
    text-decoration: 2px dotted underline;
    text-underline-position: under;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    height: fit-content;
    width: fit-content;
    font-size: ${({ theme }) => theme.fontSize[32]};
    & > svg {
      margin-right: 10px;
      width: 40px;
      height: 40px;
      fill: ${({ theme }) => theme.Colors.gray[9]};
      animation: changeColor 10s infinite;
      @keyframes changeColor {
        0% {
          fill: ${({ theme }) => theme.Colors.purple[3]};
        }
        20% {
          fill: ${({ theme }) => theme.Colors.orange[5]};
        }
        50% {
          fill: ${({ theme }) => theme.Colors.blue[1]};
        }
        80% {
          fill: ${({ theme }) => theme.Colors.green[3]};
        }
        100% {
          fill: ${({ theme }) => theme.Colors.purple[3]};
        }
      }
    }
  }
`;

export const StyledRightSideOfNavBar = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: fit-content;
  height: fit-content;
  & > svg {
    margin: 0 5px;
    cursor: pointer;
  }
`;
export const StyledToggleDrakMode = styled.button<INavBarProps>`
  width: 34px;
  height: 34px;
  padding: 4px;
  border-radius: 10px;
  border: 3px solid ${({ theme }) => theme.Colors.gray[1]};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  cursor: pointer;
  & > svg {
    & > path {
      fill: ${({ theme }) => theme.Colors.gray[1]};
      stroke: ${({ theme }) => theme.Colors.gray[1]};
    }
  }
  &:hover {
    & > svg {
      & > path {
        fill: ${({ theme }) => theme.Colors.purple[4]};
      }
    }
  }
  ${({ darkMode, theme }) =>
    darkMode &&
    css`
      border: 3px solid ${theme.Colors.gray[10]};
      &:hover {
        & > svg {
          & > path {
            fill: gold;
          }
        }
      }
      & > svg {
        & > path {
          fill: ${({ theme }) => theme.Colors.gray[10]};
        }
      }
    `}
`;
