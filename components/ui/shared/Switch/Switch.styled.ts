import styled, { css } from "styled-components";
import { LabelSwitchProps, SwitchProps } from "./Switch.interface";

export const CheckBoxWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 24px;
  cursor: pointer;
`;
export const CheckBoxLabel = styled.label<LabelSwitchProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 100%;
  border-radius: 15px;
  background: #bebebe;
  ${({ backgroundColor }) =>
    backgroundColor &&
    css`
      background: ${backgroundColor};
    `}
  ${({ borderInputRadius }) =>
    borderInputRadius &&
    css`
      border-radius: ${borderInputRadius};
    `}
  display: flex;
  align-items: center;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    ${({ borderButtonRadius }) =>
      borderButtonRadius &&
      css`
        border-radius: ${borderButtonRadius};
      `}
    width: 18px;
    z-index: 1;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }

  & > :first-child {
    position: absolute;
    left: 4px;
  }
  & > :last-child {
    position: absolute;
    right: 3px;
  }
  & > * {
    width: 14px;
    height: 14px;
  }
`;
export const CheckBox = styled.input<SwitchProps>`
  cursor: pointer;
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  ${({ borderInputRadius }) =>
    borderInputRadius &&
    css`
      border-radius: ${borderInputRadius};
    `}
  width: 42px;
  height: 26px;
  &:checked + ${CheckBoxLabel} {
    background-image: linear-gradient(120deg, #4fbe79 0%, #4fbe79 100%);
    ${({ gradientStart, gradientEnd }) =>
      gradientStart &&
      gradientEnd &&
      css`
        background-image: linear-gradient(
          120deg,
          ${gradientStart} 0%,
          ${gradientEnd} 100%
        );
      `}
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      ${({ borderButtonRadius }) =>
        borderButtonRadius &&
        css`
          border-radius: ${borderButtonRadius};
        `}
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;
