import { useSearchParams } from 'react-router-dom';
import { supportConfig } from '@/routes/supportConfig';
import { SupportApplicationsMain } from '@/pages/SupportApplications/SupportApplications.styled';
import SupportApplicationsItems from 'components/SupportApplicationsItems';

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
