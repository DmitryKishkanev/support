import { NavLink } from 'react-router-dom';

export default function NavigationItem({ to, text, icon }) {
  return (
    <li>
      <NavLink to={to}>
        {icon} {text}
      </NavLink>
    </li>
  );
}
