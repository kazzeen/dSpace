import React from 'react';
import {
  Box,
  Paper,
  Typography,
  Grid,
  Avatar,
  Chip,
  List,
  ListItem,
  ListItemText,
  Divider,
  Container
} from '@mui/material';
import { useParams } from 'react-router-dom';
import AdContainer from './AdContainer';

const ProfileDetail = () => {
  const { id } = useParams();

  // Mock data - replace with actual data fetching logic
  const profile = {
    id: 1,
    name: 'John Doe',
    age: 25,
    occupation: 'Software Engineer',
    bio: 'Friendly software engineer looking for a compatible roommate. I enjoy a clean living space and respect others privacy.',
    imageUrl: 'https://via.placeholder.com/200',
    likes: ['Reading', 'Gaming', 'Cooking'],
    dislikes: ['Loud music', 'Smoking'],
    dealBreakers: ['Party lifestyle'],
    propertyPreferences: {
      maxRent: 2000,
      location: 'Downtown',
      features: ['Garage', 'In-unit Laundry', 'Central AC']
    },
    schedule: {
      workHours: '9 AM - 5 PM',
      typicalSleepTime: '11 PM - 7 AM'
    },
    cleaningHabits: ['Daily kitchen cleanup', 'Weekly deep cleaning'],
    socialStyle: 'Balanced - enjoys both social time and quiet time'
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Paper sx={{ p: 4, bgcolor: 'background.paper' }}>
          <Grid container spacing={4}>
            {/* Profile Header */}
            <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
              <Avatar
                src={profile.imageUrl}
                alt={profile.name}
                sx={{
                  width: 200,
                  height: 200,
                  mx: 'auto',
                  mb: 2,
                  border: 3,
                  borderColor: 'primary.main'
                }}
              />
              <Typography variant="h4" gutterBottom>
                {profile.name}
              </Typography>
              <Typography variant="h6" color="text.secondary">
                {profile.age} years old • {profile.occupation}
              </Typography>
            </Grid>

            {/* Bio and Basic Info */}
            <Grid item xs={12} md={8}>
              <Typography variant="h6" gutterBottom>About Me</Typography>
              <Typography paragraph color="text.secondary">
                {profile.bio}
              </Typography>
              
              <Typography variant="h6" gutterBottom>Schedule</Typography>
              <List dense>
                <ListItem>
                  <ListItemText
                    primary="Work Hours"
                    secondary={profile.schedule.workHours}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Typical Sleep Schedule"
                    secondary={profile.schedule.typicalSleepTime}
                  />
                </ListItem>
              </List>

              <Typography variant="h6" gutterBottom>Social Style</Typography>
              <Typography paragraph color="text.secondary">
                {profile.socialStyle}
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Divider sx={{ my: 2 }} />
            </Grid>

            {/* Preferences Section */}
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom>Preferences</Typography>
              
              <Typography variant="subtitle1" gutterBottom>Likes</Typography>
              <Box sx={{ mb: 2 }}>
                {profile.likes.map((like, index) => (
                  <Chip
                    key={index}
                    label={like}
                    color="primary"
                    sx={{ m: 0.5 }}
                  />
                ))}
              </Box>

              <Typography variant="subtitle1" gutterBottom>Dislikes</Typography>
              <Box sx={{ mb: 2 }}>
                {profile.dislikes.map((dislike, index) => (
                  <Chip
                    key={index}
                    label={dislike}
                    color="secondary"
                    sx={{ m: 0.5 }}
                  />
                ))}
              </Box>

              <Typography variant="subtitle1" gutterBottom>Deal Breakers</Typography>
              <Box sx={{ mb: 2 }}>
                {profile.dealBreakers.map((dealBreaker, index) => (
                  <Chip
                    key={index}
                    label={dealBreaker}
                    color="error"
                    sx={{ m: 0.5 }}
                  />
                ))}
              </Box>
            </Grid>

            {/* Property Preferences */}
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom>Property Preferences</Typography>
              <List>
                <ListItem>
                  <ListItemText
                    primary="Maximum Rent"
                    secondary={`$${profile.propertyPreferences.maxRent}/month`}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Preferred Location"
                    secondary={profile.propertyPreferences.location}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Desired Features"
                    secondary={
                      <Box sx={{ mt: 1 }}>
                        {profile.propertyPreferences.features.map((feature, index) => (
                          <Chip
                            key={index}
                            label={feature}
                            variant="outlined"
                            size="small"
                            sx={{ m: 0.5 }}
                          />
                        ))}
                      </Box>
                    }
                  />
                </ListItem>
              </List>

              <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>Cleaning Habits</Typography>
              <List dense>
                {profile.cleaningHabits.map((habit, index) => (
                  <ListItem key={index}>
                    <ListItemText primary={habit} />
                  </ListItem>
                ))}
              </List>
            </Grid>
          </Grid>
        </Paper>
      </Box>
      <AdContainer type="banner" />
    </Container>
  );
};

export default ProfileDetail;