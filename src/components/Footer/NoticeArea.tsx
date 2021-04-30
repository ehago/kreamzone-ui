import styled from 'styled-components';

interface IProps {}

function NoticeArea({}: IProps) {
  return (
    <StyledNoticeArea>
      <p className="notice">
        크림(주)는 통신판매 중개자로서 통신판매의 당사자가 아니므로 개별
        판매자가 등록한 상품정보에 대해서 책임을 지지 않습니다. 단, 거래과정에서
        검수하고 보증하는 내용에 대한 책임은 당사에 있습니다.
      </p>
      <p className="copyright">© 2021 KREAM.Corp.</p>
    </StyledNoticeArea>
  );
}

const StyledNoticeArea = styled.div`
  padding-top: 12px;
  display: flex;
  align-items: flex-end;

  .notice {
    max-width: 605px;
    font-size: 12px;
    letter-spacing: -0.06px;
    color: rgba(34, 34, 34, 0.4);
  }
  .copyright {
    margin-left: auto;
    flex-shrink: 0;
    font-size: 12px;
    color: rgba(34, 34, 34, 0.3);
  }
`;

export default NoticeArea;
