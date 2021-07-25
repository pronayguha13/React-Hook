import React, { createContext } from "react";
import ComponentC from "./Components/UseContext/ComponentC";

export const UserContext = createContext();
export const ChannelContext = createContext();
function App() {
  return (
    <div>
      <UserContext.Provider value={"Pronay"}>
        <ChannelContext.Provider value={"My Channel"}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
