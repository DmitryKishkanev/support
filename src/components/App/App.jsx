import { Route, Routes } from 'react-router-dom';
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
import style from 'components/App/App.module.css';

import Layout from '../Layout';

export default function App() {
  return (
    <div className={style.app}>
      <Routes>
        <Route path="/" element={<Layout />} />

        <Route path="/UserForm" element={<UserFormApp />} />
        <Route path="/SignupForm" element={<SignupForm />} />
        <Route path="/Counter" element={<CounterApp />} />
        <Route path="/Dropdown" element={<Dropdown />} />
        <Route
          path="/ColorPicker"
          element={<ColorPicker options={colorPickerOptions} />}
        />
        <Route path="/TodoComponent" element={<TodoComponent />} />
        <Route
          path="/CafeFeedbackComponent"
          element={<CafeFeedbackComponent />}
        />
        <Route path="/PhonebookEditor" element={<PhonebookEditor />} />
        <Route path="/LoginForm" element={<LoginForm />} />
        <Route path="/ProductReviewForm" element={<ProductReviewForm />} />
        <Route path="/ModalApp" element={<ModalApp />} />
        <Route path="/Tabs" element={<Tabs items={initialTabs} />} />
        <Route path="/Example" element={<Example />} />
        <Route
          path="/ReaderComponent"
          element={<ReaderComponent items={publication} />}
        />
        <Route path="/Pokemon" element={<Pokemon />} />
        <Route
          path="/MaterialRenderComponent"
          element={<MaterialRenderComponent />}
        />
        <Route path="/HooksSignupForm" element={<HooksSignupForm />} />
        <Route
          path="/HooksColorPicker"
          element={<HooksColorPicker options={colorPickerOptions} />}
        />
        <Route path="/HooksCounter" element={<HooksCounter />} />
        <Route path="/HooksClock" element={<HooksClock />} />
        <Route path="/AppBar" element={<AppBar />} />
        <Route
          path="/SkipEffectOnFirstRender"
          element={<SkipEffectOnFirstRender />}
        />
        <Route path="/HooksPokemon" element={<HooksPokemon />} />
        <Route
          path="/HooksUseReduserCounter"
          element={<HooksUseReduserCounter />}
        />
        <Route path="/Friends" element={<Friends />} />
        <Route path="/NewsComponent" element={<NewsComponent />} />
        <Route path="/LoadMoreComponent" element={<LoadMoreComponent />} />
        <Route path="/ContextApp" element={<ContextApp />} />
      </Routes>
    </div>
  );
}

// import Home from '@/pages/Home';
// import Dogs from '@/pages/Dogs';
// import DogGetails from '@/pages/DogDetails';
// import Layout from '../Layout';
// import Gallery from '../Gallery';
// import Subbreeds from '../Subbreeds';

// class App extends Component {
//   render() {
//     return (
//       <div className={style.app}>
//         <Routes>
//           <Route path="/" element={<Layout />}>
//             <Route index element={<Home />} />
//             <Route path="/dogs" element={<Dogs />} />
//             <Route path="/dogs/:dogId" element={<DogGetails />}>
//               <Route path="subbreeds" element={<Subbreeds />} />
//               <Route path="gallery" element={<Gallery />} />
//             </Route>
//           </Route>
//         </Routes>
//       </div>
//     );
//   }
// }

// export default App;
