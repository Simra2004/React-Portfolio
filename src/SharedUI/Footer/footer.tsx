import { Box, Typography, IconButton, Link } from "@mui/material";
import { BsGithub, BsLinkedin, BsEnvelope } from "react-icons/bs";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#1e1e1e",
        color: "white",
        padding: 4,
        marginTop: 8,
        textAlign: "center",
      }}
    >
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        Simra Faisal
      </Typography>
      <Typography variant="body2" sx={{ mb: 2 }}>
        © {new Date().getFullYear()} All rights reserved.
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
        <IconButton
          component={Link}
          href="https://github.com/Simra2004"
          target="_blank"
          sx={{ color: "white" }}
        >
          <BsGithub />
        </IconButton>
        <IconButton
          component={Link}
          href="https://www.linkedin.com/in/socialmediastrategy/"
          target="_blank"
          sx={{ color: "white" }}
        >
          <BsLinkedin />
        </IconButton>
        <IconButton
          component={Link}
          href="mailto:simrafaisal103@gmail.com"
          sx={{ color: "white" }}
        >
          <BsEnvelope />
        </IconButton>
      </Box>
    </Box>
  );
}

export default Footer;
