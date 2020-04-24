import PropTypes from 'prop-types'
import React, { StrictMode } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { hot } from 'react-hot-loader/root'

import ConfigContext from './ConfigContext'

const propTypes = {
	children: PropTypes.node.isRequired,
}

const ClientRoot = ({
	children,
}) => (
	<StrictMode>
		<ConfigContext.Provider value={window.config}>
			<BrowserRouter>
				{children}
			</BrowserRouter>
		</ConfigContext.Provider>
	</StrictMode>
)

ClientRoot.propTypes = propTypes

export default hot(ClientRoot)
