import HelloWorld from "./components/01-hello/hello-world";
import HelloReact from "./components/01-hello/hello-react";
import { Jsx1 } from "./components/02-jsx/jsx1";
import { Jsx2 } from "./components/02-jsx/jsx2";
import { Jsx3 } from "./components/02-jsx/jsx3";

const App = () => {
	return (
		<div>
			Hello APP
			<HelloWorld />
			<HelloReact />
			<Jsx1 />
			<Jsx2 />
			<Jsx3 />
			
		</div>
	);
};
export default App;
