import PropTypes from 'prop-types';
import styles from './friendlistitem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => (
  <div className={styles.friend}>
    <span className={`${styles.status} ${isOnline ? styles.online : styles.offline}`}></span>
    <img src={avatar} alt={`${name}'s avatar`} className={styles.avatar} />
    <p className={styles.name}>{name}</p>
  </div>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
