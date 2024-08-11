import Layout from 'components/common/Layout'
import styled from 'styled-components'

const IndexPage = () => (
  <Layout title="심바" description="심바를 만나면 육아에도 정답이 있다!">
    <img src="/partner-info.png" alt="partne-info" style={{ width: '100%' }} />
    <img src="/partner-join.png" alt="partne-join" style={{ width: '100%' }} />
    <ButtonContainer>
      <Button>문의하기</Button>
    </ButtonContainer>
  </Layout>
)

export default IndexPage

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`

const Button = styled.button`
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
