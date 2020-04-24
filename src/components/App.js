import React, { Fragment } from 'react'
import { css, Global } from '@emotion/core'
import { hot } from 'react-hot-loader/root'
import { Route, Switch } from 'react-router-dom'

import CountdownRoot from './countdown/CountdownRoot'

const App = () => (
	<Fragment>
		<Global
			styles={css`
				body {
					margin: 0;
				}
			`}
		/>

		<Switch>
			<Route path="/countdown">
				<CountdownRoot />
			</Route>

			<Route path="/10k-processes">
				<div />
			</Route>
		</Switch>
	</Fragment>
)

export default hot(App)
