import React, { useState } from 'react';
import {
  Box,
  Grid,
  Paper,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Rating,
  Button,
  List,
  ListItem,
  ListItemText,
  Divider
} from '@mui/material';

const Matches = () => {
  const [matches, setMatches] = useState({
    roommates: [
      {
        id: 1,
        name: 'John Doe',
        age: 25,
        occupation: 'Software Engineer',
        compatibility: 85,
        likes: ['Reading', 'Gaming', 'Cooking'],
        dislikes: ['Loud music', 'Smoking'],
        dealBreakers: ['Party lifestyle']
      }
    ],
    properties: [
      {
        id: 1,
        title: 'Modern Downtown Apartment',
        price: 1800,
        location: 'Downtown',
        features: ['Garage', 'In-unit Laundry', 'Central AC'],
        compatibility: 90,
        imageUrl: 'https://via.placeholder.com/300x200'
      }
    ]
  });

  const MatchCard = ({ match, type }) => {
    const isRoommate = type === 'roommate';

    return (
      <Card sx={{ mb: 2, backgroundColor: 'background.paper' }}>
        {!isRoommate && (
          <CardMedia
            component="img"
            height="200"
            image={match.imageUrl}
            alt={match.title}
          />
        )}
        <CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="h6" component="div">
              {isRoommate ? match.name : match.title}
            </Typography>
            <Chip
              label={`${match.compatibility}% Match`}
              color={match.compatibility > 80 ? 'success' : 'primary'}
            />
          </Box>

          {isRoommate ? (
            <>
              <Typography color="text.secondary" gutterBottom>
                {match.age} years old • {match.occupation}
              </Typography>
              <Divider sx={{ my: 1 }} />
              <List dense>
                <ListItem>
                  <ListItemText
                    primary="Likes"
                    secondary={match.likes.join(', ')}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Dislikes"
                    secondary={match.dislikes.join(', ')}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Deal Breakers"
                    secondary={match.dealBreakers.join(', ')}
                  />
                </ListItem>
              </List>
            </>
          ) : (
            <>
              <Typography variant="h6" color="primary">
                ${match.price}/month
              </Typography>
              <Typography color="text.secondary" gutterBottom>
                {match.location}
              </Typography>
              <Box sx={{ mt: 1 }}>
                {match.features.map((feature, index) => (
                  <Chip
                    key={index}
                    label={feature}
                    size="small"
                    sx={{ mr: 0.5, mb: 0.5 }}
                  />
                ))}
              </Box>
            </>
          )}
          <Box sx={{ mt: 2 }}>
            <Button variant="contained" fullWidth>
              {isRoommate ? 'Contact Potential Roommate' : 'View Property'}
            </Button>
          </Box>
        </CardContent>
      </Card>
    );
  };

  return (
    <Box sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Your Matches
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" gutterBottom>
        AI-powered matches based on your preferences
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2, backgroundColor: 'background.default' }}>
            <Typography variant="h5" gutterBottom>
              Potential Roommates
            </Typography>
            {matches.roommates.map(roommate => (
              <MatchCard key={roommate.id} match={roommate} type="roommate" />
            ))}
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2, backgroundColor: 'background.default' }}>
            <Typography variant="h5" gutterBottom>
              Recommended Properties
            </Typography>
            {matches.properties.map(property => (
              <MatchCard key={property.id} match={property} type="property" />
            ))}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Matches;
