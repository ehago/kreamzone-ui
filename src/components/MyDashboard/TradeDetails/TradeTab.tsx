import { Link } from 'react-router-dom';
import styled from 'styled-components';
import cn from 'classnames';
import { useContext } from 'react';
import { TradeTypeContext } from './TradeTabs';
import { TradeType } from './TradeDetails';

interface IProps {
  to: string;
  total?: boolean;
  text: string;
  count: number;
}

function TradeTab({ to, total, text, count }: IProps) {
  const type = useContext(TradeTypeContext);

  return (
    <StyledTradeTab>
      <Link to={to}>
        <dl>
          <StyledText>{text}</StyledText>
          <StyledCount type={type} className={cn({ total })}>
            {count}
          </StyledCount>
        </dl>
      </Link>
    </StyledTradeTab>
  );
}

const StyledTradeTab = styled.div`
  display: table-cell;
  text-align: center;

  a {
    position: relative;
    display: block;
    padding-top: 18px;
    height: 96px;
  }
`;

const StyledText = styled.dt`
  font-size: 13px;
  letter-spacing: -0.07px;
  color: rgba(34, 34, 34, 0.8);
`;
const StyledCount = styled.dd<{ type: TradeType }>`
  margin-top: 2px;
  font-size: 18px;
  line-height: 20px;
  letter-spacing: -0.09px;
  font-weight: 700;
  &.total {
    color: ${(props) => (props.type === 'buying' ? '#f15746' : '#31b46e')};
  }
`;

export default TradeTab;
