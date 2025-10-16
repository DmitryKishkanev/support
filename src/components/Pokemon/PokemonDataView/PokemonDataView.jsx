import PropTypes from 'prop-types';

export default function PokemonDataView({ pokemon: { sprites, name, stats } }) {
  return (
    <div>
      <p>{name}</p>
      <img
        src={sprites.other['official-artwork'].front_default}
        alt={name}
        width="240"
      />
      <ul>
        {stats.map(entry => (
          <li key={entry.stat.name}>
            {entry.stat.name}: {entry.base_stat}
          </li>
        ))}
      </ul>
    </div>
  );
}

PokemonDataView.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    sprites: PropTypes.shape({
      other: PropTypes.shape({
        'official-artwork': PropTypes.shape({
          ront_default: PropTypes.string,
        }),
      }),
    }),
    stats: PropTypes.arrayOf(
      PropTypes.shape({
        base_stat: PropTypes.number,
        stat: PropTypes.shape({
          name: PropTypes.string,
        }),
      }),
    ),
  }).isRequired,
};
