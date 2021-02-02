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
import {postComment, fetchDishes, fetchPromos, fetchComments, fetchLeaders, postFeedback} from '../redux/ActionCreators';
import {actions} from 'react-redux-form';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

const mapDispatchToProps = (dispatch) => ({
  postComment: (dishId, rating, author, comment) => (dispatch(postComment(dishId, rating, author, comment))),
  postFeedback: (firstname, lastname, telnum, email, agree, contactType, message) => (dispatch(postFeedback(firstname, lastname, telnum, email, agree, contactType, message))),
  fetchDishes: () => dispatch(fetchDishes()),
  fetchPromos: () => dispatch(fetchPromos()),
  fetchComments: () => dispatch(fetchComments()),
  fetchLeaders: () => dispatch(fetchLeaders()),
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
    this.props.fetchLeaders();
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
            leader={this.props.leaders.leaders.filter((leader) => leader.featured)[0]}
            leadersLoading={this.props.leaders.isLoading}
            leadersFailed={this.props.leaders.errMess}
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
      <TransitionGroup>
        <CSSTransition key={this.props.location.key} classNames='page' timeout={300}>
          <Switch>
            <Route path='/home' component={HomePage} />
            <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} />} /> 
            <Route path='/menu/:dishId' component={DishWithId} />
            <Route exact path='/contactUs' component={() => <ContactUs resetFeedbackForm={this.props.resetFeedbackForm}
                                                                        postFeedback={this.props.postFeedback}  />}/>
            <Route path='/aboutUs' component={() => <AboutUs leaders={this.props.leaders.leaders} 
                                                              isLoading={this.props.leaders.isLoading}
                                                              errMess={this.props.leaders.errMess}/>} />
            <Redirect to='/home' />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
      <Footer /> 
    </div>
  );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
