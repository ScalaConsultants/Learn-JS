//adapted from https://github.com/amurp/react-context-menu
import React from 'react';
import {connect} from 'react-redux';

class ContextMenu extends React.Component {
    constructor(props) {
        super(props);
        this.elementUniqueId = 'context-menu-' + props.contextID;
        this.recipeBoxId = props.contextID;
        this.state = {
            target: ''
        }
    }

    render() {
        // if (this.recipeBoxId === this.props.recipe.currentlyOpenContextMenuId) {
        //     console.log('after render:');
        //     console.log(this.props.recipe);
        //     console.log('my name is: ' + this.elementUniqueId);
        // }
        const visibilityClass = (this.recipeBoxId === this.props.recipe.currentlyOpenContextMenuId) ? 'visible context-menu' : 'invisible context-menu';
        return (
            <div id={this.elementUniqueId} className={visibilityClass} onMouseLeave={this.closeContextMenu.bind(this)}>

                {this.props.items.map((item) => {
                    const clickHandler = () => {
                        this.closeContextMenu();
                        item.function(this.state.target);
                    };

                    const label = item.label;
                    const icon = item.icon;

                    return (
                        <span onClick={clickHandler} key={label}>
                            <img className="icon" src={icon} role="presentation"/>
                            {label}
                        </span>
                    );
                })}
            </div>
        );
    }

    openContextMenu(event) {
        this.setState({target: event.target, visible: true});
    }

    closeContextMenu() {
        this.setState({visible: false});
    }
}

function mapStateToProps(state) {
    return {
        recipe: state.recipe
    }
}

export default connect(mapStateToProps)(ContextMenu);