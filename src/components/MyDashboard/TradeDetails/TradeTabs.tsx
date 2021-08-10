import { createContext } from 'react';
import styled from 'styled-components';
import { TradeType } from './TradeDetails';

interface IProps {
  type: TradeType;
  isLoading: boolean;
  children: React.ReactNode;
}

export const TradeTypeContext = createContext<{
  type: TradeType;
  isLoading: boolean;
}>({
  type: 'buying',
  isLoading: false,
});

function TradeTabs({ type, isLoading, children }: IProps) {
  const value = {
    type,
    isLoading,
  };
  return (
    <TradeTypeContext.Provider value={value}>
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
