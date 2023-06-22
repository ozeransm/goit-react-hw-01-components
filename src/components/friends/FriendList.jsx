import { FriendListItem } from "./friendsListItem";

export const FriendList = (data)=>{
    
    return(
        <ul className="friend-list">
            {
                data.data.map(({ id, avatar, name, isOnline }, i)=>(
                    
                    <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline}/>
                ))
            }
  
        </ul>
    );
}
