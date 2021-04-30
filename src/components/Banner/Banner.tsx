import styled from 'styled-components';

interface IProps {}

function Banner({}: IProps) {
  return <StyledBanner>Banner section</StyledBanner>;
}

const StyledBanner = styled.div`
  height: 480px;

  /* 임시 스타일링 */
  display: flex;
  align-items: center;
  justify-content: center;
  background: #bbb;
  color: white;
  font-size: 2rem;
`;

export default Banner;
