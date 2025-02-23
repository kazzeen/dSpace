import React, { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  TextField,
  Chip,
  Grid,
  Button,
  Slider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Divider
} from '@mui/material';

import { useNavigate } from 'react-router-dom';
import AdContainer from './AdContainer';

const Profile = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({
    name: '',
    age: '',
    occupation: '',
    likes: [],
    dislikes: [],
    dealBreakers: [],
    propertyPreferences: {
      maxRent: 2000,
      location: '',
      features: []
    }
  });

  const [inputValue, setInputValue] = useState('');
  const [inputType, setInputType] = useState('likes');

  const handleAddPreference = () => {
    if (!inputValue.trim()) return;
    setProfile(prev => ({
      ...prev,
      [inputType]: [...prev[inputType], inputValue.trim()]
    }));
    setInputValue('');
  };

  const handleDelete = (type, index) => {
    setProfile(prev => ({
      ...prev,
      [type]: prev[type].filter((_, i) => i !== index)
    }));
  };

  const propertyFeatures = [
    'Garage',
    'Driveway',
    'Lawn',
    'Furnished',
    'Pet Friendly',
    'In-unit Laundry',
    'Central AC'
  ];

  return (
    <Box sx={{ py: 4 }}>
      <Paper sx={{ p: 3, backgroundColor: 'background.paper' }}>
        <Typography variant="h4" gutterBottom>Your Profile</Typography>
        
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Name"
              value={profile.name}
              onChange={(e) => setProfile(prev => ({ ...prev, name: e.target.value }))}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Age"
              type="number"
              value={profile.age}
              onChange={(e) => setProfile(prev => ({ ...prev, age: e.target.value }))}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Occupation"
              value={profile.occupation}
              onChange={(e) => setProfile(prev => ({ ...prev, occupation: e.target.value }))}
              sx={{ mb: 2 }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>Property Preferences</Typography>
            <Typography gutterBottom>Maximum Rent: ${profile.propertyPreferences.maxRent}</Typography>
            <Slider
              value={profile.propertyPreferences.maxRent}
              onChange={(e, newValue) => setProfile(prev => ({
                ...prev,
                propertyPreferences: { ...prev.propertyPreferences, maxRent: newValue }
              }))}
              min={500}
              max={5000}
              step={100}
              valueLabelDisplay="auto"
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Preferred Location"
              value={profile.propertyPreferences.location}
              onChange={(e) => setProfile(prev => ({
                ...prev,
                propertyPreferences: { ...prev.propertyPreferences, location: e.target.value }
              }))}
              sx={{ mb: 2 }}
            />
          </Grid>

          <Grid item xs={12}>
            <Divider sx={{ my: 2 }} />
            <Typography variant="h6" gutterBottom>Preferences</Typography>
            
            <Box sx={{ mb: 2, display: 'flex', gap: 1 }}>
              <FormControl sx={{ minWidth: 120 }}>
                <InputLabel>Type</InputLabel>
                <Select
                  value={inputType}
                  onChange={(e) => setInputType(e.target.value)}
                  label="Type"
                >
                  <MenuItem value="likes">Likes</MenuItem>
                  <MenuItem value="dislikes">Dislikes</MenuItem>
                  <MenuItem value="dealBreakers">Deal Breakers</MenuItem>
                </Select>
              </FormControl>
              <TextField
                fullWidth
                label={`Add ${inputType}`}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleAddPreference()}
              />
              <Button variant="contained" onClick={handleAddPreference}>Add</Button>
            </Box>

            <Box sx={{ mb: 2 }}>
              <Typography variant="subtitle1" gutterBottom>Likes</Typography>
              {profile.likes.map((like, index) => (
                <Chip
                  key={index}
                  label={like}
                  onDelete={() => handleDelete('likes', index)}
                  sx={{ m: 0.5 }}
                />
              ))}
            </Box>

            <Box sx={{ mb: 2 }}>
              <Typography variant="subtitle1" gutterBottom>Dislikes</Typography>
              {profile.dislikes.map((dislike, index) => (
                <Chip
                  key={index}
                  label={dislike}
                  onDelete={() => handleDelete('dislikes', index)}
                  sx={{ m: 0.5 }}
                  color="secondary"
                />
              ))}
            </Box>

            <Box sx={{ mb: 2 }}>
              <Typography variant="subtitle1" gutterBottom>Deal Breakers</Typography>
              {profile.dealBreakers.map((dealBreaker, index) => (
                <Chip
                  key={index}
                  label={dealBreaker}
                  onDelete={() => handleDelete('dealBreakers', index)}
                  sx={{ m: 0.5 }}
                  color="error"
                />
              ))}
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ mt: 3 }}>
          <Button 
            variant="contained" 
            color="primary" 
            size="large"
            onClick={() => {
              // Here you would typically save the profile data to your backend
              // For now we'll just navigate to the profiles page
              navigate('/profiles');
            }}
          >
            Save Profile
          </Button>
        </Box>
      </Paper>
      <AdContainer type="banner" />
    </Box>
  );
};

export default Profile;
