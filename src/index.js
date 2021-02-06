import React from "react";
import ReactDOM from "react-dom";
import Timer from "./components/Timer/";

ReactDOM.render(
    <Timer hours="02" minutes="55" seconds="34" />,
    document.getElementById("timer")
);
