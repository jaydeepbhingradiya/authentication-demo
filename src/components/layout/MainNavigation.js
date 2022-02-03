import React from "react";
import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

function MainNavigation() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Leave Application
          </Typography>

          <Button variant="contained" to="/login" component={Link}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default MainNavigation;

//   return (
//     <header>
//       <Link to="/">
//         <div>React Auth</div>
//       </Link>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/login">Login</Link>
//           </li>
//           <li>
//             <Link to="/registration">Registratation</Link>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// }
