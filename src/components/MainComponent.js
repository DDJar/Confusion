import React, { Component } from 'react';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import About from './AboutComponent';
// import { DISHES } from '../shared/dishes';
// import { COMMENTS } from '../shared/comments';
// import { PROMOTIONS } from '../shared/promotions';
// import { LEADERS } from '../shared/leaders';
import Contact from './ContactComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Routes, Route, Navigate, useParams,useNavigate  } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}

class Main extends Component {

  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       dishes: DISHES,
  //       comments: COMMENTS,
  //       promotions: PROMOTIONS,
  //       leaders: LEADERS

  //     };
  //   }
  //   /* ex31 */
  //   render() {
  //     const HomePage = () => {
  //       return (
  //         <Home
  //           dish={this.state.dishes.filter((dish) => dish.featured)[0]}
  //           promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
  //           leader={this.state.leaders.filter((leader) => leader.featured)[0]}
  //         />
  //       );
  //     }
  //     const AboutPage = () => {
  //       return (
  //           <About leaders={this.state.leaders} />
  //       );
  //   }
  // /* ex31 */
  //     const DishWithId = ({ match }) => {
  //       const { dishId } = useParams();
  //       return (
  //         <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(dishId, 10))[0]}
  //           comments={this.state.comments.filter((comment) => comment.dishId === parseInt(dishId, 10))} />
  //       );
  //     };

  //     return (
  //       <div>
  //         <Header />
  //         <Routes>
  //           <Route path='/home' Component={HomePage} />
  //           <Route exact path='/menu' element={<Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />} />
  //           <Route path="/home" element={<Navigate to="/home" />} />
  //           <Route exact path="/aboutus" Component={AboutPage} />
  //           <Route exact path='/contactus' Component={Contact} />
  //           <Route path='/menu/:dishId' Component={DishWithId} />
  //         </Routes>
  //         <Footer />

  //       </div>
  //     );
  //   }
  render() {
    const HomePage = () => {
      return (
        <Home
          dish={this.state.dishes.filter((dish) => dish.featured)[0]}
          promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
          leader={this.state.leaders.filter((leader) => leader.featured)[0]}
        />
      );
    }
    const DishWithId = ({ match }) => {
      return (
        <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
          comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))} />
      );
    };

    return (
      <div>
        <Header />
        <div>
          <Routes>
            <Route path='/home' component={HomePage} />
            <Route exact path='/aboutus' component={() => <About leaders={this.props.leaders} />} />
            <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} />} />
            <Route path='/menu/:dishId' component={DishWithId} />
            <Route exact path='/contactus' component={Contact} />
          </Routes>
        </div>
        <Footer />
      </div>
    );

  }
}
 const withRouter = (Component) => {
  const Wrapper = (props) => {
    const history = useNavigate ();
    return <Component history= {history} {...props}/>
  }
  return Wrapper;
}
export default withRouter(connect(mapStateToProps)(Main));
//export default Main;
