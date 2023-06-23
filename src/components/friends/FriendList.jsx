import { FriendListItem } from "./friendsListItem";
import css from "./friends.module.css";
export const FriendList = (data)=>{
    
    return(
        <ul className={css["friend-list"]}>
            {
                data.data.map(({ id, avatar, name, isOnline }, i)=>(
                    
                    <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline}/>
                ))
            }
  
        </ul>
    );
}
