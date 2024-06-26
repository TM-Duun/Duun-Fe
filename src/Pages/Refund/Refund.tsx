import { Bean, Dash, RefundWrapper, RfBottom, RfBtn, RfCircle, RfDateInput, RfLine, RfListHeader, RfMenu, RfMiddle, RfPickerContainer, RfScript, RfSelect, RfSubmitInput, RfTitle, RfTop } from "./RefundStyles";



export default function Refund() {
  return (
    <Bean>
      <RefundWrapper>
        <RfTop>
          <RfCircle src="/circle.svg"/>
          <RfTitle>취소 / 반품 조회</RfTitle>
          <RfScript>주문 내역을 클릭하면 상세 내역을 확인 하실 수 있으며, 주문 상태에 따라 <b>취소/반품 신청이 가능</b>합니다.
            <br/>신청하신 취소/반품 내역은 <a href="/refund">'취소/반품 내역'</a> 메뉴에서 확인 가능합니다.</RfScript>
          <RfLine></RfLine>
        </RfTop>
        <RfMiddle>
          <RfMenu>
            <RfSelect>
                <RfBtn>1년</RfBtn>
                <RfBtn>6개월</RfBtn>
                <RfBtn>3개월</RfBtn>
                <RfBtn>1개월</RfBtn>
            </RfSelect>
          </RfMenu>
          <RfPickerContainer>
            <RfDateInput defaultValue="2024-01-25"/>
            <Dash>~</Dash>
            <RfDateInput defaultValue="2024-02-26"/>
            <RfSubmitInput
                type="submit"
                value="조회"/>
          </RfPickerContainer>
        </RfMiddle>
        <RfBottom>
          <RfListHeader>
              <p>상품 정보</p>
              <p>주문 번호</p>
              <p>주문 금액<br/>(수량)</p>
              <p>주문 일시</p>
              <p>결제 방법</p>
              <p>취소 상태</p>
          </RfListHeader>
        </RfBottom>
      </RefundWrapper>
    </Bean>
  )
}
