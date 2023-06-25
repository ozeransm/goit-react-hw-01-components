
import PropTypes from 'prop-types';
import { getRandomHexColor } from 'components/util/getRandomHexColor';
import "components/statistics/statistics.css";
export const Statistics = ({title='', data})=>{
    
    return (
        <section className="statistics">
        <h2 className="title">{title}</h2>
        <ul className="stat-list">
        {
            data.map(({ id, label, percentage})=>(
               
                <li className="item" key = {id} style={{backgroundColor: getRandomHexColor()}}>
                    <span className="label">{label}</span>
                    <span className="percentage">{percentage}%</span>
                </li>
                
            
            ))}
        </ul>
        </section>
        );

}

Statistics.propTypes = {
    title: PropTypes.string,
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired
        }).isRequired
    ).isRequired,
    
    
}
