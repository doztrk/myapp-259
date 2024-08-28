//Rule 1: In JSX, there must always be one parent element.
//Rule 2: The attributes of JSX elements should be written in camelCase.
/*  Rule 3: Some attributes have special meanings in JS, so their names are used differently in JSX than in HTML.
For example: htmlFor, className, etc.
*/
export const Jsx1 = () => {
	return (
		<div>
			<label htmlFor="name">Jsx1</label>
			<div className="warning">Hello</div>
		</div>
	);
};


