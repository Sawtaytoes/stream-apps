import PropTypes from 'prop-types'
import React, { memo, useEffect, useState } from 'react'
import { css } from '@emotion/core'

import getRandomColor from './utils/getRandomColor'
import getRandomTimeout from './utils/getRandomTimeout'
import getRandomValue from './utils/getRandomValue'

const propTypes = {
	addToQueue: PropTypes.func.isRequired,
	initialColor: PropTypes.string,
	initialValue: PropTypes.string,
}

const Node = memo(({
	addToQueue,
	initialColor = getRandomColor(),
	initialValue = getRandomValue(),
}) => {
	const [
		state,
		setState,
	] = useState({
		color: initialColor,
		value: initialValue,
	})

	useEffect(
		() => {
			setTimeout(
				() => {
					addToQueue(() => {
						setState({
							color: getRandomColor(),
							value: getRandomValue(),
						})
					})
				},
				getRandomTimeout(),
			)
		},
		[
			addToQueue,
			state,
		],
	)

	return (
		<div
			css={css`
				color: ${state.color};
			`}
			suppressHydrationWarning
		>
			{state.value}
		</div>
	)
})

Node.propTypes = propTypes

export default Node
