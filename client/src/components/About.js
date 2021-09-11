import React from "react";
import { Card } from "semantic-ui-react";

const About = () => {
  return (
    <div style={{margin: "20px"}}>
      <h1>In Memory of Tom</h1>
      <p> This app is essentially an estate sale for our dear beloved Tom. We morn his passing but we are excited to sell his items and provide all the services that helped him enjoy the great indoors. Enjoy shopping and hiring services! Items range from pet monkeys to a green smoothies. Not only can you buy items and hire services you can also sell and add your own services! </p>
     <Card style={{margin: "20px"}}>
        <Card.Content>
            <Card.Header >Tom</Card.Header>
                <Card.Meta>Tom's final words about Tom</Card.Meta>
                <Card.Description>
                I played too many video games, I ate too much taco bell and I died.
                </Card.Description>
            </Card.Content>
        </Card>
        <Card style={{margin: "20px"}}>
        <Card.Content>
            <Card.Header >Michaela</Card.Header>
                <Card.Meta>Michaela's final words about Tom</Card.Meta>
                <Card.Description>
                He was the top of the class and I always looked up to him for that.
                </Card.Description>
            </Card.Content>
        </Card>
        <Card style={{margin: "20px"}}>
        <Card.Content>
            <Card.Header >Elise</Card.Header>
                <Card.Meta>Elise's final words about Tom</Card.Meta>
                <Card.Description>
                I kept thinking he lived in Daybreak. Just another straight white male with a hat, I guess.
                </Card.Description>
            </Card.Content>
        </Card>
        <Card style={{margin: "20px"}}>
        <Card.Content>
            <Card.Header>Kelsey</Card.Header>
                <Card.Meta>Kelsey's final words about Tom</Card.Meta>
                <Card.Description>
                I just wish I was like Tom. I wish I had his tenacity and determination to expand upon digital horizons.
                </Card.Description>
            </Card.Content>
        </Card>
    </div>
  )
};

export default About;