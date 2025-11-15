import { Route, Routes } from 'react-router-dom';
// import { supportConfig } from '@/routes/supportConfig';
// import Layout from 'components/Layout';
// import Home from '@/pages/Home';
// import SupportApplications from '@/pages/SupportApplications';
import style from 'components/App/App.module.css';

// export default function App() {
//   return (
//     <div className={style.app}>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="SupportApplications" element={<SupportApplications />}>
//             {supportConfig.map(({ path, element }) => (
//               <Route key={path} path={path} element={element} />
//             ))}
//           </Route>
//         </Route>
//       </Routes>
//     </div>
//   );
// }

import { Component } from 'react';
import Home from '@/pages/Home';
import Dogs from '@/pages/Dogs';
import DogDetails from '@/pages/DogDetails';
import Layout from '../Layout';
import Gallery from '../Gallery';
import Subbreeds from '../Subbreeds';

class App extends Component {
  render() {
    return (
      <div className={style.app}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/dogs" element={<Dogs />} />
            <Route path="/dogs/:dogId" element={<DogDetails />}>
              <Route path="subbreeds" element={<Subbreeds />} />
              <Route path="gallery" element={<Gallery />} />
            </Route>
          </Route>
        </Routes>
      </div>
    );
  }
}

export default App;
