export default function UserMenu({ onLogOut, user }) {
  return (
    <div>
      <img src={user.avatar} alt="" width="32" height="32" />
      <p>Добро пожаловать, {user.name}</p>
      <button type="button" onClick={onLogOut}>
        Выйти
      </button>
    </div>
  );
}
