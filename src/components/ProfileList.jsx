import React from 'react';
import {
  Box,
  Grid,
  Paper,
  Typography,
  Card,
  CardContent,
  Chip,
  Button,
  List,
  ListItem,
  ListItemText,
  Divider
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AdContainer from './AdContainer';

const ProfileList = () => {
  const navigate = useNavigate();
  // Mock data - replace with actual data from backend/state management
  const profiles = [
    {
      id: 1,
      name: 'John Doe',
      age: 25,
      occupation: 'Software Engineer',
      likes: ['Reading', 'Gaming', 'Cooking'],
      dislikes: ['Loud music', 'Smoking'],
      dealBreakers: ['Party lifestyle'],
      propertyPreferences: {
        maxRent: 2000,
        location: 'Downtown',
        features: ['Garage', 'In-unit Laundry']
      }
    },
    {
      id: 2,
      name: 'Jane Smith',
      age: 28,
      occupation: 'Designer',
      likes: ['Art', 'Yoga', 'Travel'],
      dislikes: ['Late nights', 'Mess'],
      dealBreakers: ['Smoking'],
      propertyPreferences: {
        maxRent: 1800,
        location: 'Suburbs',
        features: ['Pet Friendly', 'Furnished']
      }
    }
  ];

  const ProfileCard = ({ profile }) => (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', bgcolor: 'background.paper' }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {profile.name}
        </Typography>
        <Typography color="text.secondary" gutterBottom>
          {profile.age} years old • {profile.occupation}
        </Typography>
        
        <Divider sx={{ my: 1 }} />
        
        <List dense>
          <ListItem>
            <ListItemText
              primary="Likes"
              secondary={
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {profile.likes.map((like, index) => (
                    <Chip
                      key={index}
                      label={like}
                      size="small"
                      color="primary"
                    />
                  ))}
                </Box>
              }
            />
          </ListItem>
          
          <ListItem>
            <ListItemText
              primary="Dislikes"
              secondary={
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {profile.dislikes.map((dislike, index) => (
                    <Chip
                      key={index}
                      label={dislike}
                      size="small"
                      color="secondary"
                    />
                  ))}
                </Box>
              }
            />
          </ListItem>
          
          <ListItem>
            <ListItemText
              primary="Deal Breakers"
              secondary={
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {profile.dealBreakers.map((dealBreaker, index) => (
                    <Chip
                      key={index}
                      label={dealBreaker}
                      size="small"
                      color="error"
                    />
                  ))}
                </Box>
              }
            />
          </ListItem>
        </List>

        <Divider sx={{ my: 1 }} />

        <Typography variant="subtitle1" gutterBottom>
          Property Preferences
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Max Rent: ${profile.propertyPreferences.maxRent}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Location: {profile.propertyPreferences.location}
        </Typography>
        <Box sx={{ mt: 1, display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
          {profile.propertyPreferences.features.map((feature, index) => (
            <Chip
              key={index}
              label={feature}
              size="small"
              variant="outlined"
            />
          ))}
        </Box>

        <Button
          variant="contained"
          fullWidth
          sx={{ mt: 2 }}
          onClick={() => navigate(`/profile/${profile.id}`)}
        >
          View Full Profile
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <Box sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        User Profiles
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" gutterBottom>
        Browse through potential roommates and their preferences
      </Typography>

      <Grid container spacing={3} sx={{ mt: 2 }}>
        {profiles.map((profile) => (
          <Grid item key={profile.id} xs={12} sm={6} md={4}>
            <ProfileCard profile={profile} />
          </Grid>
        ))}
      </Grid>
      <AdContainer type="banner" />
    </Box>
  );
};

export default ProfileList;