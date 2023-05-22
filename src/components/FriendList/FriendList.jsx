import css from './FriendList.module.css';
import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => (
  <ul className={css.friendList}>
    {friends.map(({ id, avatar, isOnline, name }) => (
      <FriendListItem
        key={id}
        avatar={avatar}
        isOnline={isOnline}
        name={name}
      />
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.object,
};
