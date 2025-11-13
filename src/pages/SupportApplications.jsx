import { NavLink, Outlet } from 'react-router-dom';
import {
  SupportApplicationsMain,
  SupportApplicationsList,
  SupportApplicationsItem,
  StyledNavLink,
} from '@/pages/SupportApplications.styled';

export default function SupportApplications() {
  return (
    <SupportApplicationsMain>
      <h2>Support applications</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>

      <SupportApplicationsList>
        <SupportApplicationsItem>
          <StyledNavLink to="UserForm">UserForm</StyledNavLink>
        </SupportApplicationsItem>
        <SupportApplicationsItem>
          <NavLink to="SignupForm">UseLocalStorage</NavLink>
        </SupportApplicationsItem>
        <SupportApplicationsItem>
          <NavLink to="Counter">Counter</NavLink>
        </SupportApplicationsItem>
        <SupportApplicationsItem>
          <NavLink to="Dropdown">Dropdown</NavLink>
        </SupportApplicationsItem>
        <SupportApplicationsItem>
          <NavLink to="ColorPicker">ColorPicker</NavLink>
        </SupportApplicationsItem>
        <SupportApplicationsItem>
          <NavLink to="TodoComponent">Todo</NavLink>
        </SupportApplicationsItem>
        <SupportApplicationsItem>
          <NavLink to="CafeFeedbackComponent">CafeFeedback</NavLink>
        </SupportApplicationsItem>
        <SupportApplicationsItem>
          <NavLink to="PhonebookEditor">Phonebook</NavLink>
        </SupportApplicationsItem>
        <SupportApplicationsItem>
          <NavLink to="LoginForm">LoginForm</NavLink>
        </SupportApplicationsItem>
        <SupportApplicationsItem>
          <NavLink to="ProductReviewForm">ProductReviewForm</NavLink>
        </SupportApplicationsItem>
        <SupportApplicationsItem>
          <NavLink to="ModalApp">Modal</NavLink>
        </SupportApplicationsItem>
        <SupportApplicationsItem>
          <NavLink to="Tabs">Tabs</NavLink>
        </SupportApplicationsItem>
        <SupportApplicationsItem>
          <NavLink to="Example">Player</NavLink>
        </SupportApplicationsItem>
        <SupportApplicationsItem>
          <NavLink to="ReaderComponent">Reader</NavLink>
        </SupportApplicationsItem>
        <SupportApplicationsItem>
          <NavLink to="Pokemon">Pokemon</NavLink>
        </SupportApplicationsItem>
        <SupportApplicationsItem>
          <NavLink to="MaterialRenderComponent">Materials</NavLink>
        </SupportApplicationsItem>
        <SupportApplicationsItem>
          <NavLink to="HooksSignupForm">HooksSignupForm</NavLink>
        </SupportApplicationsItem>
        <SupportApplicationsItem>
          <NavLink to="HooksColorPicker">HooksColorPicker</NavLink>
        </SupportApplicationsItem>
        <SupportApplicationsItem>
          <NavLink to="HooksCounter">HooksCounter</NavLink>
        </SupportApplicationsItem>
        <SupportApplicationsItem>
          <NavLink to="HooksClock">HooksClock</NavLink>
        </SupportApplicationsItem>
        <SupportApplicationsItem>
          <NavLink to="AppBar">AppBarComponent</NavLink>
        </SupportApplicationsItem>
        <SupportApplicationsItem>
          <NavLink to="SkipEffectOnFirstRender">
            SkipEffectOnFirstRender
          </NavLink>
        </SupportApplicationsItem>
        <SupportApplicationsItem>
          <NavLink to="HooksPokemon">HooksPokemon</NavLink>
        </SupportApplicationsItem>
        <SupportApplicationsItem>
          <NavLink to="HooksUseReduserCounter">HooksUseReduserCounter</NavLink>
        </SupportApplicationsItem>
        <SupportApplicationsItem>
          <NavLink to="Friends">Friends</NavLink>
        </SupportApplicationsItem>
        <SupportApplicationsItem>
          <NavLink to="NewsComponent">News</NavLink>
        </SupportApplicationsItem>
        <SupportApplicationsItem>
          <NavLink to="LoadMoreComponent">LoadMoreComponent</NavLink>
        </SupportApplicationsItem>
        <SupportApplicationsItem>
          <NavLink to="ContextApp">ContextAlert</NavLink>
        </SupportApplicationsItem>
      </SupportApplicationsList>
      <Outlet />
    </SupportApplicationsMain>
  );
}
