import { Profile } from "./profile/Profile";
import user from "components/user.json";
import { Statistics } from "./statistics/Statistics";
import data from "components/data.json";
import friendsData from "components/friends.json";
import { FriendList } from "./friends/FriendList";
import transactionHistory from "components/transactions.json";
import { TransactionHistory } from "./transactionHistory/TransactionHistory";
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
