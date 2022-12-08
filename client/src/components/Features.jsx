import styled from 'styled-components'
import {features} from "../data"
import FeatureItem from './FeatureItem'

const Container = styled.div`
    padding: 5px;
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
`
const Features = () => {
  return (
    <Container>
        {
            features.map((item) =>(
                <FeatureItem item = {item} key={item.id}/>
            ))
        }
    </Container>
  )
}

export default Features