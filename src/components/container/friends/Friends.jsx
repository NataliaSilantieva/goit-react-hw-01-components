import PropTypes from 'prop-types';
import FriendsItem from '../friends/FriendsItem';
import s from './Friends.module.css';

const Friends = ({ friends }) => {
  return (
    <ul class={s.friends}>
      {friends.map(friend => (
        <li class={s.item} key={friend.id}>
          <FriendsItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
};

Friends.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default Friends;