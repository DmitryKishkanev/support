import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import BackLink from 'components/BackLink';

const DogDetails = () => {
  const { dogId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/dogs';

  // useEffect(() => {
  //   // HTTP Запрос, если нужно
  // }, []);

  return (
    <>
      <BackLink to={backLinkHref}>Back to dogs</BackLink>
      <h1>DogDetails: {dogId}</h1>
      <ul>
        <li>
          <Link to="subbreeds">Типы породы</Link>
        </li>
        <li>
          <Link to="gallery">Галерея</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default DogDetails;
