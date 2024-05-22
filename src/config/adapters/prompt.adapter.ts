import prompt from "react-native-prompt-android";

interface Options {
  title: string;
  subTitle?: string;
  buttons: PromptButton[];
  prompType: "defaut" | "secure-text" | "plain-text";
  placeholder?: string;
  defaultValue?: string;
}

interface PromptButton {
  text: string;
  onPress: () => void;
  style?: "cancel" | "default" | "destructive" | undefined;
}
export const showPrompt = (options: Options) => {
  const { title, subTitle, buttons, prompType, placeholder, defaultValue } =
    options;

  prompt(title, subTitle, buttons, {
    type: prompType as any,
    cancelable: false,
    defaultValue: defaultValue,
    placeholder: placeholder,
  });
};
