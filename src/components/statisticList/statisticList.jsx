import PropTypes from 'prop-types';
import css from '../statisticList/statisticList.module.css';

export default function StatisticList(props) {
  const { label, percentage } = props;

  return (
    <li className={css.item}>
      <span className={css.label}>.{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>
  );
}

StatisticList.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
