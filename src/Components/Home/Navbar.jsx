import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import { Box } from '@mui/system';
import {navData} from '../../Constants/Data';

const Component = styled(Box)`
display:flex;
margin:55px 130px 0 130px;
justify-content: space-between;
`
const Container = styled(Box)`
padding: 12px 8px;
text-align:center;
`
const Text = styled(Typography)`
font-size:14px;
font-weight:600;
font-family:inherit;
`

const Navbar = () => {
  return (
    <Box>
    {
        navData.map(data=>{
            <Container>
                <img src={data.url} alt="nav" style={{width:64,border: "2px solid red"}}/>
                <Text>{data.text}</Text>
            </Container>
        })
    }
    </Box>
    
  )
}

export default Navbar