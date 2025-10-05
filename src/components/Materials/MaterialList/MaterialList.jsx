import MaterialItem from 'components/Materials/MaterialItem';

const MaterialList = ({ items, ...otherProps }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <MaterialItem item={item} {...otherProps} />
          <hr />
        </li>
      ))}
    </ul>
  );
};
export default MaterialList;
