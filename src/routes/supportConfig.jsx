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
    description:
      'Заполни пустые поля формы и перезагрузи страничку браузера, данные сохранятся. Это демонстрация работы local storage.',
    element: <SignupForm />,
  },
  {
    path: 'CounterApp',
    label: 'Counter',
    description:
      'Нажимая на кнопки “уменьшить на 1” или “увеличить на 1” – соответственно меняется счётчик. Левый счётчик начинается с нуля, правый - с десяти. ',
    element: <CounterApp />,
  },
  {
    path: 'Dropdown',
    label: 'Dropdown',
    description:
      'Нажимая на кнопку “показать/скрыть” - соответственно скрывается/показывается выпадающее меню.',
    element: <Dropdown />,
  },
  {
    path: 'ColorPicker',
    label: 'ColorPicker',
    description:
      'Нажимая на любой цвет – в поле «выбран цвет» отображается, соответственно, выбранный цвет.',
    element: <ColorPicker options={colorPickerOptions} />,
  },
  {
    path: 'TodoComponent',
    label: 'Todo',
    description:
      'Приложение добавляет/удаляет заметки, есть возможность фильтровать созданные и отмечать выполненные заметки. Также в приложении отображается общее количество и количество выполненных заметок.',
    element: <TodoComponent />,
  },
  {
    path: 'CafeFeedbackComponent',
    label: 'CafeFeedback',
    description:
      'Приложение фиксирует отзывы в категориях – хороший, нейтральный, плохой. Отображает общее количество отзывов и подсчитывает процент положительных отзывов от общего количества. Кнопка "reset" сбрасывает все отображения.',
    element: <CafeFeedbackComponent />,
  },
  {
    path: 'PhonebookEditor',
    label: 'Phonebook',
    description:
      'Приложение записывает и сохраняет имя с номером телефона в виде классической телефонной книги. Контакты можно удалять или фильтровать по имени.',
    element: <PhonebookEditor />,
  },
  {
    path: 'LoginForm',
    label: 'LoginForm',
    description:
      'Заполни форму, нажми кнопку “Submit”. Результат смотри в консоли.',
    element: <LoginForm />,
  },
  {
    path: 'ProductReviewForm',
    label: 'ProductReviewForm',
    description:
      'Заполни форму, нажми кнопку “Submit”. Результат смотри в консоли.',
    element: <ProductReviewForm />,
  },
  {
    path: 'ModalApp',
    label: 'Modal',
    description:
      'При нажатии на кнопку «Open» - открывается модельное окно, внутри которого может находиться любой контент, также тут рендерится таймер, который останавливается при закрытии модельного окна. Модельное окно закрывается не только при нажатии на кнопку «Close», но и при нажатии на кнопку «esc» на клавиатуре или щёлкнув мышкой в область backdrop. ',
    element: <ModalApp />,
  },
  {
    path: 'Tabs',
    label: 'Tabs',
    description:
      'При нажатии на любую из предложенных кнопок – «Tab1», «Tab2», «Tab3» - приложение отображает ниже соответствующую информацию.',
    element: <Tabs items={initialTabs} />,
  },
  {
    path: 'Example',
    label: 'Player',
    description:
      'При нажатии на любую из ссылок приложение показывает сообщение о том, что идёт загрузка видео, а при нажатии на кнопку «play» - исчезает сообщение и начинает проигрываться видео. ',
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
