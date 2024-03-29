import { SimpleGrid, Card, Image, Text, Container, AspectRatio, Group, Anchor } from '@mantine/core';
import classes from './Portfolio.module.css';
import stillImage from "../../assets/stillLife.jpg";
import { IconBrandGithub} from '@tabler/icons-react';
// import { Link } from "react-router-dom"

const data = [
  {
    title: 'Gallivant - Travel Planning App',
    image:
      'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    icon: IconBrandGithub,
    link: "https://github.com/j0shuaj0nes/Gallivant"
  },
  {
    title: 'Nourish Now - Meal Planning App',
    image:
      stillImage,
    icon: IconBrandGithub,
    link: "https://github.com/dtran44/NourishNow"
  },
  {
    title: 'Skill Sharing App',
    image:
      'https://images.unsplash.com/photo-1573164713988-8665fc963095?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=980&q=80',
    icon: IconBrandGithub,
    link: "https://github.com/j0shuaj0nes/SkillSetGoV2"
  },
  {
    title: 'Password Generator',
    image:
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    icon: IconBrandGithub,
    link: "https://github.com/dtran44/Password-Generator"
  },
  {
    title: 'Code Quiz',
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    icon: IconBrandGithub,
    link: "https://github.com/dtran44/Java-Code-Quiz"
  },
  {
    title: 'SVG Logomaker',
    image:
    'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    icon: IconBrandGithub,
    link: "https://github.com/dtran44/SVG-Logo-Maker"
  },
];

export function Portfolio() {
  const cards = data.map((article) => (
    <Card key={article.title} p="md" radius="md" component="a" href="#" className={classes.card}>
      <AspectRatio ratio={1920 / 1080}>
        <Image src={article.image} />
        {/* <Link to={{ pathname: article.link }} target="_blank"></Link> */}
        <Anchor href={article.link} target="_blank">
    </Anchor>
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