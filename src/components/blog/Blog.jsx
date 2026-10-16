import React from "react";
import {
  Container,
  Stack,
  Box,
  Typography,
} from "@mui/material";

import Recents from "../recents/Recents";
import Rightbar from "../rightbar/Rightbar";

const Blog = () => {
  return (
    <Container>
      <Typography
        variant="h3"
        align="center"
        sx={{ mt: 4 }}
      >
        Fashion Blog
      </Typography>

      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={5}
        mt={4}
      >
        <Box flex={3}>
          <Recents />
        </Box>

        <Box flex={1}>
          <Rightbar />
        </Box>
      </Stack>
    </Container>
  );
};

export default Blog;