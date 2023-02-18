import React from 'react'
import { ProfileCard, AvatarImage, DescriptionContainer, ProfileName, ProfileText, StatsContainer, StatInfo, StatName, StatValue} from './Profile.styled'
// import PropTypes from 'prop-types'

const Profile = ({username, tag, location, avatar,stats}) => {
    return (
<ProfileCard>
    <DescriptionContainer className="description">
        <AvatarImage
        src={avatar}
        alt="User avatar"
        />
        <ProfileName>{username}</ProfileName>
        <ProfileText>{tag}</ProfileText>
        <ProfileText>{location}</ProfileText>
    </DescriptionContainer>

    <StatsContainer>
        <StatInfo>
            <StatName>Followers</StatName>
            <StatValue>{stats.followers}</StatValue>
        </StatInfo>
        <StatInfo>
            <StatName>Views</StatName>
            <StatValue>{ stats.views}</StatValue>
        </StatInfo>
        <StatInfo>
            <StatName>Likes</StatName>
            <StatValue>{stats.likes}</StatValue>
        </StatInfo>
    </StatsContainer>
</ProfileCard>
  )
}

// Profile.propTypes = {}

export default Profile
