import { useParams } from 'react-router-dom';

const Gallery = () => {
  const { dogId } = useParams();

  // useEffect(() => {
  //   // HTTP Запрос, если нужно
  // }, []);

  return <div>Image Gallery: {dogId}</div>;
};

export default Gallery;
