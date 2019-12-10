import React from 'react';
import { storiesOf } from '@storybook/react';

import BarChart_Tiny from "../Component/Widgets/BarChart_Tiny/BarChart_Tiny"

storiesOf('BarChart_Tiny', module)

	.add('default', () => <BarChart_Tiny />
		);

		export const toStorybook = () => <BarChart_Tiny />;