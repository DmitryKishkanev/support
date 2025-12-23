import { useSearchParams } from 'react-router-dom';
import { supportConfig } from '@/routes/supportConfig';
import SupportApplicationsItems from 'components/SupportApplicationsItems';
import useLogOutRedirect from '@/hooks/useLogOuteRedirect';
import { SupportApplicationsMain } from '@/pages/SupportApplications/SupportApplications.styled';

export default function SupportApplications() {
  const [searchParams, setsearchParams] = useSearchParams();
  const applicationName = searchParams.get('applicationName') ?? '';

  const updateQueryString = evt => {
    const applicationNameValue = evt.target.value;

    if (applicationNameValue === '') {
      return setsearchParams({});
    }
    setsearchParams({ applicationName: applicationNameValue });
  };

  const visibleApplications = supportConfig.filter(application =>
    application.label.toLowerCase().includes(applicationName.toLowerCase()),
  );

  useLogOutRedirect();

  // useEffect(() => {
  //   // HTTP Запрос, если нужно
  // }, []);

  return (
    <SupportApplicationsMain>
      <h2>Support applications</h2>
      <p>Click any of the links below to open the application</p>
      <label>
        <span>Application</span>
        <input
          type="text"
          value={applicationName}
          onChange={updateQueryString}
        />
      </label>

      <SupportApplicationsItems supportConfig={visibleApplications} />
    </SupportApplicationsMain>
  );
}
