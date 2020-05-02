import "core-js/features/map";
import "core-js/features/set";
import React from "react";
import ReactDOM from "react-dom";
import bridge from "@vkontakte/vk-bridge";
import App from "./App";
import formData from "./state/FormData";
import { rerenderEntireTree } from "./render";

rerenderEntireTree(formData);


