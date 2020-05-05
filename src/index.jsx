import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css"

const App = () => {
    return <div className="container">Hello React!</div>;
};

ReactDOM.render(<App/>, document.getElementById('root')
);