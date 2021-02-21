import { createStore } from 'vuex'

const store = createStore({
  state: () => {
    return {
      colors: ['#5f0f40', '#9a031e', '#fb8b24', '#e36414', '#0f4c5c', '#233245'],
      charts: {
        valueBar: {
          align: 'center'
        }
      },
      cash: {
        income: {
          sources: [
            { primary: 'Amick Lawn Care', secondary: 'Paycheck'},
            { primary: 'Ebay Reselling', secondary: 'Reselling'},
            { primary: 'Robinhood Dividend Portfolio', secondary: 'Dividend Income'},
          ],
          allocation: [
            { key: 'Investments', value: 55 },
            { key: 'Spending', value: 15 },
            { key: 'Savings', value: 10 },
            { key: 'Retirement', value: 7.5 },
            { key: 'Travel Fund', value: 7.5 },
            { key: 'Other', value: 5 },
          ],
          history: [
            {
              date: { month: 'Jan', date: 12 },
              text: { primary: 'Paycheck', secondary: 'Amick Lawn Care' },
              value: { isPositive: true, amount: 123.30 }
            },
            {
              date: { month: 'Mar', date: 14 },
              text: { primary: 'Bonus', secondary: 'Amick Lawn Care' },
              value: { isPositive: true, amount: 334 }
            },
            {
              date: { month: 'Jan', date: 12 },
              text: { primary: 'Paycheck', secondary: 'Guard' },
              value: { isPositive: true, amount: 234 }
            },
          ]
        },
        expenses: {
          isPositive: false,
          history: [
            {
              date: { month: 'Jan', date: 15 },
              text: { primary: 'Food and gas', secondary: 'PSECU Checking' },
              value: { amount: 46.16 }
            }
          ],
          catagories: [
            {
              text: { primary: 'Housing', secondary: 'Living' },
              value: { amount: 453.67 }
            }
          ]
        },
        transfers: {
          isPositive: null,
          labels: ['from', 'to'],
          history: [
            {
              date: { month: 'Jan', date: 12 },
              text: { primary: 'Savings', secondary: 'Checking' },
              value: { amount: 234 }
            },
          ]
        },
        accounts: {
          accounts: [
            {
              text: { primary: 'PSECU Checking', secondary: 'Checking' },
              value: { isPositive: true, amount: 345.67 }
            },
            {
              text: { primary: 'PSECU Savings', secondary: 'Savings' },
              value: { isPositive: true, amount: 345.67 }
            }
          ]
        }
      }
    }
  }
})

export default store;