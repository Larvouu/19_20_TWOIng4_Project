import React from 'react';
import { storiesOf } from '@storybook/react';

import LineChart_Tiny from "../Component/Widgets/LineChart_Tiny/LineChart_Tiny"

storiesOf('LineChart_Tiny', module)

	.add('default', () => <LineChart_Tiny />
		);
