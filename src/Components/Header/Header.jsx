import { AppBar, Toolbar, styled } from '@mui/material'
import { Box } from '@mui/system'
import imgg from '../../Images/logo1.png'
// Components //
import Search from './Search'
import CustomButtons from './CustomButtons'

const StyledHeader=styled(AppBar)`
   background:#f16c;
   height:55px;
`
const Component = styled(Box)`
  margin-left:5%;
`

const CustomButtonWrapper = styled(Box)`
 margin: 0 5% 0 auto;
`

const Header = () => {

  return (
    <StyledHeader>
        <Toolbar style={{minHeight:55}}>
            <Component>
      
               <img src={imgg} alt="logo" width="150px" height="45px"/>
            </Component>
            <Search/>
            <CustomButtonWrapper>
              <CustomButtons/>
            </CustomButtonWrapper>
        </Toolbar>
    </StyledHeader>
  )
}

export default Header