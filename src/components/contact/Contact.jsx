import React from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Stack,
  Paper,
} from "@mui/material";

const Contact = () => {
  return (
    <Container maxWidth="md">
      <Paper sx={{ p: 5, mt: 5 }}>
        <Typography
          variant="h3"
          align="center"
          gutterBottom
        >
          Contact Us
        </Typography>

        <Stack spacing={3}>
          <TextField
            label="Full Name"
            fullWidth
          />

          <TextField
            label="Email"
            fullWidth
          />

          <TextField
            label="Subject"
            fullWidth
          />

          <TextField
            label="Message"
            multiline
            rows={5}
            fullWidth
          />

          <Button
            variant="contained"
            sx={{
              background: "black",
            }}
          >
            Send Message
          </Button>
        </Stack>
      </Paper>
    </Container>
  );
};

export default Contact;