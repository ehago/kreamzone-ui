import styled from 'styled-components';
import AppIcon from '@components/AppIcon';

interface IProps {}

function WishButton({}: IProps) {
  return (
    <StyledWishButton>
      <AppIcon type="wish" className="wish-icon" />
    </StyledWishButton>
  );
}

const StyledWishButton = styled.button`
    border: none;
    background: none;
    position: absolute;
    top: -5px;
    right: -5px;
    padding: 5px;
    z-index: 1;
    cursor: pointer;
    
    .wish-icon {
        width: 24px;
        height: 24px;
        fill: none;
    }
`;

export default WishButton;
