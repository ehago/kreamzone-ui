import AppIcon from '@components/AppIcon';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import TradeEmptySet from './TradeEmptySet';
import TradeTab from './TradeTab';
import TradeTabs from './TradeTabs';

export type TradeType = 'buying' | 'selling';

interface IProps {
  type: TradeType;
}

function TradeDetails({ type }: IProps) {
  const title = type === 'buying' ? '구매 내역' : '판매 내역';
  const baseLink = type === 'buying' ? '/my/buying' : '/my/selling';

  return (
    <StyledTradeDetails>
      <HeaderSection>
        <h3 className="title">{title}</h3>
        <Link to={baseLink} className="more">
          <span>더보기</span>
          <AppIcon type="more" />
        </Link>
      </HeaderSection>
      <ContentSection>
        <TradeTabs type={type}>
          <TradeTab to={`${baseLink}`} text="전체" count={0} total />
          <TradeTab to={`${baseLink}?tab=bidding`} text="입찰 중" count={0} />
          <TradeTab to={`${baseLink}?tab=pending`} text="진행 중" count={0} />
          <TradeTab to={`${baseLink}?tab=finished`} text="종료" count={0} />
        </TradeTabs>
        <div>
          <div>
            <TradeEmptySet />
          </div>
        </div>
      </ContentSection>
    </StyledTradeDetails>
  );
}

const StyledTradeDetails = styled.div``;

const HeaderSection = styled.div`
  margin-top: 56px;
  padding-bottom: 14px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  max-width: 100%;

  .title {
    font-size: 18px;
    letter-spacing: -0.27px;
  }

  .more {
    margin-top: 3px;
    margin-left: auto;
    padding-top: 3px;
    padding-left: 5px;
    display: inline-flex;
    flex-shrink: 0;

    span {
      font-size: 13px;
      letter-spacing: -0.07px;
      color: rgba(34, 34, 34, 0.5);
    }
    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

const ContentSection = styled.div``;

export default TradeDetails;
