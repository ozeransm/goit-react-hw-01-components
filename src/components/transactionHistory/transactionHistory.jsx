import { TransactionHistoryItem } from "components/transactionHistory/transactionHistoryItem"
export const TransactionHistory = (data)=>{
    return(
        <table className="transaction-history">
        <thead>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead>

        <tbody>
            {
                data.data.map((elem)=>(
                    <TransactionHistoryItem key={elem.id} data={elem}/>
                ))
            }
            
        </tbody>
        </table>
            
    )

}