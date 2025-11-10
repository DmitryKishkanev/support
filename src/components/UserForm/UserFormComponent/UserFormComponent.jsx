import UserForm from '../UserForm/UserForm';

export default function UserFormComponent() {
  const formSubmitHandler = data => {
    console.log(data);
  };

  return <UserForm onSubmitForm={formSubmitHandler} />;
}
