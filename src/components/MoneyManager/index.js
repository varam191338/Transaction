import {Component} from 'react'

import MoneyDetails from '../MoneyDetails'

import TransactionItem from '../TransactionItem'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {title: '', amount: 0, type: '', balance: 0, income: 0, expenses: 0}

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amount: event.target.value})
  }

  onChangeType = event => {
    this.setState({type: event.target.value})
  }

  render() {
    return (
      <div className="bg-container">
        <div>
          <h1>Hi, Richard</h1>
          <p>Welcome back to your Money Manager</p>
        </div>
        <div className="money-details">
          <ul>
            <MoneyDetails />
          </ul>
        </div>
        <form onSubmit={this.onAddTransaction}>
          <h1>Add Transaction</h1>
          <label htmlFor="title">TITLE</label>
          <br />
          <input
            type="text"
            placeholder="TITLE"
            onChange={this.onChangeTitle}
          />
          <br />
          <label htmlFor="amount">AMOUNT</label>
          <br />
          <input
            type="text"
            placeholder="AMOUNT"
            onChange={this.onChangeAmount}
          />
          <br />
          <label htmlFor="type">TYPE</label>
          <br />
          <select id="type" onChange={this.onChangeType}>
            <option value="Income">Income</option>
            <option value="Expenses">Expenses</option>
          </select>
          <br />
          <button type="submit">Add</button>
        </form>
        <div>
          <h1>History</h1>
          <div className="container">
            <p className="para">Title</p>
            <p className="para">Amount</p>
            <p className="para">Type</p>
          </div>
          <div>
            <TransactionItem />
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
