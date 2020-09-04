//Get Visible Expenses

const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate})=>{
    text = text.toLowerCase()
    return expenses.filter((expense)=>{
        const startDateMatch = startDate ? startDate.isSameOrBefore(expense.createdAt) : true
        const endDateMatch = endDate ? endDate.isSameOrAfter(expense.createdAt) : true
        const textMatch = expense.description.toLowerCase().includes(text)

        return startDateMatch && endDateMatch && textMatch
    }).sort((a, b)=>{
        if(sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1 
        }else if(sortBy === 'amount'){
            return a.amount < b.amount ? 1 : -1
        }
    })
}

export default getVisibleExpenses