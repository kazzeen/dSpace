import React from 'react';
import { Box, Paper } from '@mui/material';

const AdContainer = ({ type = 'banner', className }) => {
  // Ad slot IDs should be replaced with actual Google AdSense or other ad network IDs
  const adSlots = {
    banner: 'banner-ad-slot-id',
    sidebar: 'sidebar-ad-slot-id',
    native: 'native-ad-slot-id'
  };

  React.useEffect(() => {
    // This is where you would initialize your ad network's code
    // Example for Google AdSense:
    // if (window.adsbygoogle) {
    //   window.adsbygoogle.push({});
    // }
  }, []);

  const getAdDimensions = () => {
    switch (type) {
      case 'banner':
        return { width: '728px', height: '90px' };
      case 'sidebar':
        return { width: '300px', height: '600px' };
      case 'native':
        return { width: '100%', height: 'auto', minHeight: '250px' };
      default:
        return { width: '728px', height: '90px' };
    }
  };

  return (
    <Paper
      component="aside"
      elevation={0}
      sx={{
        bgcolor: 'background.paper',
        p: 1,
        my: 2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        ...getAdDimensions(),
        maxWidth: '100%',
        mx: 'auto',
        overflow: 'hidden',
        opacity: 0.9,
        '&:hover': {
          opacity: 1
        }
      }}
      className={className}
    >
      <Box
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'text.secondary',
          fontSize: '0.875rem'
        }}
      >
        {/* Replace this with actual ad code */}
        Advertisement
      </Box>
    </Paper>
  );
};

export default AdContainer;