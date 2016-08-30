import React from 'react';
import RecipesList from '../components/RecipesList';

let recipes = [{name: 'Foo', description: 'Foooooooo', image: require('../images/wings.jpg')},
              {name: 'Bar', description: 'Baaar', image: require('../images/tortilla.jpg')},
              {name: 'Baz', description: 'Baz', image: require('../images/cheeserolls.jpg')},
              {name: 'Foo2', description: 'Foooooooo', image: require('../images/tortilla.jpg')},
              {name: 'Bar2', description: 'Baaar', image: require('../images/wings.jpg')},
              {name: 'Baz2', description: 'Baz', image: require('../images/tortilla.jpg')},
              {name: 'Foo3', description: 'Foooooooo', image: require('../images/cheeserolls.jpg')},
              {name: 'Bar3', description: 'Baaar', image: require('../images/tortilla.jpg')},
              {name: 'Baz3', description: 'Baz', image: require('../images/wings.jpg')},
              {name: 'Foo4', description: 'Foooooooo', image: require('../images/tortilla.jpg')},
              {name: 'Bar4', description: 'Baaar', image: require('../images/cheeserolls.jpg')},
              {name: 'Baz4', description: 'Baz', image: require('../images/wings.jpg')}];

class App extends React.Component {
	render() {
		return(
			<div>
				<p>Premium leader</p>
				<RecipesList data={recipes} />
			</div>
			)
	}
}

export default App;