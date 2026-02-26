import styled from '@emotion/styled';

const ContactEl = styled.li``;

const ContactContentBox = styled.div`
  display: flex;
  align-items: center;
`;

const ContactContent = styled.p`
  margin: 0;

  font-weight: 400;
  font-size: 18px;
  line-height: 1.19;
  letter-spacing: 0.03em;
`;

const ContactContentButtonBox = styled.div`
  display: flex;
  gap: 10px;
  margin-left: auto;
`;

const ContactContentButton = styled.button`
  padding: 5px 15px;
  margin-left: auto;
`;

export {
  ContactEl,
  ContactContentBox,
  ContactContent,
  ContactContentButtonBox,
};
