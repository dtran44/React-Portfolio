import { Text, Box, Stack, rem, Anchor } from '@mantine/core';
import { IconPhone, IconBrandGithub,IconAt } from '@tabler/icons-react';
import classes from './ContactIcons.module.css';


function ContactIcon({ icon: Icon, title, description, ...others }) {
  return (
    <div className={classes.wrapper} {...others}>
      <Box mr="md">
        <Icon style={{ width: rem(24), height: rem(24) }} />
      </Box>

      <div>
        <Text size="xs" className={classes.title}>
          {title}
        </Text>
        <Text className={classes.description}>{description}</Text>
      </div>
    </div>
  );
}

const DATA = [
  { title: 'Email', description: 'diana.tran44@gmail.com', icon: IconAt },
  { title: 'Phone', description: '+61 432 457 379', icon: IconPhone },
  { title: 'GitHub', description: <Anchor href="https://github.com/dtran44" target="_blank">
  Link</Anchor>, icon: IconBrandGithub},
];

export function ContactIconsList() {
  const items = DATA.map((item, index) => <ContactIcon key={index} {...item} />);
  return <Stack>{items}</Stack>;
}