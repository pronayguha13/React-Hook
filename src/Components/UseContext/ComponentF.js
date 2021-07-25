import React from "react";
import { UserContext, ChannelContext } from "../../App";

const ComponentF = () => {
  return (
    <div>
      <UserContext.Consumer>
        {(user) => {
          return (
            <ChannelContext.Provider>
              {(channelName) => {
                return (
                  <div>
                    User Context Value {user} and Channel Context Value:
                    {channelName}
                  </div>
                );
              }}
            </ChannelContext.Provider>
          );
        }}
      </UserContext.Consumer>
    </div>
  );
};

export default ComponentF;
