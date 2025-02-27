import { createContext, useContext } from "react";

type iconsContextTypes = {
  icons: string[];
  addIcon: (icon : string) => void;
};

const iconsContextDefaultValues : iconsContextTypes = {
  icons: [],
  addIcon: (icon: string) => {},
};

export const IconsContext = createContext<iconsContextTypes>(iconsContextDefaultValues);

export function useTheme(){
  return useContext(IconsContext);
}