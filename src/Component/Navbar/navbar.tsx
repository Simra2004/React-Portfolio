import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

const navItems = [
  "Introduction",
  "Work",
  "Experience",
  "Education",
  "Contactme"
];

const Navbar = () => {
  const handleScroll = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AppBar
    position="sticky"
   
    sx={{
      backgroundColor: "black",
      boxShadow: 30,
      width: "100%",
      borderRadius:3
      
     
    }}
  >
  
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "white" }}>
          [Simra's Portfolio]
        </Typography>
        <Box sx={{ display: "flex", gap: 3 }}>
          {navItems.map((item) => (
            <Button
              key={item}
              sx={{ color: "white", fontWeight: "300", textTransform: "none" }}
              onClick={() => handleScroll(item)}
            >
              {item}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
