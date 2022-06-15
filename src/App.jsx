import Container from './components/container/Container.js';
import user from '.components/database/user.json'; 
import Profile from './components/profile/Profile.js';

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


    </Container>
  );
}