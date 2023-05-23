import { Container, Grid } from '@mui/material';
import {Navbar} from './components/Navbar';
import { Result } from './components/Result';
import { SliderSelect } from './components/SliderSelect';
import { Tenure } from './components/Tenure';

function App() {
  return (
    <div className="App">
        {/* <Navbar/> */}
        <Navbar/>
        <Container maxWidth = "xl">
        <Grid container spacing={5}>
          <Grid item md={6}>
            <SliderSelect/>
            <Tenure/>
          </Grid>
          <Grid item md={6}>
            <Result/>
          </Grid>
        </Grid>
        </Container>
    </div>
  );
}

export default App;
