import React, { Component } from 'react';
import {connect} from 'react-redux';
import {changeCity, thunk_action_creator} from '../actions/portfolioActions';

class App extends Component {
  constructor(props){
    super(props);
    this.customizePortfolio = this.customizePortfolio.bind(this);
  }

  customizePortfolio(e){
    e.preventDefault();
    const portfolioId = e.target.parentElement.getAttribute('id');
  }
  
  render() {
    return (         
        <div className="portfolios">
          {
            this.props.portfolio.map((portfolio, index) => {              
              return (
                <div key={index} className="portfolio" id={index+1}>
                  <p className="portfolio-heading">{portfolio.name}</p>
                  <div className="terms-info">
                    <span className="terms"> Volatility </span>
                    <span className="terms-rate">{portfolio.volatility}</span>
                  </div>
                   <div className="terms-info">
                    <span className="terms">Mean Return</span>
                    <span className="terms-rate">{portfolio.mean_return}</span>
                  </div>
                  <div className="terms-info">
                    <span className="terms">Currency</span>
                    <span className="terms-rate">{portfolio.currency}</span>
                  </div>
                  <button onClick={this.customizePortfolio}>Customize</button>
                </div>
              )
            })
          }
        </div>      
    );
  }
}

const mapStateToProps = (state) => {
  return {
    portfolio: state.portfolio
  }
}

export default connect(mapStateToProps, null)(App);
