import React from 'react'
import PropTypes from 'prop-types'
import { ListItem, StatusIndicatorOnline, StatusIndicatorOffline, UserImage, UserName } from './FriendList.styled';

const FriendListItem = ({ friend}) => {
    const { avatar, name, isOnline, id  } = friend;
  return (
      <ListItem key={id}>
          {isOnline ? <StatusIndicatorOnline>{isOnline}</StatusIndicatorOnline> : <StatusIndicatorOffline>{isOnline}</StatusIndicatorOffline>}
        
        <UserImage src={avatar} alt="User avatar" />
        <UserName>{ name}</UserName>
    </ListItem>
  )
}

FriendListItem.propTypes = {
  friend: PropTypes.shape({
   avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
    id: PropTypes.number.isRequired
})   
}

export default FriendListItem