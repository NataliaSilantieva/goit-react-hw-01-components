import Container from './components/container/Container.jsx';
import user from './components/database/user.json'; 
import Profile from './components/profile/Profile.jsx';


import Statistics from './components/statistics/Statistics.jsx';
import data from './components/database/data.json';

import FriendList from './components/FriendList/FriendList.jsx';
import friends from './components/database/friends.json';

import TransactionHistory from './components/transactionHistory/TransactionHistory.jsx';
import transactions from './components/database/transactions.json';


export default function App() {
  return (
    <Container>
      <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>

  <Statistics title="Upload stats" Stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />

    </Container>
  );
}