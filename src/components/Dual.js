import React from "react";
import { Grid, Image } from "semantic-ui-react";

const Dual = () => (
  <Grid columns={3} divided>
    <Grid.Row>
      <Grid.Column>Hello World!</Grid.Column>
      <Grid.Column>
        <Image src="https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzEwNC84MTkvb3JpZ2luYWwvY3V0ZS1raXR0ZW4uanBn" />
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default Dual;
