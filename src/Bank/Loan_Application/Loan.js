import React, { Component } from 'react';
import './Loan.css';

class Loan extends Component {
  render() {
    return (
      <div className="Loan">
         <div className="Loan-header">
          <h2>What do I need to get a Loan?</h2>
        </div>
        <p className="Loan-intro">
           Looking to start your own business? How about buy a house? A car? PAy for school? Unless you've got a money tree growing in your backyard, chances are you're going to need to get a loan to pay for these things. So what exactly are you going to need? First thing's first, you're going to need some <a href="https://www.vahomeloancenters.org/patriot-act-identification-requirements/">form of Identification</a>.
           In an ideal world, that's all you would need, but get ready for a bevy of paperwork the bank, government, school, or personal lender will need from you in order to get you approved for a loan:
           LIST HERE
        </p>
      </div>
    );
  }
}

export default Loan;
