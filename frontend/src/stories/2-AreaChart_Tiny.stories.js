import React from 'react';
import { storiesOf } from '@storybook/react';

import AreaChart_Tiny from "../Component/Widgets/AreaChart_Tiny/AreaChart_Tiny"

export default {
    title: 'AreaChart_Tiny',
  };

storiesOf('AreaChart_Tiny', module)

	.add('default', () => <AreaChart_Tiny />
    );
    
    export const toStorybook = () => <AreaChart_Tiny />;


