import React, {Fragment} from 'react'
import styled from 'styled-components'
import  CircleBox from './containers/CircleBox/index'

const AppContainer = styled.div`
  height: 200px;
  width: 100%;
`

const App = props => (
  <Fragment>
    <AppContainer>
      <CircleBox 
        id="myCirclebox" //required
        numberOfCircles={150} //optional
        height={'500px'} //optional
        width={'200px'} //optional
        colors={['#f9f9f5', '#16a085']} //optional
        circlesRadius={[2,3,5,8,13,21,34]} //optional
      />
    </AppContainer>
  </Fragment>
)

export default App
