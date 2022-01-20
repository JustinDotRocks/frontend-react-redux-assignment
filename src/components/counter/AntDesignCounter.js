import React, { Component } from 'react';
import styled from 'styled-components';
import { Card } from 'antd';

const StyledCard = styled(Card)`
	width: 15em;
	margin-top: 2em;
	font-size: 0.75em;
	border: 2px solid #e9fff9;
`;

class AntDesignCounter extends Component {
	render() {
		return (
			<div>
				<StyledCard title="Ant Design Counter">
					<p>StyledCounter</p>
					<p>ResetButton</p>
					<p> counterHistory</p>
				</StyledCard>
			</div>
		);
	}
}

export default AntDesignCounter;
