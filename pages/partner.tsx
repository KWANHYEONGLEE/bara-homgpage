import Layout from 'components/common/Layout'
import styled from 'styled-components'

const IndexPage = () => (
  <Layout title="심바" description="심바를 만나면 육아에도 정답이 있다!">
    <ImageContainer>
      <img src="/partner-info.png" alt="partne-info" style={{ width: '100%' }} />
      <img src="/partner-join.png" alt="partne-join" style={{ width: '100%' }} />
      <ButtonContainer>
        <Anchor href="https://forms.gle/YiPhZcBDR3oW5odAA" target="_blank">
          문의하기
        </Anchor>
      </ButtonContainer>
    </ImageContainer>
  </Layout>
)

export default IndexPage

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`

const Anchor = styled.a`
  background-color: black;
  border: none;
  color: #f99b20;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 32px;
  cursor: pointer;
  font-weight: bold;
  border-radius: 10px;
`

const ImageContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1296px;
  min-width: 360px;
  /* height: 72px; */
  width: 100%;
  padding: 0 26px;
  /* padding: 0 60px; */
  margin: 0 auto;
`
