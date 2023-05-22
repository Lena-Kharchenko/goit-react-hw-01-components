import PropTypes from 'prop-types';
import StatisticList from '../statisticList/statisticList';

export default function Statistics(props) {
  const { title, stats } = props;

  return (
    <section class="statistics">
      {title && <h2 class="title">{title}</h2>}
      <ul class="stat_list">
        {stats.map(({ label, percentage, id }) => (
          <StatisticList key={id} label={label} percentage={percentage} />
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
