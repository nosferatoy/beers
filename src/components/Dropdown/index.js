import React, { useEffect, useState, useImperativeHandle } from 'react';
import Select from 'react-select';
import { Input } from '@material-ui/core';

const customStyles = {
	control: () => ({
		display: 'flex',
		alignItems: 'center',
		border: 0,
		height: 'auto',
		background: 'transparent',
		'&:hover': {
			boxShadow: 'none'
		}
	}),
	menu: () => ({
		backgroundColor: 'white',
		boxShadow: '1px 2px 6px #888888',
		position: 'absolute',
		left: 0,
		top: `calc(100% - 15px)`,
		width: '100%',
		zIndex: 2,
		maxHeight: 48 * 4.5
	}),
	menuList: () => ({
		maxHeight: 48 * 4.5,
		overflowY: 'auto'
	})
};

const SelectWrapped = ({ disabled, ...other }) => (
	<Select styles={customStyles} isDisabled={disabled} {...other} />
);

const Dropdown = () => (
	{ options, placeholder, type, filterBeers, disabled },
	ref
) => {
	const [value, setValue] = useState([]);
	const [dropdownOptions, setDropdownOptions] = useState([]);
	const [isDisabled, setIsDisabled] = useState(disabled);

	useEffect(() => {
		setIsDisabled(disabled);
	}, [disabled]);

	useEffect(() => {
		if (options.length) {
			setDropdownOptions(options.map(item => ({ value: item, label: item })));
		}
	}, [options]);

	useImperativeHandle(ref, () => ({
		disable: () => {
			setValue([]);
			setIsDisabled(false);
		}
	}));

	const updateValue = val => {
		setValue(val);
		setIsDisabled(true);
		filterBeers(val.value, type);
	};

	return (
		<Input
			fullWidth
			inputComponent={SelectWrapped}
			value={value}
			onChange={e => updateValue(e)}
			placeholder={placeholder}
			id="react-select-single"
			disabled={isDisabled}
			style={{ height: '65px' }}
			inputProps={{ options: dropdownOptions }}
		/>
	);
};

export default React.forwardRef(Dropdown());
