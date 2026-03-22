import { UserMenuContainer } from 'components/AppBarComponent/UserMenu/UserMenu.styled';

export default function UserMenu({ onLogOut, user }) {
  return (
    <UserMenuContainer>
      <img src={user.avatar} alt="" />
      <p>Welcome, {user.name}</p>
      <button type="button" onClick={onLogOut}>
        Log out
      </button>
    </UserMenuContainer>
  );
}
