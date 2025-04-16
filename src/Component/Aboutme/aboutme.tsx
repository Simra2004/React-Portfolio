import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { Link } from "@mui/material";

const cards = [
  {
    id: 1,
    title: "EMAIL",
    description: "simrafaisal103@gmail.com",
  },
  {
    id: 2,
    title: "CONTACT",
    description: "+1 (630) 397 8999.",
  },
  {
    id: 3,
    title: "LinkedIn",
    link: "www.linkedin.com/techNmarketing",
  },
];

function SelectActionCard() {
  const [selectedCard, setSelectedCard] = React.useState(0);
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        gap: 2
      }}
    >
      {cards.map((card, index) => (
        <Card>
          <CardActionArea
            onClick={() => setSelectedCard(index)}
            data-active={selectedCard === index ? "" : undefined}
            sx={{
              height: "100%",
              "&[data-active]": {
                backgroundColor: "action.selected",
                "&:hover": {
                  backgroundColor: "action.selectedHover",
                },
              },
            }}
          >
            <CardContent sx={{ height: "100%" }}>
              <Typography variant="h5" component="div">
                {card.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {card.description}
                {card.link}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
}

export default SelectActionCard;
