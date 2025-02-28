import { useState } from "react";
import { IconsContext } from "./iconsContext";

type Props = {
  children: React.ReactNode;
}

export function IconsProvider({children}:Props){
  const [icons, setIcons] = useState<string[]>([]);

  const addIcon = (icon: string) => {
    setIcons(prevIcons => [icon, ...prevIcons]);
  };

  const value = {
    icons,
    addIcon,
  };
  
  return (
    <>
      <IconsContext.Provider value={value}>
        {children}
      </IconsContext.Provider>
    </>
  );
}