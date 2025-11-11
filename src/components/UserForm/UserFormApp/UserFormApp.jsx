import UserForm from 'components/UserForm/UserForm';

export default function UserFormApp() {
  const formSubmitHandler = data => {
    console.log(data);
  };

  return <UserForm onSubmitForm={formSubmitHandler} />;
}
