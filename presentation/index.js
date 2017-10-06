// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Git branching and beyond
          </Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Git basic commands refresh
          </Heading>
          <List>
            <ListItem>git init</ListItem>
            <ListItem>{"git clone <url>"}</ListItem>
            <ListItem>{"git add <file>"}</ListItem>
            <ListItem>{"git commit -m <message>"}</ListItem>
            <ListItem>{"git remote set-url origin <.git url>"}</ListItem>
            <ListItem>{"git push origin <branch>"}</ListItem>
            <ListItem>{"git fetch origin <branch>"}</ListItem>
            <ListItem>{"git pull origin <branch>"}</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>different types of branches
          </Heading>
          <List>
            <ListItem margin={15}>{"local branch(local)"}</ListItem>
            <Text>ex: master</Text>
            <ListItem margin={15}>{"remote tracking branch(local) "}</ListItem>
            <Text>ex: origin/master</Text>
            <ListItem margin={15}>{"remote branch(cloud)"}</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            {"git pull origin <branch>"}
          </Heading>
          <Text size={6} textColor="primary">{"="}</Text>
          <Text size={6} textColor="secondary">{"git fetch origin <branch>"}</Text>
          <Text size={6} textColor="secondary">{"+"}</Text>
          <Text size={6} textColor="secondary">{"git merge origin/<branch>"}</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
