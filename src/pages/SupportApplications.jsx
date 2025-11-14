import { Outlet } from 'react-router-dom';
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
      <p>Click any of the links below to open the application</p>

      <SupportApplicationsList>
        <SupportApplicationsItem>
          <StyledNavLink to="UserForm">UserForm</StyledNavLink>
        </SupportApplicationsItem>
        <SupportApplicationsItem>
          <StyledNavLink to="SignupForm">UseLocalStorage</StyledNavLink>
        </SupportApplicationsItem>
        <SupportApplicationsItem>
          <StyledNavLink to="Counter">Counter</StyledNavLink>
        </SupportApplicationsItem>
        <SupportApplicationsItem>
          <StyledNavLink to="Dropdown">Dropdown</StyledNavLink>
        </SupportApplicationsItem>
        <SupportApplicationsItem>
          <StyledNavLink to="ColorPicker">ColorPicker</StyledNavLink>
        </SupportApplicationsItem>
        <SupportApplicationsItem>
          <StyledNavLink to="TodoComponent">Todo</StyledNavLink>
        </SupportApplicationsItem>
        <SupportApplicationsItem>
          <StyledNavLink to="CafeFeedbackComponent">CafeFeedback</StyledNavLink>
        </SupportApplicationsItem>
        <SupportApplicationsItem>
          <StyledNavLink to="PhonebookEditor">Phonebook</StyledNavLink>
        </SupportApplicationsItem>
        <SupportApplicationsItem>
          <StyledNavLink to="LoginForm">LoginForm</StyledNavLink>
        </SupportApplicationsItem>
        <SupportApplicationsItem>
          <StyledNavLink to="ProductReviewForm">
            ProductReviewForm
          </StyledNavLink>
        </SupportApplicationsItem>
        <SupportApplicationsItem>
          <StyledNavLink to="ModalApp">Modal</StyledNavLink>
        </SupportApplicationsItem>
        <SupportApplicationsItem>
          <StyledNavLink to="Tabs">Tabs</StyledNavLink>
        </SupportApplicationsItem>
        <SupportApplicationsItem>
          <StyledNavLink to="Example">Player</StyledNavLink>
        </SupportApplicationsItem>
        <SupportApplicationsItem>
          <StyledNavLink to="ReaderComponent">Reader</StyledNavLink>
        </SupportApplicationsItem>
        <SupportApplicationsItem>
          <StyledNavLink to="Pokemon">Pokemon</StyledNavLink>
        </SupportApplicationsItem>
        <SupportApplicationsItem>
          <StyledNavLink to="MaterialRenderComponent">Materials</StyledNavLink>
        </SupportApplicationsItem>
        <SupportApplicationsItem>
          <StyledNavLink to="HooksSignupForm">HooksSignupForm</StyledNavLink>
        </SupportApplicationsItem>
        <SupportApplicationsItem>
          <StyledNavLink to="HooksColorPicker">HooksColorPicker</StyledNavLink>
        </SupportApplicationsItem>
        <SupportApplicationsItem>
          <StyledNavLink to="HooksCounter">HooksCounter</StyledNavLink>
        </SupportApplicationsItem>
        <SupportApplicationsItem>
          <StyledNavLink to="HooksClock">HooksClock</StyledNavLink>
        </SupportApplicationsItem>
        <SupportApplicationsItem>
          <StyledNavLink to="AppBar">AppBarComponent</StyledNavLink>
        </SupportApplicationsItem>
        <SupportApplicationsItem>
          <StyledNavLink to="SkipEffectOnFirstRender">
            SkipEffectOnFirstRender
          </StyledNavLink>
        </SupportApplicationsItem>
        <SupportApplicationsItem>
          <StyledNavLink to="HooksPokemon">HooksPokemon</StyledNavLink>
        </SupportApplicationsItem>
        <SupportApplicationsItem>
          <StyledNavLink to="HooksUseReduserCounter">
            HooksUseReduserCounter
          </StyledNavLink>
        </SupportApplicationsItem>
        <SupportApplicationsItem>
          <StyledNavLink to="Friends">Friends</StyledNavLink>
        </SupportApplicationsItem>
        <SupportApplicationsItem>
          <StyledNavLink to="NewsComponent">News</StyledNavLink>
        </SupportApplicationsItem>
        <SupportApplicationsItem>
          <StyledNavLink to="LoadMoreComponent">
            LoadMoreComponent
          </StyledNavLink>
        </SupportApplicationsItem>
        <SupportApplicationsItem>
          <StyledNavLink to="ContextApp">ContextAlert</StyledNavLink>
        </SupportApplicationsItem>
      </SupportApplicationsList>
      <Outlet />
    </SupportApplicationsMain>
  );
}
