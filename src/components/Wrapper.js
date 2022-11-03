import { Container } from "@mui/material";


const Wrapper = ({children}) => (
    <Container sx={{ width: 1,  pb: 15, mt: {xs: 5, sm: 6, md: 8} }}>
     {children}
    </Container>
  );

  export default Wrapper;