import HelloWorld from "./components/01-hello/hello-world";
import HelloReact from "./components/01-hello/hello-react";
import { Jsx1 } from "./components/02-jsx/jsx1";
import { Jsx2 } from "./components/02-jsx/jsx2";
import { Jsx3 } from "./components/02-jsx/jsx3";
import { Jsx4 } from "./components/02-jsx/jsx4";
import { Jsx5 } from "./components/02-jsx/jsx5";
import { Jsx6 } from "./components/02-jsx/jsx6";
import { Jsx7 } from "./components/02-jsx/jsx7";
import { Style1 } from "./components/03-styles/style1";
import { Style2 } from "./components/03-styles/style2";
import { Style3 } from "./components/03-styles/style3";
import { Style4 } from "./components/03-styles/style4";
import { Style5 } from "./components/03-styles/style5";

import { Header } from "./components/03-styles/homework/header";
import { Sidebar } from "./components/03-styles/homework/sidebar";
import { Content } from "./components/03-styles/homework/content";
import { styles } from "./components/03-styles/homework/styles";
import { Clock1 } from "./components/04-clock1/clock1";
import Greetings from "./components/05-props/greetings";
import { Products } from "./components/05-props/products";
import { Clock2 } from "./components/06-clock2/clock2";
import { Image } from "./components/07-image/image";
import { Gallery } from "./components/08-image-gallery/gallery";
import { ProfileCard } from "./components/09-profile-card/profile-card";
import { ReactBootstrap } from "./components/10-bootstrap/react-bootstrap";
import { Icons } from "./components/11-icons/icons";
import { Event1 } from "./components/12-events/event1";
import { Event2 } from "./components/12-events/event2";
import { Shop } from "./components/13-shop/shop";
import { Stateless } from "./components/14-state/stateless";
import { State } from "./components/14-state/state";
import { Counter1 } from "./components/15-counter/counter1";
import { Counter2 } from "./components/15-counter/counter2";
import { UserList } from "./components/16-birthday/user-list";
import { UseEffect1 } from "./components/17-use-effect/use-effect1";
import { UseEffect2 } from "./components/17-use-effect/use-effect2";
import { Clock3 } from "./components/18-clock3/clock3";
import { UseEffect3 } from "./components/17-use-effect/use-effect3";
import { CountryFilter } from "./components/19-country-filter/country-filter";
import { UseRef } from "./components/20-useref/useref";
import ClassComp from "./components/21-class-comp/class-comp";
import { ProductsStore } from "./components/22-products/products-store";
import { Recipes } from "./components/23-recipes/recipes";
import { Parent } from "./components/24-child-to-parent-prop-transfer/parent";
import { Form1 } from "./components/25-forms/form1";
import { Form2 } from "./components/25-forms/form2";

const App = () => {
	return (
		<div>
			{/* <HelloWorld />
			<HelloReact />
			<Jsx1 />
			<Jsx2 />
			<Jsx3 />
			<Jsx4 />
			<Jsx5 />
			<Jsx6 />
			<Jsx7 /> 
			<Style1/> 
			<Style2 />
			<Style3 />
			<Style4 />
			<Style5 />
			<Clock1/>

			<div style={styles.appContainer}>
				<Header />
				<div style={styles.mainContainer}>
					<Sidebar />
					<Content />
				</div>
			</div>
			
			<Clock1/>
			
			<Greetings/>
			<Products />
			
			<Clock2 textColor="red" bgColor="black" />
			<Clock2 textColor="white" bgColor="green" />
			<Clock2 textColor="white" bgColor="black" hideTime={true} />
			<Image />
			<Gallery />
			<ProfileCard avatar="profile.jpg" name="Jane Doe" location="San Francisco, USA" followers={12436} following={1472} shots={1} />
			<ReactBootstrap />
			<Icons />
			<Event1 />
			<Event2 />
			<Shop />
			<Stateless />
			<State />
			<Counter1 />
			<Counter2 />
			<UserList />
			
			<UseEffect2 />
			<UseEffect1 />
			<Clock3 />
			<UseEffect3 />
			<CountryFilter />
			<UseRef />
			<ClassComp />
			<ProductsStore/>
			<Recipes />
			<Parent />
			<Form1 />
			*/}
			<Form2 />
		</div>
	);
};
export default App;
