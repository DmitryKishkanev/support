import Alert from 'components/ContextAlert/Alert';
import Main from 'components/ContextAlert/Main';
import { Context } from 'components/ContextAlert/Context/Context';
import { ContextAppContainer } from 'components/ContextAlert/ContextApp/ContextApp.styled';

export default function ContextApp() {
  return (
    <Context>
      <ContextAppContainer>
        <h1>Context Alert</h1>
        <Alert />
        <Main />
      </ContextAppContainer>
    </Context>
  );
}
