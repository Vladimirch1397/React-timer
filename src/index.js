import React from "react";
import ReactDOM from "react-dom";
import Timer from "./components/Timer/";

ReactDOM.render(
    <Timer hours="00" minutes="00" seconds="10" />,
    document.getElementById("timer")
);
