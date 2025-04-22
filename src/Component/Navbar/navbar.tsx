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
      backgroundColor: "white",
      boxShadow: 10,
      width: "100%",
      // zIndex: (theme) => theme.zIndex.drawer + 1, 
    }}
  >
  
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "black" }}>
          [Simra's Portfolio]
        </Typography>
        <Box sx={{ display: "flex", gap: 3 }}>
          {navItems.map((item) => (
            <Button
              key={item}
              sx={{ color: "black", fontWeight: "300", textTransform: "none" }}
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
