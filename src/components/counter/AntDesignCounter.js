import React from 'react';
import { useSelector } from 'react-redux';
import { selectCount } from './counterSlice';
import styled from 'styled-components';
import { Card } from 'antd';

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

const AntDesignCounter = () => {
	const count = useSelector(selectCount);

	return (
		<div>
			<StyledCard title="Ant Design Counter">
				<StyledCounter>{count}</StyledCounter>
				<p>ResetButton</p>
				<p> counterHistory</p>
			</StyledCard>
		</div>
	);
};

export default AntDesignCounter;
