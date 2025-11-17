import { useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import styled from '@emotion/styled';

const Container = styled.div`
  display: inline-flex;
  flex-direction: column;
`;

const Dogs = () => {
  const [dogs, setDogs] = useState([
    'dog-1',
    'dog-2',
    'dog-3',
    'dog-4',
    'dog-5',
  ]);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const dogId = searchParams.get('dogId') ?? '';

  const updateQueryString = evt => {
    const dogIdValue = evt.target.value;

    if (dogIdValue === '') {
      return setSearchParams({});
    }
    setSearchParams({ dogId: dogIdValue });

    // const nextParams = evt !== '' ? { evt } : {};
    // setSearchParams(nextParams);
  };

  const visibleDogs = dogs.filter(dog => dog.includes(dogId));

  // useEffect(() => {
  //   // HTTP Запрос, если нужно
  // }, []);
  return (
    <Container>
      <input type="text" value={dogId} onChange={updateQueryString} />
      <ul>
        {visibleDogs.map(dog => {
          return (
            <li key={dog}>
              <Link to={`${dog}`} state={{ from: location }}>
                {dog}
              </Link>
            </li>
          );
        })}
      </ul>
    </Container>
  );
};

export default Dogs;
