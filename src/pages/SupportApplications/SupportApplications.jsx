import { supportConfig } from '@/routes/supportConfig';
import { SupportApplicationsMain } from '@/pages/SupportApplications/SupportApplications.styled';

import SupportApplicationsItems from 'components/SupportApplicationsItems';

export default function SupportApplications() {
  return (
    <SupportApplicationsMain>
      <h2>Support applications</h2>
      <p>Click any of the links below to open the application</p>

      <SupportApplicationsItems supportConfig={supportConfig} />
    </SupportApplicationsMain>
  );
}
