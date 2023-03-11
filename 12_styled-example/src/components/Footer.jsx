import StyledFooter from "./styled/FooterStyles"
import Container from "./styled/Conteiner"
import Flex from "./styled/Conteiner"
import Image from "./styled/Image"
import SocialIcons from "./SociallIcons";


export default function Footer() {
    return (
      <StyledFooter>
        <Container>
          <Flex>
            <Image src="./images/logo_white.png" alt="logo" />
          </Flex>

          <Flex>
            <ul>
              <li>1775 Tysons Blvd. 5th Floor. Tysons, VA 22102</li>
              <li>+1 (571) 360 66 77</li>
              <li>contact@clarusway.com</li>
            </ul>

            <ul>
              <li>About Us</li>
              <li>What We Do</li>
              <li>FAQ</li>
            </ul>     

            <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
            </ul>
            <SocialIcons/>        
                    
          </Flex>
        </Container>
      </StyledFooter>
    );
}