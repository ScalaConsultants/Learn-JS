import React, {Component} from 'react';
import ContextMenu from './ReactContextMenu';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {openContextMenu} from '../actions/recipeActions';
import {hoverRecipeBox, unhoverRecipeBox} from '../actions/recipeActions';
import MoreIcon from '../images/moreIcon.png';
import StarIcon from '../images/starIcon.png';
import PdfIcon from '../images/pdfIcon.png';

class RecipeBox extends Component {

    starRecipeHandler(event) {
        console.log('Starring ' + this.props.recipe.name, event);
    }

    printRecipeHandler() {
        window.open('/pdf/dummyRecipe.pdf');
    }

    // hoverHandler() {
    //     this.setState({isHovering: !this.state.isHovering})
    // }

    openMenuHandler(event) {
        event.preventDefault();

        const recipeBox = event.target.closest('.recipeBox');
        const openedContextMenuId = 'context-menu-' + recipeBox.id;

        this.props.openContextMenu(openedContextMenuId);
    }

    mouseOverHandler(event) {
        const name = event.currentTarget.id;
        this.props.hoverRecipeBox(name);
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

        const hoverClass = ((name) === this.props.recipex.currentlyHoverRecipeBoxId) ? 'recipeBox recipe-hover' : 'recipeBox recipe-no-hover';

        return (
            <div className={hoverClass}
                 id={name}
                 onMouseOver={this.mouseOverHandler.bind(this)}
                 onMouseOut={this.props.unhoverRecipeBox}>

                <img src={this.props.recipe.image}></img>

                <div className="recipeDesc">
                    <img className="more-icon" src={MoreIcon} onClick={this.openMenuHandler.bind(this)}></img>
                    <h3 className="recipe-box-text">{recipeName}</h3>
                </div>

                <ContextMenu contextID={name} items={contextMenuItems}></ContextMenu>
            </div>
        );
    }

}

RecipeBox.propTypes = {
    recipe: React.PropTypes.object
}

function mapStateToProps(state) {
    return {
        recipex: state.recipe
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        openContextMenu: openContextMenu,
        hoverRecipeBox: hoverRecipeBox,
        unhoverRecipeBox: unhoverRecipeBox
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(RecipeBox);
