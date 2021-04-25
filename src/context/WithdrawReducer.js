export const WithdrawReducer = (state, action) => {
    switch (action.type) {
        case 'INITIALIZE':
            return [...action.transactions]
        case 'ADD_TRAN':
            return [...state, {
                user: action.transaction.user,
                to: action.transaction.to,
                email: action.transaction.email,
                ammount: action.todo.ammount,
                status: action.transaction.status,
            }]
        case 'EDIT_TRAN':
            return state.map(transaction => {
                if (transaction.id === action.value.id) {
                    transaction.user = action.value.user
                    transaction.to = action.value.to
                    transaction.email = action.value.email
                    transaction.ammount = action.value.ammount
                    transaction.status = action.value.status
                }
                return transaction;
            })
        case 'REMOVE_TRAN':
            return state.filter(transaction => transaction.id !== action.id)
        default:
            return state;
    }
}