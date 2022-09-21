import MyContext from "./MyContext.js";
import { useState } from "react";

export const MyProvider = ({children}) => {

    const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <MyContext.Provider value={{menuIsOpen, setMenuIsOpen}}>
        {children}
    </MyContext.Provider>
  )
}
