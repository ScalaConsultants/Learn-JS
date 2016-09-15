import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';

class RecipeBox extends Component {
    constructor(){
        super();
        this.state = {
            rating: 0,
            show: false
        };

        this.onStarClick = this.onStarClick.bind(this);
        this.showRating = this.showRating.bind(this);
        this.hideRating = this.hideRating.bind(this);
    }

    onStarClick(nextValue, prevValue, name) {
        this.setState({rating: nextValue});
    }

    showRating() {
        this.setState({show: true});
    }

    hideRating() {
        this.setState({show: false});
    }

    render() {
        return (
            <div className="recipeBox"
            onMouseEnter={this.showRating}
            onMouseLeave={this.hideRating}>
            {this.state.show ?
                <div className='ratingContainer'>
                    <StarRatingComponent
                        ref="src"
                        name={this.props.recipeName}
                        starCount={5}
                        value={this.state.rating}
                        emptyStarColor={'#F0FFFF'}
                        onStarClick={this.onStarClick.bind(this)}
                    />
                </div>:
                null 
            }
				<img src={this.props.image}></img>
				<div className="recipeDesc">
					<h3>{this.props.recipeName}</h3>
					<p>{this.props.description}</p>
				</div>
			</div>
        );
    }
}

RecipeBox.propTypes = {
    image: React.PropTypes.string,
    recipeName: React.PropTypes.string,
    description: React.PropTypes.string
}

export default RecipeBox;
