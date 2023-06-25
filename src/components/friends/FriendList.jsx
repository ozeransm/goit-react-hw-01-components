import PropTypes from 'prop-types';
import { FriendListItem } from "./friendsListItem";
import css from "./friends.module.css";
export const FriendList = ({data})=>{
    
    return(
        <ul className={css["friend-list"]}>
            {
                data.map(({ id, avatar, name, isOnline })=>(
                    
                    <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline}/>
                ))
            }
  
        </ul>
    );
}
FriendList.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
           
        }).isRequired
    ).isRequired,
    
}
