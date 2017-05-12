import React, { Component } from 'react';
import './Credit.css';

class Credit extends Component {
  render() {
    return (
      <div className="Credit">
        <div className="Credit-header">
          <h2>What is Credit and Why do I need it?</h2>
        </div>
        <p className="Credit-intro">
           Credit is basically the bank (and society's) way of identifying how trustworthy you are. Most of us wouldn't trust a complete stranger with our wallets, let alone give them a loan to buy a house. That's where Credit comes in. Without developing your credit, getting a loan from the bank, getting an apartment, and renting a car all become a lot more difficult (not to mention expensive).
        </p>
        <div>
          <h3>How to Develop Your Credit Score</h3>
        </div>
        <p className="Credit-intro">
           The first step in developing your FICO score is to open a bank account for six months or longer, with at least one credit card. Now here's the most important thing to remember - whenever you make a purchase on your credit card - <strong>MAKE SURE YOU HAVE ENOUGH MONEY TO PAY OFF THE PURCHASE.</strong> Buying things on credit can be extremely appealing and fun, until you start accruing late fees, overdrafts, etc...
           It is through these charges that the credit card companies make a bulk of their money. By using your credit card to purchase goods, and by paying off your credit card in full every month, you are effectively telling the bank and creditors that you are dependable, thereby building your credit with them (bank cred, fo real).
        </p>
      </div>
    );
  }
}

export default Credit;
