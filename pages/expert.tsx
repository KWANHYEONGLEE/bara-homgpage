import Layout from 'components/common/Layout'
import styled from 'styled-components'

/**
 * 이미지 원본 크기: 1978 x 15890
 * 버튼 위치: 왼쪽에서 520px, 아래에서 555px
 * 버튼 크기: 695 x 170
 *
 * 비율 맞춰서 이미지가 컨테이너에 width: 100%로 들어갈 때
 * - left: 520/1978 = 약 26.29%
 * - bottom: 555/15890 = 약 3.49% (아래에서)
 * - width: 695/1978 = 약 35.14%
 * - height: 170/15890 = 약 1.07%
 *
 * 버튼은 absolute로 이미지 박스 안에 위치.
 */

const ExpertPage = () => (
  <Layout title="전문가 모집" description="심바 전문가 모집">
    <Container>
      <ImageBox>
        <StyledImg
          src="/expertDetail.png"
          alt="전문가 모집 상세페이지"
        />
        <OverlayButton
          onClick={() => {
            window.open('https://forms.gle/ZLCf91vSV18dYYnYA', '_blank')
          }}
          aria-label="지원 폼 열기"
        />
      </ImageBox>
    </Container>
  </Layout>
)

export default ExpertPage

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1296px;
  min-width: 360px;
  width: 100%;
  margin: 0 auto;
`

const ImageBox = styled.div`
  position: relative;
  width: 100%;
`

const StyledImg = styled.img`
  display: block;
  width: 100%;
  height: auto;
`

const OverlayButton = styled.button`
    position: absolute;
  left: 8.8%;
  bottom: 3.1%;
  width: 34%;
  height: 1.07%;
  min-width: 180px;
  min-height: 40px;
  max-width: 695px;
  max-height: 170px;
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  opacity: 0;
  color: transparent;
  cursor: pointer;
  z-index: 2;
  /* Keeps button in visual flow but invisible, clickable */
  @media (max-width: 600px) {
    min-width: 120px;
    min-height: 32px;
  }
`