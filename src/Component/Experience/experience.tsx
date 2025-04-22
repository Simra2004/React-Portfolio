import * as React from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Typography,
  Grid,
  Box,
} from '@mui/material';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

// Experience type
interface Experience {
  title: string;
  company: string;
  duration: string;
  location: string;
  description: string;
  skills?: string;
  contact?: string;
  results?: string[];
}

// Sample experience data
const Experiences: Experience[] = [
  {
    title: "Associate Software Engineer",
    company: "1PercentLalbs",
    duration: "02/2025 - Present",
    location: "Karachi, Pakistan",
    description: "SOFTWARE DEVELOPMENT COMPANY",
    skills: "REACT, JAVASCRIPT, VITE",
    contact: "CFO - SAAD +923330231707",
  },
  {
    title: "Social Media Marketing Specialist",
    company: "Digital Valleys",
    duration: "09/2023 - 12/2024",
    location: "Karachi, Pakistan",
    description: "Social Media Marketing Agency",
    skills: "Handled strategies for different brands",
    contact: "CEO - JAWWAD +923312474293",
  },
  {
    title: "Digital Marketing Manager",
    company: "Saeed Ghani",
    duration: "09/2023 - 02/2025",
    location: "Pakistan",
    description: "SEO, product photography, ads, posting schedules.",
    results: ["Generated great results"],
  },
  {
    title: "Digital Marketing Specialist",
    company: "Sveston Wvatones",
    duration: "08/2023 - 02/2025",
    location: "Pakistan",
    description: "Drove maximum engagement through creative content.",
    results: ["Product campaigns and SEO"],
  },
  {
    title: "Social Media Marketing Manager",
    company: "Garnier Club",
    duration: "01/2024 - 03/2024",
    location: "Pakistan",
    description: "Crafted Facebook campaigns, IG management, layout design.",
    results: [
      "Managed IG presence",
      "Designed grid layouts",
      "Scheduled posts",
    ],
  },
  {
    title: "Middle School English Teacher",
    company: "Happy Home School System",
    duration: "04/2022 - 06/2022",
    location: "Karachi, Pakistan",
    description: "Community Internship",
  },
];

// Individual card component
function ExperienceCard({ experience }: { experience: Experience }) {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <Card sx={{ maxWidth: 345, width: '100%' }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }}>
            {experience.title.charAt(0)}
          </Avatar>
        }
        action={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
        title={experience.title}
        subheader={`${experience.company} | ${experience.duration}`}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          <strong>Location:</strong> {experience.location}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Description:</strong> {experience.description}
        </Typography>
        {experience.skills && (
          <Typography variant="body2" color="text.secondary">
            <strong>Skills:</strong> {experience.skills}
          </Typography>
        )}
        {experience.contact && (
          <Typography variant="body2" color="text.secondary">
            <strong>Contact:</strong> {experience.contact}
          </Typography>
        )}
      </CardContent>
      <CardActions disableSpacing>
        <IconButton>
          <FavoriteIcon />
        </IconButton>
        <IconButton>
          <ShareIcon />
        </IconButton>
        <IconButton
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
          aria-label="show more"
          sx={{ marginLeft: 'auto' }}
        >
          <ExpandMoreIcon
            sx={{
              transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.3s ease',
            }}
          />
        </IconButton>
      </CardActions>
      {expanded && (
  <CardContent>
    {experience.results?.map((result, index) => (
      <Typography key={index} paragraph>
        {result}
      </Typography>
    ))}
  </CardContent>
)}

    </Card>
  );
}
export default function ExperienceCardsList() {
  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Grid container spacing={3} justifyContent="center">
        {Experiences.map((exp, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ExperienceCard experience={exp} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
