import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import { Grid } from "@mui/material";
// @mui/styles.
// import { makeStyles } from "@mui/styles";
// const style = makeStyles({
//   root: {
//     width: "100vw",
//   },
// });

export default function UserCard(props) {
  const theme = useTheme();
  //   const classes = style();
  const { id, title, price, description, category, image } = props;
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card sx={{ display: "flex" }} style={{ position: "relative" }}>
        <Box sx={{ display: "flex", flexDirection: "raw" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              {title}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {price}
            </Typography>
          </CardContent>
        </Box>
        <Box>
          <CardMedia
            component="img"
            style={{ position: "absolute", right: "0px" }}
            sx={{ width: 150 }}
            image={image}
            alt="Live from space album cover"
          />
        </Box>
      </Card>
    </Grid>
  );
}
