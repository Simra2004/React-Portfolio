import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button } from '@mui/material';

interface MediaCardProps {
  title: string;
  description: string;
  link:string;
  image?: string; 
}

export default function MediaCard({ title, description , link, image }: MediaCardProps) {
  return (
<Card sx={{ maxWidth: 345, margin: 1.5, borderRadius: 2, overflow: 'hidden' }}>
  <Box>
    <CardMedia
      component="img"
      image={image ?? "https://via.placeholder.com/345x140"}
      sx={{
        height: 150,
        width: '100%',
        objectFit: 'cover',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'scale(1.03)',
          boxShadow: '0 6px 16px rgba(0, 0, 0, 0.25)',
        },
      }}
    />
  </Box>

  <Box sx={{ padding: '12px 16px' }}>
    <Typography variant="h6" fontWeight="bold" gutterBottom>
      {title}
    </Typography>

    <Typography variant="body2" color="text.secondary">
      {description}
    </Typography>
  </Box>

  <CardActions>
    <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', padding: 1 }}>
      <a href={link}  rel="">
        <Button
          size="small"
          variant="contained"
          sx={{
            backgroundColor: '#d78edf',
            color: 'black',
            fontWeight: 'bold',
            borderRadius: '12px',
            padding: '6px 16px',
            fontSize: '0.875rem',
            textTransform: 'none',
            boxShadow: '0 3px 6px rgba(0, 0, 0, 0.16)',
            '&:hover': {
              backgroundColor: '#c77ad4',
            },
          }}
        >
          CODE!
        </Button>
      </a>
    </Box>
  </CardActions>
</Card>

  );
}