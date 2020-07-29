import { configure, addParameters } from '@storybook/react';
import { setConsoleOptions } from '@storybook/addon-console';
import { DocsPage } from '@storybook/addon-docs/blocks';

setConsoleOptions({
    panelExclude: []
});

addParameters({
    docs: DocsPage
});

function loadStories() {
    const req = require.context('../stories', true, /.stories.(tsx|js)$/);
    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
