import React, { Component } from "react";
import { Card, CardBody, CardImg, CardTitle, CardText } from "reactstrap";


export default class Dishestail extends Component {


    renderComments(comments) {
        return (
            <div className="col-12 col-md-4 m-1">
                <h1>Comments</h1>
                {comments.map((commentIndex) => {
                    return (
                        <div >
                            <div>
                                <p>{commentIndex.comment}</p>
                                <p>-- {commentIndex.author},
                                    &nbsp;
                                    {commentIndex.date}
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
            <div className="col-12 col-md-4 m-1">
                <Card>
                    <CardImg
                        width="100%"
                        src={dish.image}
                        className=" img-responsive"
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

        if (this.props.selectDish != null) {
            return (
                <div className="row">
                    {this.renderDish(this.props.selectDish)}
                    {this.renderComments(this.props.selectDish.comments)}
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