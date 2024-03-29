import {
  Title,
  Text,
  Card,
  SimpleGrid,
  Container,
  rem,
  List,
  useMantineTheme,
} from '@mantine/core';
import { IconDeviceDesktopStar, IconServer2, IconFileSmile } from '@tabler/icons-react';
import classes from './Resume.module.css';

const mockdata = [
  {
    title: 'Front-end Skills',
    skill1: "HTML/CSS: Proficiency in structuring web pages using HTML and styling them using CSS",
    skill2: "JavaScript: Understanding of JavaScript for implementing interactive and dynamic features on web pages",
    skill3:"Frontend Frameworks: Familiarity with frontend frameworks/libraries such as React.js and Mantine.dev for building robust and scalable user interfaces",
    icon: IconDeviceDesktopStar,
  },
  {
    title: 'Back-end Skills',
    skill1: "Server-side Languages: Proficiency in JavaScript (Node.js)",
    skill2: "Database Management: Understanding of database management systems like MySQL and MongoDB, including database design, querying and optimisation",
    skill3: "Server Management: Knowledge of server-side technologies such as Express.js for routing, middleware and handling requests.",
    icon: IconServer2,
  },
  {
    title: 'Soft skills',
    skill1: "Problem-solving: Ability to troubleshoot issues and find effective solutions",
    skill2: "Communication: Strong communication skills to collaborate with team members and stakeholders effectively",
    skill3: "Continuous Learning: Willingness to learn and adapt to new technologies and methodologies in a fast-paced environment.",
    icon: IconFileSmile,
  },
];

export function Resume() {
  const theme = useMantineTheme();
  const features = mockdata.map((feature) => (
    <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
      <feature.icon
        style={{ width: rem(50), height: rem(50) }}
        stroke={2}
        color={theme.colors.blue[6]}
      />
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <List>
      <List.Item fz="sm" c="dimmed" mt="sm">
        {feature.skill1}
      </List.Item>
      <List.Item fz="sm" c="dimmed" mt="sm">
        {feature.skill2}
      </List.Item>
      <List.Item fz="sm" c="dimmed" mt="sm">
        {feature.skill3}
      </List.Item>
      </List>
    </Card>
  ));

  return (
    <Container size="lg" py="xl">
     
      <Title order={2} className={classes.title} ta="center" mt="sm">
        Resume
      </Title>

      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
        {features}
      </SimpleGrid>
    </Container>
  );
}