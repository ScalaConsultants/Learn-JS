require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import RecipesList from '../components/RecipesList';
import SearchBar from '../components/SearchBar'

let recipes = [{ name: 'Foo', description: 'Foooooooo', image: require('../images/wings.jpg') },
    { name: 'Bar', description: 'Baaar', image: require('../images/tortilla.jpg') },
    { name: 'Baz', description: 'Baz', image: require('../images/cheeserolls.jpg') },
    { name: 'Foo2', description: 'Foooooooo', image: require('../images/wings.jpg') },
    { name: 'Bar2', description: 'Baaar', image: require('../images/tortilla.jpg') },
    { name: 'Baz2', description: 'Baz', image: require('../images/cheeserolls.jpg') },
    { name: 'Foo3', description: 'Foooooooo', image: require('../images/wings.jpg') },
    { name: 'Bar3', description: 'Baaar', image: require('../images/tortilla.jpg') },
    { name: 'Baz3', description: 'Baz', image: require('../images/cheeserolls.jpg') },
    { name: 'Foo4', description: 'Foooooooo', image: require('../images/wings.jpg') },
    { name: 'Bar4', description: 'Baaar', image: require('../images/tortilla.jpg') },
    { name: 'Baz4', description: 'Baz', image: require('../images/cheeserolls.jpg') }
];

class App extends React.Component {

    constructor() {
        super();
        this.state = {
          filterPhrase: '',
          filterArrayText: ['']
        };
        this.handleUserInput = this.handleUserInput.bind(this);
    }

    handleUserInput(filterText) {
        const filterList = filterText.split(/\s+/)
        this.setState({
          filterPhrase: filterText,
          filterArrayText: filterList.length !== 1 ? filterList.filter(word => word !== '') : filterList
        });
    }

    render() {
        return (
            <div>
                     <div id = "mainImg">
                            <img src = { require('../images/banner.jpg') }/>
                     </div>
                     <SearchBar
                        filterPhrase={this.state.filterPhrase}
                        onUserInput={this.handleUserInput}
                     />
                     <RecipesList data = { recipes }
                        filterArrayText={this.state.filterArrayText}
                     />
              </div>
        )
    }
}

export default App;
