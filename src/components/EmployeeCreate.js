import React, { Component } from "react";
import {
	StyleSheet,
	Picker,
	Text,
} from "react-native";
import { connect } from 'react-redux';
import {
	Card,
	CardSection,
	Input,
	Button,
} from "./common";
import {
	employeeUpdate,
	employeeCreate,
} from "../actions/EmployeeActions"

class EmployeeCreate extends Component {
	_handleChangeNameText(value) {
		this.props.employeeUpdate({
			prop: "name",
			value,
		});
	}
	_handleOnButtonPress() {
		const { name, phone, shift, employeeCreate } = this.props;

		employeeCreate({ name, phone, shift: shift || "Monday" });
	}
	render() {
		const { name, phone, shift } = this.props;

		return (
			<Card>
				<CardSection>
					<Input
						label="Name"
						placeholder="Jane"
						value={name}
						onChangeText={this._handleChangeNameText.bind(this)}
					/>
				</CardSection>

				<CardSection>
					<Input
						label="Phone"
						placeholder="555-555-5555"
						value={phone}
						onChangeText={(value) => this.props.employeeUpdate({ prop: "phone", value })}
					/>
				</CardSection>

				<CardSection style={{ flexDirection: "column" }}>
					<Text style={styles.pickerLabel}>Shift</Text>

					<Picker
						selectedValue={this.props.shift}
						onValueChange={(value) => this.props.employeeUpdate({ prop: "shift", value })}
					>
						<Picker.Item label="Monday" value="Monday" />
						<Picker.Item label="Tuesday" value="Tuesday" />
						<Picker.Item label="Wednesday" value="Wednesday" />
						<Picker.Item label="Thursday" value="Thursday" />
						<Picker.Item label="Friday" value="Friday" />
						<Picker.Item label="Saturday" value="Saturday" />
						<Picker.Item label="Sunday" value="Sunday" />
					</Picker>
				</CardSection>

				<CardSection>
					<Button onPress={this._handleOnButtonPress.bind(this)}>
						Create
					</Button>
				</CardSection>
			</Card>
		)
	}
}

const styles = StyleSheet.create({
	pickerLabel: {
		fontSize: 18,
		paddingLeft: 20,
	},
});

const mapStateToProps = (state) => {
	const { name, phone, shift } = state.employeeForm;

	return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate, employeeCreate})(EmployeeCreate);

