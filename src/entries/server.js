import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

import ConfigAccessForClient from '../components/ConfigAccessForClient'
import Html from '../components/Html'

const server = ({
	__CONFIG__,
	config,
	response,
}) => {
	response
	.send(
		'<!DOCTYPE html>'
		.concat(
			renderToStaticMarkup(
				<Html
					htmlComponents={{
						body: (
							<ConfigAccessForClient
								windowConfig={__CONFIG__}
							/>
						),
						scripts: (
							<script
								defer
								src={
									'http://'
									.concat(
										config
										.get('serverHostname')
									)
									.concat(':')
									.concat(
										config
										.get('serverPort')
									)
									.concat('/client.main.bundle.js')
								}
							/>
						),
					}}
				>
					<div
						id={
							config
							.get('reactRenderTargetId')
						}
					/>
				</Html>
			)
		)
	)
}

export default server
