import styled from '@emotion/styled';

const MaterialModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
`;

const MaterialModalTitle = styled.h2`
  margin: 0;
  text-align: center;
`;

const MaterialModalFieldsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-right: auto;
`;

const MaterialModalFieldsName = styled.p`
  width: 270px;
  padding: 5px;
  margin: 0;
  border: 1px solid black;
  border-radius: 4px;
`;

const MaterialModalButtonsBox = styled.div`
  display: flex;
  gap: 15px;
  margin-left: auto;
`;

const MaterialModalButton = styled.button``;

export {
  MaterialModalContainer,
  MaterialModalTitle,
  MaterialModalFieldsContainer,
  MaterialModalFieldsName,
  MaterialModalButtonsBox,
};
