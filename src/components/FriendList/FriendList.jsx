import React from 'react'
import PropTypes from 'prop-types'
import FriendListItem from 'components/FriendListItem/FriendListItem'

import { FriendListContainer } from './FriendList.styled'

const FriendList = ({friends}) => {
  return (
    <FriendListContainer>
        {friends.map((friend) => <FriendListItem friend={friend} />)}
    </FriendListContainer>
  )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.string,
        name: PropTypes.string,
        isOnline: PropTypes.bool,
        id: PropTypes.number.isRequired,
    })
    ),
}

export default FriendList