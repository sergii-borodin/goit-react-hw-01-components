import React from 'react'
import PropTypes from 'prop-types'
import { StatsBoard, StatsContainer, BoardTitle, StatInfo  } from './Statistics.styled'

const Statistics = ({title, stats}) => {
  return (
    <StatsBoard className="statistics">
        {title && <BoardTitle>Upload stats</BoardTitle>}
  
        <StatsContainer className="stat-list">
            {stats.map(stat => (<StatInfo key={stat.id}>
            <span className="label">{stat.label}</span>
            <span className="percentage">{stat.percentage}</span>
            </StatInfo>))}
        </StatsContainer>
</StatsBoard>
  )
}

Statistics.propTypes = {stats: PropTypes.arrayOf(PropTypes.object)};

export default Statistics