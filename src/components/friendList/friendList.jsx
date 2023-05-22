import PropTypes from 'prop-types';
import FriendListItem from '../friendListItem/friendListItem';

export default function FriendList({ friends }) {
  const friendList = friends.map(friend => (
    <FriendListItem
      key={friend.id}
      avatar={friend.avatar}
      name={friend.name}
      isOnline={friend.isOnline}
    />
  ));
  return <ul class="friend-list">{friendList}</ul>;
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
