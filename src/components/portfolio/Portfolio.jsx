import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";

import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";
import image4 from "../../assets/image4.jpg";

const Portfolio = () => {
  return (
    <Container sx={{ mt: 5 }}>
      <Typography
        variant="h3"
        align="center"
        gutterBottom
      >
        Our Portfolio
      </Typography>

      <Typography
        align="center"
        color="gray"
        mb={5}
      >
        Showcasing our finest fashion and luxury collections
      </Typography>

      <Grid container spacing={4}>
        {[image1, image2, image3, image4].map(
          (img, index) => (
            <Grid item md={6} xs={12} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  height="350"
                  image={img}
                />
                <CardContent>
                  <Typography variant="h6">
                    Collection {index + 1}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          )
        )}
      </Grid>
    </Container>
  );
};

export default Portfolio;