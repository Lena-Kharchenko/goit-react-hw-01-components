import PropTypes from 'prop-types';
import StatisticList from '../statisticList/statisticList';
import css from '../statistics/statistics.module.css';

export default function Statistics(props) {
  const { title, stats } = props;

  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.stat_list}>
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
