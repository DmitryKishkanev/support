// import { Route, Routes } from 'react-router-dom';
// import { supportConfig } from '@/routes/supportConfig';
// import Layout from 'components/Layout';
// import Home from '@/pages/Home';
// import SupportApplications from '@/pages/SupportApplications';
// import SupportApplicationsDetails from '@/pages/SupportApplicationsDetails';
// import style from 'components/App/App.module.css';

// export default function App() {
//   return (
//     <div className={style.app}>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="SupportApplications" element={<SupportApplications />} />
//           <Route
//             path="SupportApplications/:id"
//             element={<SupportApplicationsDetails />}
//           >
//             {supportConfig.map(({ path, element }) => (
//               <Route key={path} path={path} element={element} />
//             ))}
//           </Route>
//         </Route>
//       </Routes>
//     </div>
//   );
// }

import { Component, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
// import Home from '@/pages/Home';
// import Dogs from '@/pages/Dogs';
// import DogDetails from '@/pages/DogDetails';
import Layout from '../Layout';
// import Gallery from '../Gallery';
// import SubBreeds from '../SubBreeds';
import style from 'components/App/App.module.css';

const Home = lazy(() => import('@/pages/Home'));
const Dogs = lazy(() => import('@/pages/Dogs'));
const DogDetails = lazy(() => import('@/pages/DogDetails'));
const Gallery = lazy(() => import('components/Gallery'));
const SubBreeds = lazy(() =>
  import('components/SubBreeds').then(module => ({
    ...module,
    default: module.SubBreeds,
  })),
);

class App extends Component {
  render() {
    return (
      <div className={style.app}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/dogs" element={<Dogs />} />
            <Route path="/dogs/:dogId" element={<DogDetails />}>
              <Route path="subbreeds" element={<SubBreeds />} />
              <Route path="gallery" element={<Gallery />} />
            </Route>
          </Route>
        </Routes>
      </div>
    );
  }
}

export default App;
