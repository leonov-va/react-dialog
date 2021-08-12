import React, { useState, useEffect } from "react";

import Dialog from "./components/Dialog";
import Header from "./components/Header";
import Sender from "./components/Sender";

import { AppContext } from "./context";
import { getTheme, setTheme } from "./helpers/theme";

const App = () => {
  const [message, addMessage] = useState(null);
  const [theme, toggleTheme] = useState(getTheme());

  useEffect(() => {
    setTheme(theme);
  }, [theme]);

  return (
    <AppContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      <div className="container">
        <Header />
        <Dialog newMessage={message} />
        <Sender onAddMessage={addMessage} />
      </div>
    </AppContext.Provider>
  );
};

export default App;
