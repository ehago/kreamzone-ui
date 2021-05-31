import { createContext } from 'react';
import styled from 'styled-components';
import { TradeType } from './TradeDetails';

interface IProps {
  type: TradeType;
  children: React.ReactNode;
}

export const TradeTypeContext = createContext<TradeType>('buying');

function TradeTabs({ type, children }: IProps) {
  return (
    <TradeTypeContext.Provider value={type}>
      <StyledTradeTabs>{children}</StyledTradeTabs>
    </TradeTypeContext.Provider>
  );
}

const StyledTradeTabs = styled.div`
  display: table;
  table-layout: fixed;
  width: 100%;
  background-color: #fafafa;
  border-radius: 12px;
`;

export default TradeTabs;
