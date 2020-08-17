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

const mapStateToProps = (store) => {
  return {
    dishes: store.dishes,
    comments: store.comments,
    promotions: store.promotions,
    leaders: store.leaders
  }
}

class Main extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props){
    super(props);
  }

  render(){
    const HomePage = () => {
      return(
        <Home dish={this.props.dishes.filter((dish) => dish.featured)[0]} 
            promotion={this.props.promotions.filter((prom) => prom.featured)[0]}
            leader={this.props.leaders.filter((leader) => leader.featured)[0]}
        />
      );
    }
    const DishWithId = ({match}) => {
      return (
        <DishDetail dish={this.props.dishes.filter((dish) => parseInt(match.params.dishId) === dish.id)[0]} 
          comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId))} />
      );
    }
    return (
    <div>
      <Header />
      <Switch>
        <Route path='/home' component={HomePage} />
        <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} />} /> 
        <Route path='/menu/:dishId' component={DishWithId} />
        <Route exact path='/contactUs' component={ContactUs} />
        <Route path='/aboutUs' component={() => <AboutUs leaders={this.props.leaders} />} />
        <Redirect to='/home' />
      </Switch>
      <Footer /> 
    </div>
  );
  }
}

export default withRouter(connect(mapStateToProps)(Main));
