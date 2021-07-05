import styled from "styled-components";
import Procedure from './Procedure';

interface IProps {};

export interface IProcedure {
  style: React.CSSProperties;
  content: React.ReactNode;
}

const procedures: IProcedure[] = [
  {
    content: (
      <>
        <strong>구매자</strong>
        <p>원하는 상품과 사이즈 검색 후 선택</p>
        <strong>판매자</strong>
        <p>판매할 상품 등록</p>
      </>
    ),
    style: {
      backgroundImage:
        'url(https://kream.co.kr/_nuxt/img/detail_process1.1cbcf76.png)',
    },
  },
  {
    content: (
      <>
        <strong>KREAM 거래 체결</strong>
        <p>구매자와 판매자가 원하는 가격이 일치하면 거래 체결</p>
      </>
    ),
    style: {
      width: '120px',
      backgroundSize: '120px 340px',
      backgroundImage:
        'url(https://kream.co.kr/_nuxt/img/detail_process2.adc5b9b.png)',
    },
  },
  {
    content: (
      <>
        <strong>구매자</strong>
        <p>등록된 카드로 자동 결제</p>
        <strong>판매자</strong>
        <p>검수센터로 상품 48시간 내외 발송</p>
      </>
    ),
    style: {
      backgroundImage:
        'url(https://kream.co.kr/_nuxt/img/detail_process3.1bed46b.png)',
    },
  },
  {
    content: (
      <>
        <strong>KREAM 검수센터</strong>
        <p>전문 검수팀 철저한 검수</p>
        <p>*정품 아닌 경우 3배 보상</p>
      </>
    ),
    style: {
      width: '120px',
      backgroundSize: '120px 340px',
      backgroundImage:
        'url(https://kream.co.kr/_nuxt/img/detail_process4.bda9dd6.png)',
    },
  },
  {
    content: (
      <>
        <strong>구매자</strong>
        <p>구매자에게 상품 배송 완료!</p>
        <strong>판매자</strong>
        <p>판매자에게 정산 완료!</p>
      </>
    ),
    style: {
      width: '120px',
      backgroundSize: '120px 340px',
      backgroundImage:
        'url(https://kream.co.kr/_nuxt/img/detail_process5.c196bd7.png)',
    },
  },
];

function PurchaseProcess({}: IProps) {
  const size = procedures.length;

  return (
    <StyledPurchaseProcess>
      <h2 className="process-title">
        <span>KREAM 구매 방식을</span>
        <span>꼭 확인해주세요!</span>
      </h2>
      <div className="process">
      {
        procedures.map((procedure, i) => (
            <Procedure
                key={i}
                procedure={procedure}
                index={i}
                size={size}
            />
        ))
      }
      </div>
    </StyledPurchaseProcess>
  );
}

const StyledPurchaseProcess = styled.div`
  padding: 68px 0 70px;
  background-color: #fafafa;
  .process-title {
    font-size: 28px;
    font-weight: 700;
    line-height: 36px;
    letter-spacing: -0.42px;
    text-align: center;
    color: #000;

    span {
      display: inline-block;
    }
  }

  .process {
    margin: 50px auto 0;
    padding: 0 24px 0 32px;
    max-width: 1056px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;

    .blind {
      overflow: hidden !important;
      position: absolute !important;
      clip: rect(0, 0, 0, 0) !important;
      width: 1px !important;
      height: 1px !important;
      margin: -1px !important;
    }
  }
`;

export default PurchaseProcess;
