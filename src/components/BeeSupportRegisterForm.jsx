const BeeSupportRegisterForm = () => {
  return (
    <form>
      <label>
        <span>Name</span>
        <input type="text" />
      </label>
      <label>
        <span>Email</span>
        <input type="text" />
      </label>
      <label>
        <span>Create a password</span>
        <input type="text" />
      </label>
      <label>
        <span>Please enter your password again</span>
        <input type="text" />
      </label>

      <button type="button">Register</button>
    </form>
  );
};

export default BeeSupportRegisterForm;
