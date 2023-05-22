import PropTypes from 'prop-types';

export default function StatisticList(props) {
  const { label, percentage } = props;

  return (
    <li class="item">
      <span class="label">.{label}</span>
      <span class="percentage">{percentage}%</span>
    </li>
  );
}

StatisticList.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
