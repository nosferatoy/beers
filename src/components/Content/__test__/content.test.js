import React from 'react';
import { render } from '@testing-library/react';
import Content from '../index';

describe('Test Content component', () => {
	it('Render Content', () => {
		const { container } = render(
			<Content>
				<div>Test 1</div>
				<div>Test 2</div>
				<div>Test 3</div>
				<div>Test 4</div>
			</Content>
		);
		expect(container).toMatchSnapshot();
	});

	it('Render Content horizontaly', () => {
		const { container } = render(
			<Content hcenter={true}>
				<div>Test 1</div>
				<div>Test 2</div>
				<div>Test 3</div>
				<div>Test 4</div>
			</Content>
		);
		expect(container).toMatchSnapshot();
	});

	it('Render Content verticaly', () => {
		const { container } = render(
			<Content vcenter={true}>
				<div>Test 1</div>
				<div>Test 2</div>
				<div>Test 3</div>
				<div>Test 4</div>
			</Content>
		);
		expect(container).toMatchSnapshot();
	});

	it('Render Content padded', () => {
		const { container } = render(
			<Content padded>
				<div>Test 1</div>
				<div>Test 2</div>
				<div>Test 3</div>
				<div>Test 4</div>
			</Content>
		);
		expect(container).toMatchSnapshot();
	});

	it('Render Content no header', () => {
		const { container } = render(
			<Content noHeader>
				<div>Test 1</div>
				<div>Test 2</div>
				<div>Test 3</div>
				<div>Test 4</div>
			</Content>
		);
		expect(container).toMatchSnapshot();
	});
});
