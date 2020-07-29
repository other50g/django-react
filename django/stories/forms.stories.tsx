import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { TextForm } from '../web/src/Components/Common/Form/TextForm';

const components = storiesOf('フォーム', module);
components.addDecorator(withKnobs)
    .add('1行テキスト', () => (
        <TextForm
            label={ text('ラベル', 'ラベル') }
            onChange={ action('テスト') }
        />
    ));
