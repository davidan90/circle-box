import React, {Fragment} from 'react'
import styled from 'styled-components'
import  CircleBox from './containers/CircleBox/index'

const AppContainer = styled.div`
  background-color: #f5f5f5;
  border: 1px solid black;
  height: 200px;
  width: 100%;
`

const App = props => (
  <Fragment>
    <AppContainer>
      <CircleBox />
    </AppContainer>
  </Fragment>
)

export default App
