import PropTypes from 'prop-types'
import { StatsBoard, StatsContainer, BoardTitle, StatItem, StatItemText  } from './Statistics.styled'

const Statistics = ({ title, stats }) => {
  return (
    <StatsBoard className="statistics">
        {title && <BoardTitle>{title}</BoardTitle>}
  
        <StatsContainer>
            {stats.map(stat => (<StatItem items={stats.length} key={stat.id}>
            <StatItemText>{stat.label}</StatItemText>
            <StatItemText>{stat.percentage}%</StatItemText>
            </StatItem>))}
        </StatsContainer>
</StatsBoard>
  )
}

Statistics.propTypes = {
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.string.isRequired,
    })),
    title: PropTypes.string
};

export default Statistics