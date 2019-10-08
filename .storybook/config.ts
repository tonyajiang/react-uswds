import { configure, addDecorator } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import 'uswds/dist/css/uswds.css'

configure(require.context('../src', true, /\.stories\.tsx?$/), module)

addDecorator(withInfo)
