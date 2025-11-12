import { Outlet } from 'react-router-dom';
import { HeaderEl, LayoutList, NavLinkItem } from 'components/Layout.styled';

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
      <HeaderEl>
        <h1>Support components</h1>
        <LayoutList>
          <li>
            <NavLinkItem to="/UserForm">UserForm</NavLinkItem>
          </li>
          <li>
            <NavLinkItem to="/SignupForm">UseLocalStorage</NavLinkItem>
          </li>
          <li>
            <NavLinkItem to="/Counter">Counter</NavLinkItem>
          </li>
          <li>
            <NavLinkItem to="/Dropdown">Dropdown</NavLinkItem>
          </li>
          <li>
            <NavLinkItem to="/ColorPicker">ColorPicker</NavLinkItem>
          </li>
          <li>
            <NavLinkItem to="/TodoComponent">Todo</NavLinkItem>
          </li>
          <li>
            <NavLinkItem to="/CafeFeedbackComponent">CafeFeedback</NavLinkItem>
          </li>
          <li>
            <NavLinkItem to="/PhonebookEditor">Phonebook</NavLinkItem>
          </li>
          <li>
            <NavLinkItem to="/LoginForm">LoginForm</NavLinkItem>
          </li>
          <li>
            <NavLinkItem to="/ProductReviewForm">ProductReviewForm</NavLinkItem>
          </li>
          <li>
            <NavLinkItem to="/ModalApp">Modal</NavLinkItem>
          </li>
          <li>
            <NavLinkItem to="/Tabs">Tabs</NavLinkItem>
          </li>
          <li>
            <NavLinkItem to="/Example">Player</NavLinkItem>
          </li>
          <li>
            <NavLinkItem to="/ReaderComponent">Reader</NavLinkItem>
          </li>
          <li>
            <NavLinkItem to="/Pokemon">Pokemon</NavLinkItem>
          </li>
          <li>
            <NavLinkItem to="/MaterialRenderComponent">Materials</NavLinkItem>
          </li>
          <li>
            <NavLinkItem to="/HooksSignupForm">HooksSignupForm</NavLinkItem>
          </li>
          <li>
            <NavLinkItem to="/HooksColorPicker">HooksColorPicker</NavLinkItem>
          </li>
          <li>
            <NavLinkItem to="/HooksCounter">HooksCounter</NavLinkItem>
          </li>
          <li>
            <NavLinkItem to="/HooksClock">HooksClock</NavLinkItem>
          </li>
          <li>
            <NavLinkItem to="/AppBar">AppBarComponent</NavLinkItem>
          </li>
          <li>
            <NavLinkItem to="/SkipEffectOnFirstRender">
              SkipEffectOnFirstRender
            </NavLinkItem>
          </li>
          <li>
            <NavLinkItem to="/HooksPokemon">HooksPokemon</NavLinkItem>
          </li>
          <li>
            <NavLinkItem to="/HooksUseReduserCounter">
              HooksUseReduserCounter
            </NavLinkItem>
          </li>
          <li>
            <NavLinkItem to="/Friends">Friends</NavLinkItem>
          </li>
          <li>
            <NavLinkItem to="/NewsComponent">News</NavLinkItem>
          </li>
          <li>
            <NavLinkItem to="/LoadMoreComponent">LoadMoreComponent</NavLinkItem>
          </li>
          <li>
            <NavLinkItem to="/ContextApp">ContextAlert</NavLinkItem>
          </li>
        </LayoutList>
      </HeaderEl>
      <main>
        <Outlet />
      </main>
      {/* <footer>Footer</footer> */}
    </>
  );
};

export default Layout;
