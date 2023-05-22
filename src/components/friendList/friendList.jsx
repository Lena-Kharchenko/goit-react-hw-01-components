import PropTypes from 'prop-types';
import FriendListItem from '../friendListItem/friendListItem';
import css from '../friendList/friendList.module.css';

export default function FriendList({ friends }) {
  const friendList = friends.map(friend => (
    <FriendListItem
      key={friend.id}
      avatar={friend.avatar}
      name={friend.name}
      isOnline={friend.isOnline}
    />
  ));
  return <ul className={css.friend_list}>{friendList}</ul>;
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
