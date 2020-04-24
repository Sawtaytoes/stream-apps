import React, { Fragment } from 'react'
import { css, Global } from '@emotion/core'
import { hot } from 'react-hot-loader/root'
import { Route, Switch } from 'react-router-dom'

import CountdownRoot from './countdown/CountdownRoot'
import ThousandProcessesRoot from './thousandProcesses/ThousandProcessesRoot'

const App = () => (
	<Fragment>
		<Global
			styles={css`
				*,
				*::before,
				*::after {
					box-sizing: border-box;
				}

				body {
					margin: 0;
				}
			`}
		/>

		<Switch>
			<Route path="/countdown">
				<CountdownRoot />
			</Route>

			<Route path="/thousand-processes">
				<ThousandProcessesRoot />
			</Route>
		</Switch>
	</Fragment>
)

export default hot(App)
