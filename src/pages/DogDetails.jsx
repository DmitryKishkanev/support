import { Link, Outlet, useParams } from 'react-router-dom';

const DogGetails = () => {
  const { dogId } = useParams();

  // useEffect(() => {
  //   // HTTP Запрос, если нужно
  // }, []);

  return (
    <>
      <h1>DogGetails: {dogId}</h1>
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

export default DogGetails;
