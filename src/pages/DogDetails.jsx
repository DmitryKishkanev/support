import { useRef, Suspense } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import BackLink from 'components/BackLink';

const DogDetails = () => {
  const { dogId } = useParams();
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/dogs');

  // useEffect(() => {
  //   // HTTP Запрос, если нужно
  // }, []);

  return (
    <>
      <BackLink to={backLinkHref.current}>Back to dogs</BackLink>
      <h1>DogDetails: {dogId}</h1>
      <ul>
        <li>
          <Link to="subbreeds">Типы породы</Link>
        </li>
        <li>
          <Link to="gallery">Галерея</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default DogDetails;
