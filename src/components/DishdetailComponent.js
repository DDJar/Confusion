import React, { Component } from "react";
import { Card, CardBody, CardImg, CardTitle, CardText } from "reactstrap";


export default class Dishestail extends Component {
    constructor(props) {
        super(props);
    }

    renderComments(comments) {
        return (
            <div className="col-12 col-md-4 m-1">
                <h1>Comments</h1>
                {comments.map((comment) => {
                    return (
                        <div key={comment.id}>


                            <div>
                                <p>{comment.comment}</p>
                                <p>-- {comment.author},
                                    &nbsp;
                                    {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'})
                                    .format(new Date(Date.parse(comment.date)))}
                                </p>
                            </div>

                        </div>
                    )
                }
                )}
            </div>
        );
    }
    renderDish(dish) {

        return (
            <div key={dish.id} className="col-12 col-md-4 m-1 ">
                <Card>
                    <CardImg
                        width="100%"
                        src={dish.image}
                        className="flex-grow-2 img-responsive"
                    />
                    <CardBody>
                        <CardTitle className="col-md-12">

                            <h3>{dish.name}</h3>
                        </CardTitle>
                        <CardText className="col-md-12">

                            {dish.description}
                        </CardText>
                    </CardBody>
                </Card>
            </div>
        )

    }
    render() {
        const dish = this.props.dish;
        if (dish != null) {
            const dishItem = this.renderDish(dish);
            const dishComments = this.renderComments(dish.comments);
            return (

                <div className="container">
                    <div className="row">
                    {dishItem}
                    {dishComments}
                    </div>
                </div>
            )
        }
        else {
            return (
                <div></div>
            )
        }



    }
}