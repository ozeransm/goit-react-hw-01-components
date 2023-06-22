
import { StatisticItem } from "./statisticItem";

export const Statistics = ({title, data})=>{
    
    return (
        <section className="statistics">
        <h2 className="title">{title || ''}</h2>
        <ul className="stat-list">
        {
            data.map((elem)=>(
                
            <StatisticItem key={elem.id} stats={elem}/>
            ))}
        </ul>
        </section>
        );

}
