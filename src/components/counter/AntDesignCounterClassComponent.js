import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { resetCount } from './counterSlice';

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
	font-weight: bold;
	color: ${props => (props.isOdd ? 'green' : 'purple')};
`;
const StyledResetButton = styled(Button)`
	width: 7em;
	height: 3em;
	font-size: 0.75em;
	margin-top: 2em;
`;

class AntDesigntCounterClassComponent extends Component {
	render() {
		return (
			<div>
				<StyledCard title="Ant Design Counter">
					<StyledCounter isOdd={this.props.count % 2 === 1}>
						{this.props.count}
					</StyledCounter>
					<StyledResetButton onClick={() => this.props.resetCount()}>
						Reset
					</StyledResetButton>
				</StyledCard>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	count: state.counter.value,
});

const mapDispatchToProps = { resetCount };

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AntDesigntCounterClassComponent);
