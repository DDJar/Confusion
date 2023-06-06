import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

  class DishDetail extends Component {
  // Task2
    renderDish(dish) {
      return (
            <div className="col-12 col-md-5 m-1">
              <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
              </Card>
            </div>
          );
      };
  // Task3
  renderComments(comments) {
    if (comments != null) 
        return (
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {comments.map((comment) => {
                        return (
                            <li key={comment.id}>
                                <p>{comment.comment}</p>
                                <p>-- {comment.author}, {comment.date}</p>   
                                </li>
                        );
                    })}
                </ul>
            </div>
        );                                                                                   
    else
        return(
            <div></div>
        );       
}
// Task1
    render() {
      const dish = this.props.dish;
      if (dish !=  null)
          return (
              <div className="row">
                  {this.renderDish(dish)}
                  {this.renderComments(dish.comments)}
              </div>
          )
      else
          return(
              <div></div>
          );            
    }      

  }

export default DishDetail;