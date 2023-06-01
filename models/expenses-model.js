class Expenses {
  constructor() {
    // instances of Expense class
    this.expenses = [];
  }

  getAll() {
    return this.expenses;
  }

  add({ amount, description }) {
    const newExpense = {
      id: this.expenses.length + 1,
      amount,
      description,
      createdAt: new Date(),
    };

    this.expenses.push(newExpense);

    return newExpense;
  }

  get(id) {
    return this.expenses.find((expense) => expense.id === id);
  }

  update(id, expense) {
    const index = this.expenses.findIndex((expense) => expense.id === id);

    this.expenses[index] = {
      ...this.expenses[index],
      ...expense,
    };

    return this.expenses[index];
  }

  delete(id) {
    this.expenses = this.expenses.filter((expense) => expense.id !== id);
  }
}

const expensesModel = new Expenses();

module.exports = expensesModel;