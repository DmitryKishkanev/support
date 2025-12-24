import useLogOutRedirect from '@/hooks/useLogOuteRedirect';
import beeSupportImg from '@/assets/bee_support.png';
import {
  HomePageContainer,
  HomePageTitle,
  HomePageLink,
  HomePageImg,
} from '@/pages/Home.styled';

const Home = () => {
  // useEffect(() => {
  //   // HTTP Запрос, если нужно
  // }, []);
  useLogOutRedirect();

  return (
    <HomePageContainer>
      <HomePageTitle>
        Welcome! This resource provides reference material on building
        functional and class components in React
      </HomePageTitle>
      <HomePageLink to="/SupportApplications">
        <HomePageImg src={beeSupportImg} alt="logo" />
        Go!
      </HomePageLink>
    </HomePageContainer>
  );
};

export default Home;
