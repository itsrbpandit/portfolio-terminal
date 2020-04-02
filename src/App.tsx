import React, { Component } from "react";
import Terminal from "terminal-in-react";

import { about, help, contact, takeTo } from "./utils";

class App extends Component<{}, {}> {
  render() {
    return (
      <div
        className="terminal"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh"
        }}
      >
        <Terminal
          color="yellow"
          backgroundColor="black"
          barColor="silver"
          style={{ fontWeight: "bold", fontSize: "1em" }}
          prompt="yellow"
          promptSymbol="$"
          allowTabs={false}
          commands={{
            help: () => help(),
            about: () => about(),
            contact: () => contact(),
            blog: () => takeTo("blog"),
            instagram: () => takeTo("instagram"),
            github: () => takeTo("github"),
            linkedin: () => takeTo("linkedin")
          }}
          msg={
            "🧐 Badal Raina\nFreelance Web Developer\nCurrently looking for a Job\n" +
            "\n❓Type help (and press enter or return) to get started!\n" +
            "❓You can also click on the green dot on top to maximize the console.\n" +
            `⏱${new Date()}`
          }
        />
      </div>
    );
  }
}

export default App;
