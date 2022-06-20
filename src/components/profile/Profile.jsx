
import PropTypes from 'prop-types';
import s from './Profile.module.css';

const Profile = ( {username = 'unknown' , tag, location, avatar, stats} ) => {
    return (
      <div className={s.profile}>
    <div className="description">
      <img
        src={avatar}
        alt={username}
        className={s.avatar}
      />
      <p className={s.username}>{username}</p>
      <p className={s.tag}>@{tag}</p>
      <p className="location">{location}</p>
    </div>
  
    <ul className={s.stats}>
      <li>
        <span className="label">Followers</span>
        <span className="quantity">{stats.followers}</span>
      </li>
      <li>
        <span className="label">Views</span>
        <span className="quantity">{stats.views}</span>
      </li>
      <li>
        <span className="label">Likes</span>
        <span className="quantity">{stats.likes}</span>
      </li>
    </ul>
  </div>
    );
  };
  
  Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
    })
  };
  
  export default Profile;