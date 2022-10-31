import React from "react";
import { createRoot } from "react-dom/client";
import HelloWorld from "./hello-world";

import './styles.css'

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<HelloWorld />);