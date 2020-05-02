import "core-js/features/map";
import "core-js/features/set";
import React from "react";
import ReactDOM from "react-dom";
import bridge from "@vkontakte/vk-bridge";
import App from "./App";
//import formData from "./state/FormData";


// Init VK  Mini App
bridge.send("VKWebAppInit");

export let rerenderEntireTree = (formData)=> {
    ReactDOM.render(<App formData={formData}/>, document.getElementById("root"));
    if (process.env.NODE_ENV === "development") {
      import("./eruda").then(({ default: eruda }) => {}); //runtime download
    }   
  }
  