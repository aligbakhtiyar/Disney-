import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";
import Recommends from "./Recommends";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Trending from "./Trending";



const Home = (props) => {
  return (
    <Container>
        <ImgSlider/>
        <Viewers />
        <Recommends/>
        <NewDisney/>
        <Originals/>
        <Trending/>
      
    </Container>
  )
}

const Container = styled.main`
position: relative;
mid-height: calc(100% - 250px);
over-flow-x: hidden;
top: 72px;
margin-left: 20px
padding: 0 calc(3.5vw -5px)

&:after{
  background: url("/images/home-background.png")
  no-repeat fixed;
  content: "";
  inset: 0px;
  opacity:1;
  z-index: -1;

}

`;

export default Home
