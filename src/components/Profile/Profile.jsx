import React from 'react'
import { ProfileCard, AvatarImage, DescriptionContainer, ProfileName, ProfileText, StatsContainer, StatInfo, StatName, StatValue } from './Profile.styled'
// import PropTypes from 'prop-types'

const Profile = ({username, tag, location, avatar,stats}) => {
    return (
<ProfileCard className="profile">
    <DescriptionContainer className="description">
        <AvatarImage
        src={avatar}
        alt="User avatar"
        className="avatar"
        />
        <ProfileName className="name">{username}</ProfileName>
        <ProfileText className="tag">{tag}</ProfileText>
        <ProfileText className="location">{location}</ProfileText>
    </DescriptionContainer>

    <StatsContainer className="stats">
        <StatInfo>
            <StatName className="label">Followers</StatName>
            <StatValue className="quantity">{stats.followers}</StatValue>
        </StatInfo>
        <StatInfo>
            <StatName className="label">Views</StatName>
            <StatValue className="quantity">{ stats.views}</StatValue>
        </StatInfo>
        <StatInfo>
            <StatName className="label">Likes</StatName>
            <StatValue className="quantity">{stats.likes}</StatValue>
        </StatInfo>
    </StatsContainer>
</ProfileCard>
  )
}

// Profile.propTypes = {}

export default Profile
