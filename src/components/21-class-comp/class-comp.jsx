import React, { Component } from "react";
import { Button } from "react-bootstrap";

class ClassComp extends Component {
	constructor(props) {
		super(props);

		this.state = {
			counter: 0,
			message: "Hello Class Component",
		};
	}

	componentDidMount() {
		console.log("MOUNTING: These codes only work in the first render");
	}

	componentDidUpdate(prevProps, prevState) {
		console.log("UPDATING: These codes only work in the re-render and render");

		if (prevState.counter !== this.state.counter) {
			console.log("This only works if the counter has changed");
		}
	}
	componentWillUnmount() {
		console.log("UNMOUNTING: These codes onyl work when the component is about to be unmounted from DOM");
	}

	render() {
		return (
			<div>
				<h1>Class Component</h1>
				<p>Message: {this.state.message}</p>
				<p>Counter: {this.state.counter}</p>

				<Button
					onClick={() =>
						this.setState((prev) => ({
							counter: prev.counter + 1,
						}))
					}
				>
					Click Me
				</Button>

				<Button
					onClick={() =>
						this.setState((prev) => ({
							message: Math.random(),
						}))
					}
				>
					Set Message
				</Button>
			</div>
		);
	}
}
export default ClassComp;
