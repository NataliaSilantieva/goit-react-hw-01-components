import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Stats = ({ title, stats }) => {
  return (
    <section className={s.stats}>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s.statList}>
        {stats.map(stat => (
          <li className={s.item} key={stat.id}>
            <span className="label">{stat.label}</span>
            <span className="percentage">{stat.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Stats.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};
export default Stats;