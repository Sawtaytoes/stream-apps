import React from 'react'
import styled from '@emotion/styled'

import Nodes from './Nodes'

const StyledContainer = styled.div`
	align-items: center;
	background-color: #ccc;
	display: flex;
	flex-wrap: wrap;
	height: 100vh;
	justify-content: center;
	width: 100vw;
`

const StyledNodes = styled.div`
	display: flex;
	font-family: monospace;
	font-size: 24px;
	flex-wrap: wrap;
	line-height: 1;
`

const ThousandProcesses = () => {
	return (
		<StyledContainer>
			<StyledNodes>
				<Nodes />
			</StyledNodes>
		</StyledContainer>
	)
}

export default ThousandProcesses
