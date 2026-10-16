import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
  Container,
} from "@mui/material";

import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";
import image4 from "../../assets/image4.jpg";
import image5 from "../../assets/image5.jpg";

const products = [
  {
    id: 1,
    title: "Luxury Perfume",
    image: image3,
    price: "$120",
  },
  {
    id: 2,
    title: "Premium Watch",
    image: image4,
    price: "$240",
  },
  {
    id: 3,
    title: "Fashion Shoes",
    image: image1,
    price: "$90",
  },
  {
    id: 4,
    title: "Fashion Accessories",
    image: image2,
    price: "$65",
  },
  {
    id: 5,
    title: "Luxury Collection",
    image: image5,
    price: "$180",
  },
];

const Products = () => {
  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h3" align="center" mb={5}>
        Our Products
      </Typography>

      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item xs={12} md={4} key={product.id}>
            <Card>
              <CardMedia
                component="img"
                height="250"
                image={product.image}
              />

              <CardContent>
                <Typography variant="h6">
                  {product.title}
                </Typography>

                <Typography color="tomato">
                  {product.price}
                </Typography>

                <Button
                  variant="contained"
                  sx={{
                    mt: 2,
                    background: "black",
                  }}
                >
                  View Product
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Products;