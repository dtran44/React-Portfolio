import { SimpleGrid, Card, Image, Text, Container, AspectRatio, Group } from '@mantine/core';
import classes from './Portfolio.module.css';
import stillImage from "../../assets/stillLife.jpg";
import { IconBrandGithub} from '@tabler/icons-react';

const mockdata = [
  {
    title: 'Gallivant - Travel Planning App',
    image:
      'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    icon: IconBrandGithub,
  },
  {
    title: 'Nourish Now - Meal Planning App',
    image:
      stillImage,
    icon: IconBrandGithub,
  },
  {
    title: 'Code Quiz',
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    icon: IconBrandGithub,
  },
  {
    title: 'Password Generator',
    image:
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    icon: IconBrandGithub,
  },
];

export function Portfolio() {
  const cards = mockdata.map((article) => (
    <Card key={article.title} p="md" radius="md" component="a" href="#" className={classes.card}>
      <AspectRatio ratio={1920 / 1080}>
        <Image src={article.image} />
      </AspectRatio>
      <Group>
      <Text className={classes.title} mt={5}>
        {article.title}
      </Text>
      <article.icon/>
      </Group>
    </Card>
  ));

  return (
    <Container py="xl">
      <SimpleGrid cols={{ base: 1, sm: 2 }}>{cards}</SimpleGrid>
    </Container>
  );
}