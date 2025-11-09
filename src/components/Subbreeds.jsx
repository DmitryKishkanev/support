import { useParams } from 'react-router-dom';

const Subbreeds = () => {
  const { dogId } = useParams();

  // useEffect(() => {
  //   // HTTP Запрос, если нужно
  // }, []);

  return <div>Subbreeds: {dogId}</div>;
};

export default Subbreeds;
