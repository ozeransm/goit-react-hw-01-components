import { Profile } from "components/Profile/Profile";
import user from "components/user.json";
import { Statistics } from "components/Statistics/Statistics";
import data from "components/data.json";
import friendsData from "components/friends.json";
import { FriendList } from "./Friends/FriendList";
import transactionHistory from "components/transactions.json";
import { TransactionHistory } from "components/TransactionHistory/TransactionHistory";
const { username, tag, location, avatar, stats }=user;

export const App = () => {
  return (
    <div className="container">
      <Profile username={username} tag={tag} location={location} avatar={avatar} stats={stats} />
      <Statistics title={'Upload stats'} data={data}/>
      <FriendList data={friendsData}/> 
      <TransactionHistory data={transactionHistory}/>
    </div>
  );
};
