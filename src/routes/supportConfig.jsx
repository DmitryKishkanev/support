import UserFormApp from 'components/UserForm/UserFormApp';
import SignupForm from 'components/UseLocalStorage/UseLocalStorage';
import CounterApp from 'components/Counter/CounterApp';
import Dropdown from 'components/Dropdown';
import ColorPicker from 'components/ColorPicker';
import colorPickerOptions from '@/colorPickerOptions.json';
import TodoComponent from 'components/Todo/TodoComponent';
import CafeFeedbackComponent from 'components/CafeFeedback/CafeFeedbackComponent';
import PhonebookEditor from 'components/Phonebook/PhonebookEditor';
import LoginForm from 'components/LoginForm/LoginForm';
import ProductReviewForm from 'components/ProductReviewForm';
import ModalApp from 'components/Modal/ModalApp';
import Tabs from 'components/Tabs';
import initialTabs from '@/tabs.json';
import Example from 'components/Player/Example';
import ReaderComponent from 'components/Reader/ReaderComponent';
import publication from '@/publications.json';
import Pokemon from 'components/Pokemon/Pokemon';
import MaterialRenderComponent from 'components/Materials/MaterialRenderComponent';
import HooksSignupForm from 'components/HooksSignupForm';
import HooksColorPicker from 'components/HooksColorPicker';
import HooksCounter from 'components/HooksCounter';
import HooksClock from 'components/HooksClock';
import AppBar from 'components/AppBarComponent/AppBar';
import SkipEffectOnFirstRender from 'components/SkipEffectOnFirstRender';
import HooksPokemon from 'components/HooksPokemon/HooksPokemon';
import HooksUseReduserCounter from 'components/HooksUseReduserCounter';
import Friends from 'components/Friends';
import NewsComponent from 'components/News/NewsComponent';
import LoadMoreComponent from 'components/LoadMoreComponent';
import ContextApp from 'components/ContextAlert/ContextApp';

export const supportConfig = [
  {
    path: 'UserFormApp',
    label: 'UserForm',
    description:
      'Заполни форму, нажми кнопку “отправить”. Результат смотри в консоли.',
    element: <UserFormApp />,
  },
  {
    path: 'SignupForm',
    label: 'UseLocalStorage',
    description: 'Lorem lorem lorem',
    element: <SignupForm />,
  },
  {
    path: 'CounterApp',
    label: 'Counter',
    description: 'Lorem lorem lorem',
    element: <CounterApp />,
  },
  {
    path: 'Dropdown',
    label: 'Dropdown',
    description: 'Lorem lorem lorem',
    element: <Dropdown />,
  },
  {
    path: 'ColorPicker',
    label: 'ColorPicker',
    description: 'Lorem lorem lorem',
    element: <ColorPicker options={colorPickerOptions} />,
  },
  {
    path: 'TodoComponent',
    label: 'Todo',
    description: 'Lorem lorem lorem',
    element: <TodoComponent />,
  },
  {
    path: 'CafeFeedbackComponent',
    label: 'CafeFeedback',
    description: 'Lorem lorem lorem',
    element: <CafeFeedbackComponent />,
  },
  {
    path: 'PhonebookEditor',
    label: 'Phonebook',
    description: 'Lorem lorem lorem',
    element: <PhonebookEditor />,
  },
  {
    path: 'LoginForm',
    label: 'LoginForm',
    description: 'Lorem lorem lorem',
    element: <LoginForm />,
  },
  {
    path: 'ProductReviewForm',
    label: 'ProductReviewForm',
    description: 'Lorem lorem lorem',
    element: <ProductReviewForm />,
  },
  {
    path: 'ModalApp',
    label: 'Modal',
    description: 'Lorem lorem lorem',
    element: <ModalApp />,
  },
  {
    path: 'Tabs',
    label: 'Tabs',
    description: 'Lorem lorem lorem',
    element: <Tabs items={initialTabs} />,
  },
  {
    path: 'Example',
    label: 'Player',
    description: 'Lorem lorem lorem',
    element: <Example />,
  },
  {
    path: 'ReaderComponent',
    label: 'Reader',
    description: 'Lorem lorem lorem',
    element: <ReaderComponent items={publication} />,
  },
  {
    path: 'Pokemon',
    label: 'Pokemon',
    description: 'Lorem lorem lorem',
    element: <Pokemon />,
  },
  {
    path: 'MaterialRenderComponent',
    label: 'Materials',
    description: 'Lorem lorem lorem',
    element: <MaterialRenderComponent />,
  },
  {
    path: 'HooksSignupForm',
    label: 'HooksSignupForm',
    description: 'Lorem lorem lorem',
    element: <HooksSignupForm />,
  },
  {
    path: 'HooksColorPicker',
    label: 'HooksColorPicker',
    description: 'Lorem lorem lorem',
    element: <HooksColorPicker options={colorPickerOptions} />,
  },
  {
    path: 'HooksCounter',
    label: 'HooksCounter',
    description: 'Lorem lorem lorem',
    element: <HooksCounter />,
  },
  {
    path: 'HooksClock',
    label: 'HooksClock',
    description: 'Lorem lorem lorem',
    element: <HooksClock />,
  },
  {
    path: 'AppBar',
    label: 'AppBarComponent',
    description: 'Lorem lorem lorem',
    element: <AppBar />,
  },
  {
    path: 'SkipEffectOnFirstRender',
    label: 'SkipEffectOnFirstRender',
    description: 'Lorem lorem lorem',
    element: <SkipEffectOnFirstRender />,
  },
  {
    path: 'HooksPokemon',
    label: 'HooksPokemon',
    description: 'Lorem lorem lorem',
    element: <HooksPokemon />,
  },
  {
    path: 'HooksUseReduserCounter',
    label: 'HooksUseReduserCounter',
    description: 'Lorem lorem lorem',
    element: <HooksUseReduserCounter />,
  },
  {
    path: 'Friends',
    label: 'Friends',
    description: 'Lorem lorem lorem',
    element: <Friends />,
  },
  {
    path: 'NewsComponent',
    label: 'News',
    description: 'Lorem lorem lorem',
    element: <NewsComponent />,
  },
  {
    path: 'LoadMoreComponent',
    label: 'LoadMoreComponent',
    description: 'Lorem lorem lorem',
    element: <LoadMoreComponent />,
  },
  {
    path: 'ContextApp',
    label: 'ContextAlert',
    description: 'Lorem lorem lorem',
    element: <ContextApp />,
  },
];
