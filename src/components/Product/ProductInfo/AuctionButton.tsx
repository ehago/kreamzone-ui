import styled from 'styled-components';

interface IProps {
  text: string;
  price: number;
  background: string;
}

function AuctionButton({ text, price, background }: IProps) {
  return (
    <StyledAuctionButton background={background}>
      <strong>{text}</strong>
      <div className="price">
        <span className="amount">
            <em>{`${price}원`}</em>
        </span>
        <span className="desc">{`즉시 ${text}가`}</span>
      </div>
    </StyledAuctionButton>
  );
}

const StyledAuctionButton = styled.a<{ background: string }>`
  position: relative;
  display: inline-flex;
  flex: 1;
  align-items: center;
  border-radius: 12px;
  color: #fff;
  background-color: ${(p) => p.background};
  margin-left: 10px;
  cursor: pointer;

  &:first-child {
    margin-left: 0;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 55px;
    width: 1px;
    background-color: rgba(34, 34, 34, 0.1);
  }

  strong {
    width: 55px;
    text-align: center;
    font-size: 18px;
    letter-spacing: -0.27px;
  }

  .price {
    margin-left: 10px;
    line-height: 15px;

    .amount {
      display: block;
      font-size: 0;

      em {
        display: inline-block;
        vertical-align: top;
        font-weight: 700;
        font-size: 15px;
        font-style: normal;
      }
    }

    .desc {
      display: block;
      font-size: 11px;
      font-weight: 600;
      color: hsla(0, 0%, 100%, .8);
    }
  }
`;

export default AuctionButton;
