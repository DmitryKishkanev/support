import { Link, useSearchParams } from 'react-router-dom';
import styled from '@emotion/styled';

const Container = styled.div`
  display: inline-flex;
  flex-direction: column;
`;

const Dogs = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // useEffect(() => {
  //   // HTTP Запрос, если нужно
  // }, []);
  return (
    <Container>
      <input type="text" />
      <button
        onClick={() => {
          setSearchParams();
        }}
      >
        change sp
      </button>
      {['dog-1', 'dog-2', 'dog-3', 'dog-4', 'dog-5'].map(dog => {
        return (
          <Link key={dog} to={`${dog}`}>
            {dog}
          </Link>
        );
      })}
    </Container>
  );
};

export default Dogs;
