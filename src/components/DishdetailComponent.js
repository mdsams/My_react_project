import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle  } from 'reactstrap';

class DishDetail extends Component {

    constructor(props) {
        super(props); 

        
        this.state = {
            selectedDish: null
        }
    }

    renderDish(dish) {
        if(dish != null) {
            return(
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            )
        }
        else {
            return(
                <div></div>
            );
        }
    } 

    renderComments(dish) {
        if(dish != null) {
            return(
                <div>
                    <h4>Comments</h4>
                    {dish.comments.map(comment=>{
                        return <div className="list-unstyled">
                        {comment.comment}
                        <br />
                        <br />
                            {comment.author}, {comment.date}
                        <br />
                        <br />
                        </div>
                    })}
                </div>
                )
        }
        else {
            return(
                <div></div>
            )
        }
    }

    render() {
        const{ selectedDish }=this.props
        return (
            <div className="container">
                <div className="row">
                    {this.renderDish(selectedDish)}
                    {this.renderComments(selectedDish)}
                </div>
            </div>
        );
    }

}

export default DishDetail;