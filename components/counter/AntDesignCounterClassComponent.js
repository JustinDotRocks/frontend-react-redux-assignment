import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { resetCount } from './counterSlice';
import uuid from 'uuid';
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
	background-color: ${props => (props.isOdd ? 'purple' : 'green')};
`;
const StyledResetButton = styled(Button)`
	width: 7em;
	height: 3em;
	font-size: 0.75em;
	margin-top: 2em;
`;
const CounderHistoryList = styled.div`
	ul {
		li {
			color: rebeccapurple;
			font-size: 0.75em;
		}
	}
`;
class AntDesigntCounterClassComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		console.log(this.state);
	}

	render() {
		const counterArray = [];

		const counterHistory = [...counterArray];
		console.log(counterHistory);

		return (
			<div>
				<StyledCard title="Ant Design Counter">
					<StyledCounter isOdd={this.props.count % 2 === 1}>
						{this.props.count}
					</StyledCounter>
					<StyledResetButton onClick={() => this.props.resetCount()}>
						Reset
					</StyledResetButton>
					<CounderHistoryList componentDidMount>
						<ul>
							<li key={uuid}>1</li>
						</ul>
						<ul>
							<li key={uuid}>1</li>
						</ul>
						<ul>
							<li key={uuid}>1</li>
						</ul>
						<ul>
							<li key={uuid}>1</li>
						</ul>
						<ul>
							<li key={uuid}>1</li>
						</ul>
						<ul>
							<li key={uuid}>1</li>
						</ul>
						<ul>
							<li key={uuid}>1</li>
						</ul>
						<ul>
							<li key={uuid}>1</li>
						</ul>
						<ul>
							<li key={uuid}>1</li>
						</ul>
						<ul>
							<li key={uuid}>1</li>
						</ul>
					</CounderHistoryList>
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
