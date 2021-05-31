import styled from 'styled-components';

interface IProps {}

function TradeEmptySet({}: IProps) {
  return (
    <StyledTradeEmptySet>
      <p>거래 내역이 없습니다.</p>
    </StyledTradeEmptySet>
  );
}

const StyledTradeEmptySet = styled.div`
  padding: 80px 0;
  text-align: center;

  p {
    font-size: 13px;
    letter-spacing: -0.07px;
    color: rgba(34, 34, 34, 0.5);
  }
`;

export default TradeEmptySet;
