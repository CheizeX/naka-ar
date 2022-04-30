import React, { FC } from "react";
import { SwitchProps } from "./Switch.interface";
import { CheckBox, CheckBoxLabel, CheckBoxWrapper } from "./Switch.styled";
import { WiDaySunny } from "react-icons/wi";

const Switch: FC<SwitchProps> = ({
  children,
  checked,
  onChange,
  gradientStart,
  gradientEnd,
  backgroundColor,
  borderInputRadius,
  borderButtonRadius,
}) => {
  return (
    <div>
      <CheckBoxWrapper>
        <CheckBox
          id='checkbox'
          type='checkbox'
          onChange={onChange}
          checked={checked}
          gradientStart={gradientStart}
          gradientEnd={gradientEnd}
          borderInputRadius={borderInputRadius}
          borderButtonRadius={borderButtonRadius}
        />
        <CheckBoxLabel
          htmlFor='checkbox'
          backgroundColor={backgroundColor}
          borderInputRadius={borderInputRadius}
          borderButtonRadius={borderButtonRadius}>
          {children}
        </CheckBoxLabel>
      </CheckBoxWrapper>
    </div>
  );
};

export default Switch;
