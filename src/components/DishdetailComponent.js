import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';

function RenderDish({dish}) {
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

  function RenderComments({comments}) {
    
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

  const  DishDetail = (props) => {
    const dish = this.props.dish;
    if (dish != null) {
        const dishItem = this.RenderDish(dish);
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

// class Dishestail extends Component {
//     constructor(props) {
//         super(props);
//     }

//     renderComments(comments) {
//         return (
//             <div className="col-12 col-md-4 m-1">
//                 <h1>Comments</h1>
//                 {comments.map((comment) => {
//                     return (
//                         <div key={comment.id}>


//                             <div>
//                                 <p>{comment.comment}</p>
//                                 <p>-- {comment.author},
//                                     &nbsp;
//                                     {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'})
//                                     .format(new Date(Date.parse(comment.date)))}
//                                 </p>
//                             </div>

//                         </div>
//                     )
//                 }
//                 )}
//             </div>
//         );
//     }
//     renderDish(dish) {

//         return (
//             <div key={dish.id} className="col-12 col-md-4 m-1 ">
//                 <Card>
//                     <CardImg
//                         width="100%"
//                         src={dish.image}
//                         className="flex-grow-2 img-responsive"
//                     />
//                     <CardBody>
//                         <CardTitle className="col-md-12">

//                             <h3>{dish.name}</h3>
//                         </CardTitle>
//                         <CardText className="col-md-12">

//                             {dish.description}
//                         </CardText>
//                     </CardBody>
//                 </Card>
//             </div>
//         )

//     }
//     render() {
//         const dish = this.props.dish;
//         if (dish != null) {
//             const dishItem = this.renderDish(dish);
//             const dishComments = this.renderComments(dish.comments);
//             return (

//                 <div className="container">
//                     <div className="row">
//                     {dishItem}
//                     {dishComments}
//                     </div>
//                 </div>
//             )
//         }
//         else {
//             return (
//                 <div></div>
//             )
//         }



//     }
// }
export default DishDetail;