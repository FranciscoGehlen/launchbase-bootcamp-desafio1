//Array
const user = {
    name: "Mariana",
    transactions: [],
    balance: 0
};

//Add transaction
function createTransaction(transaction){
    user.transactions.push(transaction)

    if (transaction.type === 'credit'){
        user.balance = user.balance + transaction.value
    } else {
        user.balance = user.balance - transaction.value
    }
}

//Report
function getHigherTransactionByType(type){
    let higherTransaction
    let higherValue = 0
    for (let transaction of user.transactions){
        if (transaction.value > higherValue && transaction.type == type){
            higherValue = transaction.value
            higherTransaction = transaction
        }
    }

    return higherTransaction
}

function getAverageTransactionValue(){
    let sum = 0

    for (let transaction of user.transactions){
        sum += transaction.value
    }

    return sum / user.transactions.length
}

function getTransactionsCount(){
    let count = {
        credit: 0,
        debit: 0
    }
    for (let transaction of user.transactions){
        if (transaction.type === 'credit'){
            count.credit++
        } else{
            count.debit++
        }
    }

    return count
}


createTransaction({ type: "credit", value: 50 });
createTransaction({ type: "credit", value: 120 });
createTransaction({ type: "debit", value: 80 });
createTransaction({ type: "debit", value: 30 });

const higherTransactionCredit = getHigherTransactionByType('credit')
const higherTransactionDebit = getHigherTransactionByType('debit')
const transactionsCount = getTransactionsCount()

console.log(`User balance: `, user.balance); // 60

console.log(`Highest credit transaction: `, higherTransactionCredit.value) // { type: 'credit', value: 120 }
console.log(`Highest debit transaction: `, higherTransactionDebit.value) // { type: 'debit', value: 80 }

console.log('Average Transaction Value: ', getAverageTransactionValue())// 70

console.log('Transactions count: ') // { credit: 2, debit: 2 }
console.log('Credit: ', transactionsCount.credit)
console.log('Debit: ', transactionsCount.debit)