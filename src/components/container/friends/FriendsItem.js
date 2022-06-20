import PropTypes from 'prop-types';
import s from './Friends.module.css';

const FriendsItem = ({ avatar, name, isOnline }) => {
  return (
    <li class="item">
      <span class={isOnline ? s.online : s.offline}> {isOnline} </span>
      <img class={s.avatar} src={avatar} alt={name} width="48" />
      <p class={s.name}>{name}</p>
    </li>
  );
};

FriendsItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendsItem;