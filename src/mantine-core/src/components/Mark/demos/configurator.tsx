import React from 'react';
import { Mark, MarkProps } from '../Mark';
import { Text } from '../../Text/Text';

function Wrapper(props: MarkProps) {
  return (
    <Text>
      Highlight <Mark {...props}>this chunk</Mark> of the text
    </Text>
  );
}

const codeTemplate = (props: string) => `<Text>
  Highlight <Mark${props} />this chunk</Mark> of the text
</Text>`;

export const configurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  configurator: [{ name: 'color', type: 'color', initialValue: 'yellow', defaultValue: 'yellow' }],
};
