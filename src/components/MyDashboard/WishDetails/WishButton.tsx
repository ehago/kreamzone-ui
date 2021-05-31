import AppIcon from '@components/AppIcon';
import styled from 'styled-components';

interface IProps {}

function WishButton({}: IProps) {
  const onClick = () => {
    alert('준비중입니다.');
  };

  return (
    <StyledWishButton onClick={onClick}>
      <AppIcon type="wish" className="wish-icon" />
    </StyledWishButton>
  );
}

const StyledWishButton = styled.button`
  border: none;
  background: none;
  position: absolute;
  bottom: 76px;
  right: 5px;
  padding: 5px;
  z-index: 1;
  cursor: pointer;

  .wish-icon {
    width: 24px;
    height: 24px;
    fill: #222;
  }
`;

export default WishButton;
