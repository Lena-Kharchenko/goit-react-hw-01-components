import PropTypes from 'prop-types';
import css from '../transactionHistory/transactionHistory.module.css';

export default function TransactionHistory({ items }) {
  //   const { type, amount, currency } = props;
  return (
    <table className={css.transaction_history}>
      <thead>
        <tr>
          <th className={css.header}>Type</th>
          <th className={css.header}>Amount</th>
          <th className={css.header}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id} className={css.row}>
            <td className={css.field}>{type}</td>
            <td className={css.field}>{amount}</td>
            <td className={css.field}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
