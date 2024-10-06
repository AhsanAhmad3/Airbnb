import { Box , Container, Grid } from "@mui/material"
import { SearchResults } from "../section/Search";

const Home = () => {
  return (
    <Container maxWidth="xl">
      <Box>
        <Grid container>
          <Grid item md={3} xs={12}></Grid>
          <Grid item md={9} xs={12}>
            {/* search result */}
            <SearchResults />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Home;
