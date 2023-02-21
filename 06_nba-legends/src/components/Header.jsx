import nbaLogo from "../assets/nba-logo.png"
import Container from "react-bootsrap/Container"
import Image from "react-boostrap/Image"
const Header = () => {
  return (
    <Container>
        <Image src={nbaLogo} width= "200px"></Image>
        <h1 className="my-2 font-monospace display-4 fw-bold">NBA Legends</h1>//*my altan üsten
        //*margin verme
    </Container>
  )
}

export default Header
