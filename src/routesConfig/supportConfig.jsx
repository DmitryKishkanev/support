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
      'Данное приложение реализовано на основе функциональных и классовых компонентов React. Заполни форму и нажми кнопку “отправить”, которая станет активной только после установки галочки в чекбокс "Согласен с условием". Результат смотри в консоли.',
    element: <UserFormApp />,
  },
  {
    path: 'SignupForm',
    label: 'UseLocalStorage',
    description:
      'Приложение реализовано на основе функциональных компонентов React с использованием встроенных и кастомных хуков, а также демонстрирует взаимодействие с браузерным хранилищем Local Storage. Заполни пустые поля формы и перезагрузи страничку браузера, данные сохранятся - это демонстрация работы Local Storage.',
    element: <SignupForm />,
  },
  {
    path: 'CounterApp',
    label: 'Counter',
    description:
      'Данное приложение реализовано на основе функциональных и классовых компонентов React. Нажимая на кнопки “уменьшить на 1” или “увеличить на 1” – соответственно меняется счётчик. Левый счётчик начинается с нуля, правый - с десяти. ',
    element: <CounterApp />,
  },
  {
    path: 'Dropdown',
    label: 'Dropdown',
    description:
      'Данное приложение реализовано на основе классовых компонентов React и демонстрирует использование условного рендеринга для управления отображением интерфейса. Нажимая на кнопку “показать/скрыть” - соответственно скрывается/показывается выпадающее меню.',
    element: <Dropdown />,
  },
  {
    path: 'ColorPicker',
    label: 'ColorPicker',
    description:
      'Данное приложение реализовано на основе классовых компонентов React. В данном случае используется разновидность классового компонента – React.PureComponent (он похож на обычный React.Component, но автоматически реализует метод shouldComponentUpdate - сравнивает старые и новые props и state, если значения не изменились, компонент не будет перерисован.). Нажимая на любой цвет – в поле «выбран цвет» отображается соответственно, выбранный цвет.',
    element: <ColorPicker options={colorPickerOptions} />,
  },
  {
    path: 'TodoComponent',
    label: 'Todo',
    description:
      'Данное приложение реализовано на основе функциональных и классовых компонентов React с использованием методов жизненного цикла. Приложение добавляет/удаляет заметки, есть возможность фильтровать созданные и отмечать выполненные заметки. Также в приложении отображается общее количество и количество выполненных заметок.',
    element: <TodoComponent />,
  },
  {
    path: 'CafeFeedbackComponent',
    label: 'CafeFeedback',
    description:
      'Данное приложение реализовано на основе функциональных и классовых компонентов React. Приложение фиксирует отзывы в категориях – "хороший", "нейтральный", "плохой". Отображает общее количество отзывов и подсчитывает процент положительных отзывов от общего количества. Кнопка "reset" сбрасывает все отображения.',
    element: <CafeFeedbackComponent />,
  },
  {
    path: 'PhonebookEditor',
    label: 'Phonebook',
    description:
      'Данное приложение реализовано на основе функциональных и классовых компонентов React. Приложение записывает и сохраняет имя с номером телефона в виде классической телефонной книги. Контакты можно удалять или фильтровать по имени.',
    element: <PhonebookEditor />,
  },
  {
    path: 'LoginForm',
    label: 'LoginForm',
    description:
      'Данное приложение реализовано на основе функциональных компонентов React, с использованием - дополнительных библиотек Yup и Formik. Заполни форму, нажми кнопку “Submit”. Результат смотри в консоли.',
    element: <LoginForm />,
  },
  {
    path: 'ProductReviewForm',
    label: 'ProductReviewForm',
    description:
      'Данное приложение реализовано на основе функциональных компонентов React, с использованием - дополнительных библиотек Yup и Formik. Заполни форму, нажми кнопку “Submit”. Результат смотри в консоли.',
    element: <ProductReviewForm />,
  },
  {
    path: 'ModalApp',
    label: 'Modal',
    description:
      'Данное приложение реализовано на основе классовых компонентов React с использованием методов жизненного цикла. При нажатии на кнопку «Open» - открывается модельное окно, внутри которого может находиться любой контент, также тут рендерится таймер, который останавливается при закрытии модельного окна. Модельное окно закрывается не только при нажатии на кнопку «Close», но и при нажатии на кнопку «esc» на клавиатуре или щёлкнув мышкой в область backdrop. ',
    element: <ModalApp />,
  },
  {
    path: 'Tabs',
    label: 'Tabs',
    description:
      'Данное приложение реализовано на основе классовых компонентов React. При нажатии на любую из предложенных кнопок – «Tab1», «Tab2», «Tab3» - ниже отображается соответствующая информация.',
    element: <Tabs items={initialTabs} />,
  },
  {
    path: 'Example',
    label: 'Player',
    description:
      'Данное приложение реализовано на основе функциональных и классовых компонентов React. При нажатии на любую из ссылок отобоажается сообщение о том, что идёт загрузка видео, а при нажатии на кнопку «play» - исчезает сообщение и начинает проигрываться видео. ',
    element: <Example />,
  },
  {
    path: 'ReaderComponent',
    label: 'Reader',
    description:
      'Данное приложение реализовано на основе функциональных и классовых компонентов React. В приложении кнопками «вперёд/назад» пролистываются страницы с контентом если, пролистывая дойти до последней/первой страницы, то кнопка «вперёд/назад» становится неактивной. Также под кнопками отображается нумерация страниц и если перезагрузить страничку браузера, то та страница, на которой остановилось пролистывание останется активной.',
    element: <ReaderComponent items={publication} />,
  },
  {
    path: 'Pokemon',
    label: 'Pokemon',
    description:
      'Данное приложение реализовано на основе функциональных и классовых компонентов React и демонстрирует взаимодействие с серверной частью (бэкендом). В приложении совершает поиск описания покемона по его имени при помощи fetch – запроса на бэкенд. Если в поле поиска ввести имя покемона и нажать кнопку «найти», то сначала отобразится картинка с информацией о том, что идёт запрос, а после этого карточка с информацией об ожидаемом покемоне. Но если в поле ввести не существующее имя покемона или просто случайный набор букв, то сначала отобразиться картинка с информацией о том, что идёт запрос, а после этого картинка с информацией об отсутствии изображения и сообщение о том, что нет покемона с данным именем.',
    element: <Pokemon />,
  },
  {
    path: 'MaterialRenderComponent',
    label: 'Materials',
    description:
      'Данное приложение реализовано на основе функциональных и классовых компонентов React с использованием методов жизненного цикла и демонстрирует взаимодействие с серверной частью (бэкендом). В приложении используется несколько основных http – методов: POST – создаёт новый ресурс, GET – получает набор ресурсов или один ресурс, PUT - обновляет существующий ресурс или создает новый, DELETE - удаляет ресурс. При первой загрузке приложения реализуется GET – метод, о чём говорит отображение нескольких материалов под формой. Любой из отображаемых материалов можно удалить, это действие реализуется за счёт DELETE – метода или редактировать – это пример работы PUT – метода. При нажатии на кнопку «Редактировать» - открывается модельное окно, внутри которого, в качестве демонстрации, нажимая на ещё одну кнопку «Редактировать» - меняется содержимое пункта «Название» материала на текущую дату. Также можно добавить новый материал, заполнив пустые поля формы и нажав кнопку «Добавить» - реализовано за счёт POST – метода.',
    element: <MaterialRenderComponent />,
  },
  {
    path: 'HooksSignupForm',
    label: 'HooksSignupForm',
    description:
      'Данное приложение реализовано на основе функциональных компонентов React с использованием встроенных хуков, а также демонстрирует взаимодействие с браузерным хранилищем Local Storage. Заполни пустые поля формы и перезагрузи страничку браузера, данные сохранятся - это демонстрация работы Local Storage. Нажми на кнопку "Зарегистрироваться" результат смотри в консоли',
    element: <HooksSignupForm />,
  },
  {
    path: 'HooksColorPicker',
    label: 'HooksColorPicker',
    description:
      'Данное приложение реализовано на основе функциональных компонентов React с использованием встроенных хуков. В приложении используется memo — это функция-обёртка для компонентов, которая предотвращает их повторный рендер, если пропсы не изменились. Нажимая на любой цвет – в поле «выбран цвет» отображается соответственно, выбранный цвет.',
    element: <HooksColorPicker options={colorPickerOptions} />,
  },
  {
    path: 'HooksCounter',
    label: 'HooksCounter',
    description:
      'Данное приложение реализовано на основе функциональных компонентов React с использованием встроенных хуков. Нажимая на кнопки “Кликнули counterA/Кликнули counterB” – внутри соответствующей кнопки отображается количество кликов по ней, а выше – отображается общее количество кликов по обеим кнопкам.',
    element: <HooksCounter />,
  },
  {
    path: 'HooksClock',
    label: 'HooksClock',
    description:
      'Данное приложение реализовано на основе функциональных компонентов React с использованием встроенных хуков useState и useEffect. Оно демонстрирует поведение компонента при внезапном размонтировании: таймер останавливается как по нажатию на кнопку «Остановить», так и при закрытии приложения.',
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
