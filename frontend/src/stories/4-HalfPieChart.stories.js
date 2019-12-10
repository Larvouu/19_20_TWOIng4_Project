import React from 'react';
import { storiesOf } from '@storybook/react';

import HalfPieChart from "../Component/Widgets/HalfPieChart/HalfPieChart"

storiesOf('HalfPieChart', module)

	.add('default', () => <HalfPieChart />
		);