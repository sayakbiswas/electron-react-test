require('../less/main.less');

'use strict';

import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
	render() {
		return <div className="myDiv">Hello World!</div>;
	}
}

ReactDOM.render (<App/>, document.getElementById('content'));
