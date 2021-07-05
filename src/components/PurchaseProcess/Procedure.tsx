import styled from 'styled-components';
import { IProcedure } from './PurchaseProcess';
import ProcedureArrow from './ProcedureArrow';

interface IProps {
  procedure: IProcedure;
  index: number;
  size: number;
}

function Procedure({ procedure, index, size }: IProps) {
  return (
    <>
      <StyledProcedure style={procedure.style}>
        <div className="blind">{procedure.content}</div>
      </StyledProcedure>
      {index < size - 1 && <ProcedureArrow />}
    </>
  );
}

const StyledProcedure = styled.div`
  position: relative;
  width: 100px;
  height: 340px;
  background-repeat: no-repeat;
  background-position: 50% 0;
  background-size: 100px 340px;
`;

export default Procedure;
