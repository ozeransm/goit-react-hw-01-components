import PropTypes from 'prop-types';
import "components/statistics/statistics.css";
import { getRandomHexColor } from 'components/util/getRandomHexColor';
export const StatisticItem = ({stats:{ label, percentage}}) => {
    return(
        <li className="item" style={{backgroundColor: getRandomHexColor()}}>
        <span className="label">{label}</span>
        <span className="percentage">{percentage}%</span>
        </li>
          )   
}

PropTypes.Statistics = {
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired
    }