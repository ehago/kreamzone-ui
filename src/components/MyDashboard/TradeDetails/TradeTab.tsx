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
  const { type, isLoading } = useContext(TradeTypeContext);

  return (
    <StyledTradeTab disabled={isLoading}>
      <Link to={to}>
        <dl>
          <StyledText>{text}</StyledText>
          <StyledCount type={type} className={cn({ total })}>
            {isLoading ? <Skeleton /> : count}
          </StyledCount>
        </dl>
      </Link>
    </StyledTradeTab>
  );
}

const StyledTradeTab = styled.div<{ disabled: boolean }>`
  display: table-cell;
  text-align: center;
  transition: 0.15s background linear;
  &:hover {
    background: ${(props) => (props.disabled ? 'inherit' : '#f1f1f1')};
  }

  a {
    position: relative;
    display: block;
    padding-top: 18px;
    height: 96px;
    pointer-events: ${(props) => (props.disabled ? 'none' : 'auto')};
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

const Skeleton = styled.div`
  margin: 0.5rem auto 0;
  width: 40px;
  height: 20px;
  border-radius: 3px;
  background: #ebebeb;
`;

export default TradeTab;
