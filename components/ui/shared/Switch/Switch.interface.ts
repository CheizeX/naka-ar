export interface SwitchProps {
  backgroundColor?: string;
  borderInputRadius?: string;
  borderButtonRadius?: string;
  gradientStart?: string;
  gradientEnd?: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  children?: React.ReactNode;
}

export interface LabelSwitchProps {
  backgroundColor?: string;
  borderInputRadius?: string;
  borderButtonRadius?: string;
}
