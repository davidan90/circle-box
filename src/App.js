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
        circles={90} //optional
        height={'500px'} //optional
        width={'200px'} //optional
      />
    </AppContainer>
  </Fragment>
)

export default App
