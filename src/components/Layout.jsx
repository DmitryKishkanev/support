import { NavLink, Outlet } from 'react-router-dom';

// const Layout = () => {
//   return (
//     <>
//       <header>
//         <ul>
//           <li>
//             <NavLink to="/">Домашняя</NavLink>
//           </li>
//           <li>
//             <NavLink to="/dogs">Коллекция</NavLink>
//           </li>
//         </ul>
//       </header>
//       <main>
//         <Outlet />
//       </main>
//       {/* <footer>Footer</footer> */}
//     </>
//   );
// };

const Layout = () => {
  return (
    <>
      <header>
        <ul>
          <li>
            <NavLink to="/UserForm">UserForm</NavLink>
          </li>
          <li>
            <NavLink to="/SignupForm">UseLocalStorage</NavLink>
          </li>
          <li>
            <NavLink to="/Counter">Counter</NavLink>
          </li>
          <li>
            <NavLink to="/Dropdown">Dropdown</NavLink>
          </li>
          <li>
            <NavLink to="/ColorPicker">ColorPicker</NavLink>
          </li>
          <li>
            <NavLink to="/TodoComponent">Todo</NavLink>
          </li>
          <li>
            <NavLink to="/CafeFeedbackComponent">CafeFeedback</NavLink>
          </li>
          <li>
            <NavLink to="/PhonebookEditor">Phonebook</NavLink>
          </li>
          <li>
            <NavLink to="/LoginForm">LoginForm</NavLink>
          </li>
          <li>
            <NavLink to="/ProductReviewForm">ProductReviewForm</NavLink>
          </li>
          <li>
            <NavLink to="/ModalApp">Modal</NavLink>
          </li>
          <li>
            <NavLink to="/Tabs">Tabs</NavLink>
          </li>
          <li>
            <NavLink to="/Example">Player</NavLink>
          </li>
          <li>
            <NavLink to="/ReaderComponent">Reader</NavLink>
          </li>
          <li>
            <NavLink to="/Pokemon">Pokemon</NavLink>
          </li>
          <li>
            <NavLink to="/MaterialRenderComponent">Materials</NavLink>
          </li>
          <li>
            <NavLink to="/HooksSignupForm">HooksSignupForm</NavLink>
          </li>
          <li>
            <NavLink to="/HooksColorPicker">HooksColorPicker</NavLink>
          </li>
          <li>
            <NavLink to="/HooksCounter">HooksCounter</NavLink>
          </li>
          {/* <li>
            <NavLink to="/"></NavLink>
          </li> */}
          {/* <li>
            <NavLink to="/"></NavLink>
          </li> */}
          {/* <li>
            <NavLink to="/"></NavLink>
          </li> */}
          {/* <li>
            <NavLink to="/"></NavLink>
          </li> */}
          {/* <li>
            <NavLink to="/"></NavLink>
          </li> */}
          {/* <li>
            <NavLink to="/"></NavLink>
          </li> */}
          {/* <li>
            <NavLink to="/"></NavLink>
          </li> */}
          {/* <li>
            <NavLink to="/"></NavLink>
          </li> */}
          {/* <li>
            <NavLink to="/"></NavLink>
          </li> */}
        </ul>
      </header>
      <main>
        <Outlet />
      </main>
      {/* <footer>Footer</footer> */}
    </>
  );
};

export default Layout;
