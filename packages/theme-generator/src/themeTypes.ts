export type InputTheme = {
  primary: string;
  primaryContent?: string;
  secondary: string;
  secondaryContent?: string;
  accent: string;
  accentContent?: string;
  neutral: string;
  neutralContent?: string;
  background?: string;
  background2?: string;
  background3?: string;
  foreground?: string;
  info?: string;
  infoContent?: string;
  success?: string;
  successContent?: string;
  warning?: string;
  warningContent?: string;
  error?: string;
  errorContent?: string;
};

export type FullTheme = Required<InputTheme> & {
  primary2: string;
  secondary2: string;
  accent2: string;
  neutral2: string;
  info2: string;
  success2: string;
  warning2: string;
  error2: string;
  // tamagui
  // background: string;
  // backgroundHover: string;
  // backgroundPress: string;
  // backgroundFocus: string;
  // borderColor: string;
  // borderColorPress: string;
  // borderColorFocus: string;
  // borderColorHover: string;
  // color: string;
  // colorHover: string;
  // colorPress: string;
  // colorFocus: string;
  // shadowColor: string;
  // shadowColorHover: string;
  // shadowColorPress: string;
  // shadowColorFocus: string;
  // placeholderColor: string;
};
