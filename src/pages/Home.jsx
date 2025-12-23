import useLogOutRedirect from '@/hooks/useLogOuteRedirect';

const Home = () => {
  // useEffect(() => {
  //   // HTTP Запрос, если нужно
  // }, []);
  useLogOutRedirect();

  return (
    <div>
      <h2>
        Welcome! This resource provides reference material on building
        functional and class components in React
      </h2>
    </div>
  );
};

export default Home;
