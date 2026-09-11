const transactionForm =
    document.getElementById("transactionForm");

const descriptionInput =
    document.getElementById("description");

const amountInput =
    document.getElementById("amount");

const typeInput =
    document.getElementById("type");

const balanceElement =
    document.getElementById("balance");

const incomeElement =
    document.getElementById("income");

const expenseElement =
    document.getElementById("expense");

const transactionList =
    document.getElementById("transactionList");


let transactions =
    JSON.parse(
        localStorage.getItem("transactions")
    ) || [];


/* Add Transaction */

transactionForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        const description =
            descriptionInput.value.trim();

        const amount =
            Number(amountInput.value);

        const type =
            typeInput.value;


        if (
            description === "" ||
            amount <= 0
        ) {

            return;

        }


        const transaction = {

            id: Date.now(),

            description: description,

            amount: amount,

            type: type

        };


        transactions.push(
            transaction
        );


        saveTransactions();


        transactionForm.reset();


        displayTransactions();

        updateSummary();

    }
);


/* Save to Local Storage */

function saveTransactions() {

    localStorage.setItem(
        "transactions",
        JSON.stringify(transactions)
    );

}


/* Display Transactions */

function displayTransactions() {

    transactionList.innerHTML = "";


    transactions.forEach(
        function(transaction) {

            const transactionElement =
                document.createElement("div");


            transactionElement.classList.add(
                "transaction"
            );


            if (
                transaction.type === "income"
            ) {

                transactionElement.classList.add(
                    "income-item"
                );

            } else {

                transactionElement.classList.add(
                    "expense-item"
                );

            }


            transactionElement.innerHTML = `

                <div class="transaction-info">

                    <strong>
                        ${transaction.description}
                    </strong>

                    <span
                        class="
                        transaction-amount
                        ${
                            transaction.type === "income"
                                ? "income-amount"
                                : "expense-amount"
                        }
                        "
                    >

                        ${
                            transaction.type === "income"
                                ? "+"
                                : "-"
                        }

                        $${transaction.amount.toFixed(2)}

                    </span>

                </div>


                <button
                    class="delete-btn"
                    onclick="deleteTransaction(
                        ${transaction.id}
                    )"
                >

                    Delete

                </button>

            `;


            transactionList.appendChild(
                transactionElement
            );

        }
    );

}


/* Update Income, Expense and Balance */

function updateSummary() {

    const income =
        transactions
            .filter(function(transaction) {

                return (
                    transaction.type === "income"
                );

            })
            .reduce(
                function(total, transaction) {

                    return (
                        total +
                        transaction.amount
                    );

                },
                0
            );


    const expense =
        transactions
            .filter(function(transaction) {

                return (
                    transaction.type === "expense"
                );

            })
            .reduce(
                function(total, transaction) {

                    return (
                        total +
                        transaction.amount
                    );

                },
                0
            );


    const balance =
        income - expense;


    incomeElement.textContent =
        "$" + income.toFixed(2);

    expenseElement.textContent =
        "$" + expense.toFixed(2);

    balanceElement.textContent =
        "$" + balance.toFixed(2);

}


/* Delete Transaction */

function deleteTransaction(id) {

    transactions =
        transactions.filter(
            function(transaction) {

                return (
                    transaction.id !== id
                );

            }
        );


    saveTransactions();

    displayTransactions();

    updateSummary();

}


/* Load saved data */

displayTransactions();

updateSummary();