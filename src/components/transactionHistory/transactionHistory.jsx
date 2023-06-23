import { TransactionHistoryItem } from "components/transactionHistory/transactionHistoryItem"
import css from "./transactionHistory.module.css";
export const TransactionHistory = (data)=>{
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
                data.data.map((elem)=>(
                    <TransactionHistoryItem key={elem.id} data={elem}/>
                ))
            }
            
        </tbody>
        </table>
            
    )

}