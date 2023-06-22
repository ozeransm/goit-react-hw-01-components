import PropTypes from 'prop-types';
export const TransactionHistoryItem = (({data: { type, amount, currency }})=>{
return(
    <tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
)    

})
PropTypes.Statistics = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
}