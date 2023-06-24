import css from "./transactionHistory.module.css";
import PropTypes from 'prop-types';
export const TransactionHistory = ({data})=>{
    return(
        <table className={css["transaction-history"]}>
        <thead>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead>

        <tbody>
            {
                data.map(({ id, type, amount, currency })=>(
                    <tr key={id}>
                        <td>{type}</td>
                        <td>{amount}</td>
                        <td>{currency}</td>
                    </tr> 
                ))
            }
            
        </tbody>
        </table>
            
    )

}

PropTypes.TransactionHistory = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired,
    
}

