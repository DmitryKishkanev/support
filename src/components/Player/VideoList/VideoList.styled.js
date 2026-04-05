import styled from '@emotion/styled';

const VideosList = styled.ul`
  margin-top: 0;
  color: var(--primary-color);
`;

const VideosItem = styled.li`
  cursor: pointer;

  transition:
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    transform: scale(1.07);
    color: var(--secondary-color);
  }
`;

export { VideosList, VideosItem };
