import PropTypes from 'prop-types';
import "components/friends/friends.css";
export const FriendListItem = ({ avatar, name, isOnline }) => {
    return(
    <li className="item">
        <span className="status" style={isOnline ? {backgroundColor: "green"} : {backgroundColor: "red"}}></span>
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className="name">{name}</p>
    </li>
    )
}
PropTypes.FriendList={
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
}