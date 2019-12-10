
import React from 'react';
import { storiesOf } from '@storybook/react';

import ProgressBar from "../Component/Widgets/ProgressBar/ProgressBar"

storiesOf('ProgressBar', module)

	.add('default', () => <ProgressBar />
		);