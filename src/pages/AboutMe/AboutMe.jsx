import { Anchor, Avatar, Container, Title, Text, Button, Group } from "@mantine/core";
import classes from "./AboutMe.module.css";
import { Link } from "react-router-dom";

export function AboutMe() {
  return (
    <div className={classes.root}>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>

            <Group>
            <Title className={classes.title}>
              Diana Tran
            </Title>
            <Avatar
                component="a"
                href="https://github.com/rtivital"
                target="_blank"
                src="avatar.png"
                alt="it's me"
              />
            </Group>

            <Text className={classes.description} mt={30}>
              I am a Full Web Stacker Developer by night and a Tax Accountant by
              day. I enjoy piecing together infomation and solutions which is
              what draws me to the realms of tax and web development.
            </Text>

            <Button
              variant="gradient"
              gradient={{ from: "pink", to: "yellow" }}
              size="xl"
              className={classes.control}
              mt={40}
            >
              <Anchor c="white" component={Link} to="/contact">
                Contact Me{" "}
              </Anchor>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
