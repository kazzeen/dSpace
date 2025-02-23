import React from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  Chip,
  List,
  ListItem,
  ListItemText,
  Divider,
  ImageList,
  ImageListItem
} from '@mui/material';
import { useParams } from 'react-router-dom';
import AdContainer from './AdContainer';

const PropertyDetail = () => {
  const { id } = useParams();

  // Mock data - replace with actual data fetching logic
  const property = {
    id: 1,
    title: 'Modern Downtown Apartment',
    price: 1800,
    location: 'Downtown',
    description: 'Luxurious modern apartment in the heart of downtown. Recently renovated with high-end finishes and appliances.',
    features: ['Garage', 'In-unit Laundry', 'Central AC', 'Stainless Steel Appliances', 'Hardwood Floors'],
    images: [
      'https://via.placeholder.com/800x600',
      'https://via.placeholder.com/800x600',
      'https://via.placeholder.com/800x600'
    ],
    details: {
      bedrooms: 2,
      bathrooms: 2,
      squareFeet: 1200,
      yearBuilt: 2018,
      petPolicy: 'Pets allowed with deposit',
      parking: 'Covered garage parking included',
      utilities: 'Water and trash included'
    }
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Paper sx={{ p: 4, bgcolor: 'background.paper' }}>
          {/* Property Header */}
          <Typography variant="h4" gutterBottom>
            {property.title}
          </Typography>
          <Typography variant="h5" color="primary" gutterBottom>
            ${property.price}/month
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" gutterBottom>
            {property.location}
          </Typography>

          <Divider sx={{ my: 3 }} />

          {/* Property Images */}
          <ImageList sx={{ width: '100%', height: 450 }} cols={2} rowHeight={400} gap={8}>
            {property.images.map((image, index) => (
              <ImageListItem key={index}>
                <img
                  src={image}
                  alt={`Property view ${index + 1}`}
                  loading="lazy"
                  style={{ borderRadius: 8 }}
                />
              </ImageListItem>
            ))}
          </ImageList>

          <Divider sx={{ my: 3 }} />

          {/* Property Description */}
          <Typography variant="h6" gutterBottom>Description</Typography>
          <Typography paragraph color="text.secondary">
            {property.description}
          </Typography>

          <Grid container spacing={4}>
            {/* Property Details */}
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom>Property Details</Typography>
              <List>
                <ListItem>
                  <ListItemText primary="Bedrooms" secondary={property.details.bedrooms} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Bathrooms" secondary={property.details.bathrooms} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Square Feet" secondary={`${property.details.squareFeet} sq ft`} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Year Built" secondary={property.details.yearBuilt} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Pet Policy" secondary={property.details.petPolicy} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Parking" secondary={property.details.parking} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Utilities" secondary={property.details.utilities} />
                </ListItem>
              </List>
            </Grid>

            {/* Features */}
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom>Features & Amenities</Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {property.features.map((feature, index) => (
                  <Chip
                    key={index}
                    label={feature}
                    variant="outlined"
                    sx={{ m: 0.5 }}
                  />
                ))}
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Box>
      <AdContainer type="banner" />
    </Container>
  );
};

export default PropertyDetail;