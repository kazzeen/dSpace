import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Paper,
  Card,
  CardContent,
  CardMedia,
  Stack
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: 'AI-Powered Matching',
      description: 'Our advanced algorithm finds your perfect roommate based on lifestyle, preferences, and habits.',
      image: 'https://via.placeholder.com/400x300'
    },
    {
      title: 'Property Search',
      description: 'Browse through curated properties that match your budget and location preferences.',
      image: 'https://via.placeholder.com/400x300'
    },
    {
      title: 'Verified Profiles',
      description: 'Connect with verified roommates to ensure a safe and reliable matching experience.',
      image: 'https://via.placeholder.com/400x300'
    }
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'background.paper',
          pt: 8,
          pb: 6,
          borderRadius: { xs: 0, sm: 2 },
          mt: 2
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                component="h1"
                variant="h2"
                color="primary"
                gutterBottom
                sx={{ fontWeight: 'bold' }}
              >
                Find Your Perfect
                <br />
                Roommate Match
              </Typography>
              <Typography variant="h5" color="text.secondary" paragraph>
                Using AI-powered matching, we help you find compatible roommates
                and ideal living spaces that fit your lifestyle and preferences.
              </Typography>
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={2}
                sx={{ mt: 4 }}
              >
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => navigate('/profile')}
                  sx={{ minWidth: 200 }}
                >
                  Create Profile
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  onClick={() => navigate('/matches')}
                  sx={{ minWidth: 200 }}
                >
                  Find Matches
                </Button>
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="https://via.placeholder.com/600x400"
                alt="Roommate matching"
                sx={{
                  width: '100%',
                  borderRadius: 2,
                  boxShadow: 3
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Container sx={{ py: 8 }} maxWidth="lg">
        <Typography
          variant="h3"
          align="center"
          color="primary"
          gutterBottom
          sx={{ mb: 6 }}
        >
          How It Works
        </Typography>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item key={index} xs={12} md={4}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  bgcolor: 'background.paper'
                }}
              >
                <CardMedia
                  component="img"
                  image={feature.image}
                  alt={feature.title}
                  sx={{ height: 200 }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {feature.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Call to Action */}
        <Paper
          sx={{
            mt: 8,
            p: 6,
            textAlign: 'center',
            bgcolor: 'background.paper',
            borderRadius: 2
          }}
        >
          <Typography variant="h4" color="primary" gutterBottom>
            Ready to Find Your Perfect Match?
          </Typography>
          <Typography variant="h6" color="text.secondary" paragraph>
            Join our community of roommate seekers today and find your ideal living situation.
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate('/profile')}
            sx={{ mt: 2, minWidth: 200 }}
          >
            Get Started
          </Button>
        </Paper>
      </Container>
    </Box>
  );
};

export default Home;
