import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import numeral from 'numeral'

const ExpenseListItem = ({id, description, amount, createdAt}) => (
    <div>
        <h2><Link to={`/edit/${id}`}>{description}</Link></h2>
        <p>
            ₹{numeral(amount/100).format('0,0.00')}
            -
            {moment(createdAt).format('MMM Do, YYYY')}
        </p>
        
    </div>
)

export default ExpenseListItem