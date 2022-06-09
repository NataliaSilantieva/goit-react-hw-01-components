import user from 'database/user.json' ; 
import Profile from './components/profile.js';


export default function App() {
  return (
    <div>
      <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
    </div>
  );
}