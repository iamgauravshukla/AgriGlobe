import styled from "styled-components"

const Container = styled.div`
  height: 30px;
  background-color: #1C6758;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`

function Announcement() {
  return (
    <Container>
      Super Deal! Free Soil Test on Pesticide orders.
    </Container>
  )
}

export default Announcement