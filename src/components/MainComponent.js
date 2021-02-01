import React, {Component} from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Menu from './MenuComponent';
import Home from './HomeComponent';
import DishDetail from './DishDetailComponent';
import ContactUs from './ContactUsComponent';
import AboutUs from './AboutUsComponent';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {postComment, fetchDishes, fetchPromos, fetchComments} from '../redux/ActionCreators';
import {actions} from 'react-redux-form';

const mapDispatchToProps = (dispatch) => ({
  postComment: (dishId, rating, author, comment) => (dispatch(postComment(dishId, rating, author, comment))),
  fetchDishes: () => dispatch(fetchDishes()),
  fetchPromos: () => dispatch(fetchPromos()),
  fetchComments: () => dispatch(fetchComments()),
  resetFeedbackForm: () => dispatch(actions.reset('feedback'))
});

const mapStateToProps = (store) => {
  return {
    dishes: store.dishes,
    comments: store.comments,
    promotions: store.promotions,
    leaders: store.leaders
  }
}

class Main extends Component {
  
  componentDidMount(){
    this.props.fetchDishes();
    this.props.fetchPromos();
    this.props.fetchComments();
  }

  render(){
    const HomePage = () => {
      return(
        <Home dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]} 
            dishesLoading={this.props.dishes.isLoading}
            dishesErrMess={this.props.dishes.errMess}
            promotion={this.props.promotions.promotions.filter((prom) => prom.featured)[0]}
            promosLoading={this.props.promotions.isLoading}
            promosErrMess={this.props.promotions.errMess}
            leader={this.props.leaders.filter((leader) => leader.featured)[0]}
        />
      );
    }
    const DishWithId = ({match}) => {
      return (
        <DishDetail dish={this.props.dishes.dishes.filter((dish) => parseInt(match.params.dishId) === dish.id)[0]} 
          isLoading={this.props.dishes.isLoading}
          errMess={this.props.dishes.errMess}
          comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId))} 
          commentsErrMess={this.props.comments.errMess}
          postComment={this.props.postComment}/>
      );
    }
    return (
    <div>
      <Header />
      <Switch>
        <Route path='/home' component={HomePage} />
        <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} />} /> 
        <Route path='/menu/:dishId' component={DishWithId} />
        <Route exact path='/contactUs' component={() => <ContactUs resetFeedbackForm={this.props.resetFeedbackForm} />} />
        <Route path='/aboutUs' component={() => <AboutUs leaders={this.props.leaders} />} />
        <Redirect to='/home' />
      </Switch>
      <Footer /> 
    </div>
  );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
