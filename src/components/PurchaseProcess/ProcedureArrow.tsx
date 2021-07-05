import styled from "styled-components";

interface IProps {
};

function ProcedureArrow({}: IProps) {
  return (
    <StyledProcedureArrow>
        <span className="blind">
          다음
        </span>
    </StyledProcedureArrow>
  );
}

const StyledProcedureArrow = styled.div`
  width: 20px;
  height: 184px;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAFwCAYAAAAlllJ9AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAH/SURBVHgB7dUxbhNBFIDht3YEFQUnwD4BSFyAhCpVEuUCCA6BUgEddByBGwTRoBQE5wacAOcASE4FEZK9zEsciCLbcYE0W3yfNN61PMWv2Zl1E5VNnu3mJT++3f/w8XTRnF5U9OPFfkz7/b3o9Q/LOC7Bg0Xzqkb2p9Mco2jjtHwdLgutGlkeb14m0U63VoU20QHzfTmMpn9cigblfhyz6dbVHu1EZFoV2pnItCy0mTzfb6PbxlUPzlraDu3J9PdxlxNeroMSOM6T372DcyOwMwdnVWD+UD3ytsBUNXKdwLQRVfXz41GsCEwdeNz7eSlLOh2VwLMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAID/r4nKHn96Fffu/o6YzWK0/W7hnF5UNA/Mhdot6zV88vnlwnlVIy9WMGKnVB42vebLstCqkXHnTo6TcjcuY7gstGrkaPNNxPn5pJ21T2NFaPWDky6DmnlgDMsYX4a34zxMnYhMq0KbzaODzoSmEnYVOoh56Ea5mUWHlMDrXy+CM7KN7rle2nZnT359nSc9b3P1juPf497qxuleETjafntaPfK2wPyhauQ6ganu3+IagWkjarp83Tws40EZ3/OdeDMw1d+TRwd52Ymfv05Ge+/PFs35A9Sr7frI4vLgAAAAAElFTkSuQmCC);
  background-repeat: no-repeat;
  background-size: 20px 184px;
`;

export default ProcedureArrow;
