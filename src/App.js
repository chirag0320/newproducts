import { styled } from "@mui/material/styles";
import UserCard from "./Components/Card/Card";
// import CardHeader from "@mui/material/CardHeader";
// import CardMedia from "@mui/material/CardMedia";
// import CardContent from "@mui/material/CardContent";
// import CardActions from "@mui/material/CardActions";
// import Collapse from "@mui/material/Collapse";
// import Avatar from "@mui/material/Avatar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import { red } from "@mui/material/colors";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import ShareIcon from "@mui/icons-material/Share";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
// import userim from "./ima.jfif";
import { useEffect, useState } from "react";
import Header from "./Components/Header/Header";
import Filter from "./Components/Filter/Filter";
import { CssBaseline, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { GetData } from "./Redux/ReducerSlice";
function App() {
  const data = useSelector((state) => state.reducerSlice);
  const dispatch = useDispatch();
  console.log(data);
  const arr = [1, 2, 3, 4, 5, 6, 7, 8];
  useEffect(() => {
    dispatch(GetData());
  }, []);
  return (
    <>
      <Header />

      <Filter />
      <Grid container>
        {data.products.map((e) => {
          return (
            <UserCard
              id={e.id}
              title={e.title}
              price={e.price}
              description={e.discription}
              category={e.category}
              image={e.image}
            />
          );
        })}
      </Grid>
      <CssBaseline />
    </>
  );
}

export default App;
