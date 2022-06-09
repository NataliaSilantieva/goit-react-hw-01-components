import user from 'database/user.json' ; 
import Profile from './components/profile.js';


export default function App() {
  return (
    <div>
      <Profile{...user} />
    </div>
  );
}