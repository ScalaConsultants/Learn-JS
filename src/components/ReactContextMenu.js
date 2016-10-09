//adapted from https://github.com/amurp/react-context-menu
import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {closeContextMenu} from '../actions/recipeActions';

class ContextMenu extends React.Component {
    constructor(props) {
        super(props);
        this.elementUniqueId = 'context-menu-' + props.contextID;
        this.state = {
            target: ''
        }
    }

    render() {

        const visibilityClass = (this.elementUniqueId === this.props.recipe.currentlyOpenContextMenuId) ? 'visible context-menu' : 'invisible context-menu';
        return (
            <div id={this.elementUniqueId} className={visibilityClass} onMouseLeave={this.props.closeContextMenu}>

                {this.props.items.map((item) => {
                    const clickHandler = () => {
                        this.props.closeContextMenu();
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
}

function mapStateToProps(state) {
    return {
        recipe: state.recipe
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({closeContextMenu: closeContextMenu}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(ContextMenu);