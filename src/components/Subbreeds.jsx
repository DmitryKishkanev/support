import { useParams } from 'react-router-dom';

export const SubBreeds = () => {
  const { dogId } = useParams();

  // useEffect(() => {
  //   // HTTP Запрос, если нужно
  // }, []);

  return <div>Subbreeds: {dogId}</div>;
};
