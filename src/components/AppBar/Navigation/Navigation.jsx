import NavigationItem from 'components/AppBar/NavigationItem/';

export default function Navigation({ items }) {
  return (
    <ul>
      {items.map(item => (
        <NavigationItem key={item.text} {...item} />
      ))}
    </ul>
  );
}
