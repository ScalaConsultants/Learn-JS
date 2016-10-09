import React, {Component} from 'react';
import ContextMenu from './ReactContextMenu';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {openContextMenu} from '../actions/recipeActions';
import MoreIcon from '../images/moreIcon.png';
import StarIcon from '../images/starIcon.png';
import PdfIcon from '../images/pdfIcon.png';

class RecipeBox extends Component {
    constructor() {
        super();
        this.state = {isHovering: false};
    }

    starRecipeHandler(event) {
        console.log('Starring ' + this.props.recipe.name, event);
    }

    printRecipeHandler() {
        window.open('/pdf/dummyRecipe.pdf');
    }

    hoverHandler() {
        this.setState({isHovering: !this.state.isHovering})
    }

    openMenuHandler(event) {
        event.preventDefault();

        const name = event.target.id;
        const menu = this.refs[name];
        if (menu != null) {
            // menu.openContextMenu({'target': name});
        }
        this.props.openCon(name);
    }

    render() {
        // const {recipeId, recipeName} = this.props.recipe;
        const recipeId = this.props.recipe.id;
        const recipeName = this.props.recipe.name;

        const name = 'recipe-box-' + recipeId;
        const contextMenuItems = [
            {'icon': StarIcon, 'label': 'Add to favourites', 'function': this.starRecipeHandler.bind(this)},
            {'icon': PdfIcon, 'label': 'Get as file', 'function': this.printRecipeHandler.bind(this)}
        ];
        const hoverClass = (this.state.isHovering) ? 'recipeBox recipe-hover' : 'recipeBox recipe-no-hover';

        return (
            <div className={hoverClass}
                 onMouseOver={this.hoverHandler.bind(this)}
                 onMouseOut={this.hoverHandler.bind(this)}>

                <img src={this.props.recipe.image}></img>

                <div className="recipeDesc">
                    <img id={name} className="more-icon" src={MoreIcon} onClick={this.openMenuHandler.bind(this)}></img>
                    <h3 className="recipe-box-text">{recipeName}</h3>
                </div>

                <ContextMenu ref={name} contextID={name} items={contextMenuItems}></ContextMenu>
            </div>
        );
    }
}

RecipeBox.propTypes = {
    recipe: React.PropTypes.object
}

function mapStateToProps(state) {
    return {
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({openCon: openContextMenu}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(RecipeBox);
