import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button } from '@mui/material';

interface MediaCardProps {
  title: string;
  description: string;
  // image?: string; 
}

export default function MediaCard({ title, description }: MediaCardProps) {
  return (
    <Card sx={{ maxWidth: 345, margin: 1.5 }}>
      <Box sx={{ margin: 2 }}>
        {/* <CardMedia
          sx={{ height: 140 }}
          // image={image || "https://via.placeholder.com/345x140"} 
          title={title}
        /> */}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </Box>
      <CardActions>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', padding: 1 }}>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </Box>
      </CardActions>
    </Card>
  );
}