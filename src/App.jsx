import Container from './components/container/Container.js';
import user from './components/database/user.json'; 
import Profile from './components/profile/Profile.jsx';


import Statistics from './components/statistics/Statistics';
import data from './components/database/data.json';

import FriendList from './components/FriendList/FriendList';
import friends from './components/database/friends.json';

import TransactionHistory from './components/transactionHistory/TransactionHistory';
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