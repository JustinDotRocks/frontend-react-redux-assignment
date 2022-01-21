import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { resetCount, addNewCount } from './counterSlice';
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

class AntDesigntCounterClassComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		// Call this function so that it fetch first time right after mounting the component
		this.addCountToCounterHistory();
		// set Interval
		this.interval = setInterval(this.addCountToCounterHistory, 2000);
	}

	componentWillUnmount() {
		// Clear the interval right before component unmount
		clearInterval(this.interval);
	}

	// Had to set counterHistory to the counterHistory state through the use of the mapStateToProps and then use this.props.
	// If the currentHistory array is longer than or = to 9 we slice the counter history at the first position to remove it so to only display the last 10 itams.
	// Because we cant directly manipulate the state in redux we have to spread the initial array counterHistory and add the current counter to the new array.
	// used the standard package (uuid) for creating keys.
	addCountToCounterHistory = () => {
		let counterHistory = this.props.counterHistory;
		if (counterHistory.length >= 9) {
			counterHistory = counterHistory.slice(1);
		}
		let updatedCounterHistory = [
			...counterHistory,
			{ currentCounter: this.props.count, key: uuid() },
		];
		this.props.addNewCount(updatedCounterHistory);
	};

	// maps through counterHistory and for each item we return a list item with a key and displays the currentCounter of the current item.
	renderCounterLog = () => {
		return this.props.counterHistory.map(item => {
			return <li key={item.key}>{item.currentCounter}</li>;
		});
	};

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
					<ul>{this.renderCounterLog()}</ul>
				</StyledCard>
			</div>
		);
	}
}

// map the states to the props so we can access them in the render()
const mapStateToProps = state => ({
	count: state.counter.value,
	counterHistory: state.counter.counterHistory,
});

// to be able to use the reducer directly in class components you must pass it to props and then use this.props.
const mapDispatchToProps = { resetCount, addNewCount };

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AntDesigntCounterClassComponent);
