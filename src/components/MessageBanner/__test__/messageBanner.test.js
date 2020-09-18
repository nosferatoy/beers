import React from 'react';
import { render } from '@testing-library/react';
import MessageBanner from '../index';

describe('Test MessageBanner component', () => {
	it('Render MessageBanner Danger', () => {
		const { container } = render(
			<MessageBanner text={'Danger Test'} type="danger" />
		);
		expect(container).toMatchSnapshot();
	});

	it('Render MessageBanner Primary', () => {
		const { container } = render(
			<MessageBanner text={'Primary Text'} type="primary" />
		);
		expect(container).toMatchSnapshot();
	});
});
