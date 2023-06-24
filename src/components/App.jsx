import { Profile } from "./Profile/profile.jsx";
import user from "components/user.json";
import { Statistics } from "./Statistics/statistics.jsx";
import data from "components/data.json";
import friendsData from "components/friends.json";
import { FriendList } from "./Friends/FriendList.jsx";
import transactionHistory from "components/transactions.json";
import { TransactionHistory } from "./TransactionHistory/transactionHistory.jsx";
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
