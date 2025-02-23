import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box, Container, AppBar, Toolbar, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import Profile from './components/Profile';
import Matches from './components/Matches';
import Home from './components/Home';
import ProfileList from './components/ProfileList';
import ProfileDetail from './components/ProfileDetail';
import PropertyDetail from './components/PropertyDetail';

const MainContent = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
}));

const App = () => {
  return (
    <Box sx={{ flexGrow: 1, bgcolor: 'background.default', minHeight: '100vh' }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component={Button} color="inherit" href="/" sx={{ mr: 'auto' }}>
            Roommate Matcher
          </Typography>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Button color="inherit" href="/profile">Profile</Button>
            <Button color="inherit" href="/matches">Find Matches</Button>
            <Button color="inherit" href="/properties">Properties</Button>
            <Button color="inherit" href="/profiles">Browse Profiles</Button>
          </Box>
        </Toolbar>
      </AppBar>
      <MainContent>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/matches" element={<Matches />} />
          <Route path="/properties" element={<Matches />} />
          <Route path="/profiles" element={<ProfileList />} />
          <Route path="/profile/:id" element={<ProfileDetail />} />
          <Route path="/property/:id" element={<PropertyDetail />} />
        </Routes>
      </MainContent>
    </Box>
  );
};

export default App;