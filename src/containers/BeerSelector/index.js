import React, { useState, useEffect, useMemo } from 'react';
import beerChamp from '../../service/beers';
import Dropdown from '../../components/Dropdown';
import Content from '../../components/Content';
import MessageBanner from '../../components/MessageBanner';
import Header from '../../components/Header';
import Text, { Title } from '../../components/Text';

import logo from '../../assets/logo.svg';

import './index.scss';

import { Button } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const colorsList = [
	'yellow',
	'malt',
	'brown',
	'light yellow',
	'dark brown',
	'cherry red',
	'blue',
	'green'
];

const dropdownList = [
	{ type: 'colors', placeholder: 'Select Color' },
	{ type: 'title', placeholder: 'Select Beer' },
	{ type: 'style', placeholder: 'Select Style' }
];

const getOptions = data => {
	return data.reduce(
		(acc, item) => {
			acc.title.add(item.title);
			item.colors.forEach(acc.colors.add, acc.colors);
			acc.style.add(item.style);
			return acc;
		},
		{ title: new Set([]), colors: new Set([]), style: new Set([]) }
	);
};

const getSelection = (
	dropdownType,
	selectedType,
	dropdownData,
	selectionsData,
	value
) => {
	if (selectedType === dropdownType) {
		return [value];
	}

	if (selectionsData[dropdownType].length !== 1) {
		return [...dropdownData[dropdownType]];
	}

	return selectionsData[dropdownType];
};

const BeerSelector = () => {
	const [data, setData] = useState([]);
	const [defultData, setDefultData] = useState([]);
	const [selections, setSelections] = useState({
		title: [],
		colors: colorsList,
		style: []
	});
	const [error, setError] = useState('');

	const refs = useMemo(() => {
		const listRefs = new Map();
		dropdownList.forEach(item => listRefs.set(item.type, React.createRef()));
		return listRefs;
	}, []);

	useEffect(() => {
		beerChamp.fetchData((err, data) => {
			if (err) {
				setError(err);
				return;
			}

			const dropData = getOptions(data);

			setDefultData(data);
			setData(data);
			setSelections({
				title: [...dropData.title],
				colors: selections.colors,
				style: [...dropData.style]
			});
		});
	}, []);

	const filterBeers = (value, type) => {
		const filreredData = data.filter(item =>
			type === 'colors' ? item[type].includes(value) : item[type] === value
		);
		const dropdownData = getOptions(filreredData);

		setData(filreredData);

		setSelections({
			title: getSelection('title', type, dropdownData, selections, value),
			colors: getSelection('colors', type, dropdownData, selections, value),
			style: getSelection('style', type, dropdownData, selections, value)
		});
	};

	const clearSelections = () => {
		const dropData = getOptions(defultData);
		setData(defultData);
		setSelections({
			title: [...dropData.title],
			colors: colorsList,
			style: [...dropData.style]
		});

		dropdownList.forEach(item => {
			if (refs.get(item.type).current) {
				refs.get(item.type).current.disable();
			}
		});
	};

	return (
		<div>
			<Header
				leftIcon={
					<img
						style={{ height: '50px', width: '50px' }}
						src={logo}
						alt="logo"
					/>
				}
			>
				<Title content="Beer Selector" />
			</Header>

			<Content vcenter={true} padded>
				{dropdownList.map((item, key) => (
					<Dropdown
						key={key}
						ref={refs.get(item.type)}
						options={selections[item.type]}
						placeholder={item.placeholder}
						type={item.type}
						filterBeers={filterBeers}
						disabled={selections[item.type].length === 0}
					/>
				))}
			</Content>

			<Content vcenter={true} padded noHeader>
				{error ? (
					<MessageBanner text={error} type="danger" />
				) : (
					<Button variant="outlined" onClick={() => clearSelections()}>
						{' '}
						Clear Form{' '}
					</Button>
				)}
			</Content>

			<Content hcenter={true} padded noHeader>
				{data.map((beer, key) => (
					<Card key={key} className={'card'}>
						<CardMedia className={'card__media'} image={beer.images[0].image} />
						<CardContent className={'card__content'}>
							<Text content={beer.title} size="large" />
							<div className={'card__description'}>
								<Text
									content={`${beer.style} | ${beer.alcoholPercentage}% | ${beer.volume}CL`}
									color="light-gray"
									size="small"
								/>
							</div>
						</CardContent>
					</Card>
				))}
			</Content>
		</div>
	);
};

export default BeerSelector;
