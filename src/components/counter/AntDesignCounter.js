import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCount, resetCount } from './counterSlice';
import styled from 'styled-components';
import { Card, Button } from 'antd';

const StyledCard = styled(Card)`
	width: 15em;
	margin-top: 2em;
	font-size: 0.75em;
	border: 2px solid #e9fff9;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const StyledCounter = styled.div`
	border: 2px solid #e9fff9;
	border-radius: 5px;
	width: 5em;
	height: 2em;
	margin-top: 1em;
	font-size: 1.5em;
	display: flex;
	align-items: center;
	justify-content: center;
	color: rebeccapurple;
	font-weight: bold;
	background-color: #111111;
`;

const StyledResetButton = styled(Button)`
	width: 7em;
	height: 3em;
	font-size: 0.75em;
	margin-top: 2em;
`;
// Not a completed function. Went down the path of functional components at first before switching to use Class Components as requested.

const AntDesignCounter = () => {
	const count = useSelector(selectCount);
	const dispatch = useDispatch();
	const [resetCount, setResetCount] = useState();

	return (
		<div>
			<StyledCard title="Ant Design Counter">
				<StyledCounter>{count}</StyledCounter>
				<StyledResetButton
					title="Reset Count"
					onClick={() => dispatch(resetCount())}>
					Reset Count
				</StyledResetButton>
				<p> counterHistory</p>
			</StyledCard>
		</div>
	);
};

export default AntDesignCounter;
