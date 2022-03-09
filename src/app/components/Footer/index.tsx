import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { navItems } from "../../data/homepage/navItems";
import { otherLinks } from "../../data/homepage/otherLinks";
import Logo from "../Logo";
import { AboutContainer, AboutText, CopyrightContainer, CopyrightText, FooterContainer, FooterInfoContainer, HeaderTitle, HorizontalContainer, LinksList, ListItem, RedIcon, SectionContainer, SmallText } from "./Footer.styled";

const Footer = () => {

    return (
        <FooterContainer>
            <FooterInfoContainer>
                <AboutContainer>
                    <Logo color="white" bgColor="dark" />
                    <AboutText>
                        Yourcar is a Car renting and selling company located in many
                        countries across the world which has high quality cars and top rated
                        service.
                    </AboutText>
                </AboutContainer>
                <SectionContainer>
                    <HeaderTitle>Our Links</HeaderTitle>
                    <LinksList>
                        {
                            navItems.map((navItem) => (
                                <ListItem key={navItem.id}>
                                    <a href={navItem.url} title={navItem.label}>{navItem.label}</a>
                                </ListItem>
                            ))
                        }
                    </LinksList>
                </SectionContainer>
                <SectionContainer>
                    <HeaderTitle>Other Links</HeaderTitle>
                    <LinksList>
                        {
                            otherLinks.map((otherLink) => (
                                <ListItem key={otherLink.id}>
                                    <a href={otherLink.url} title={otherLink.label}>{otherLink.label}</a>
                                </ListItem>
                            ))
                        }
                    </LinksList>
                </SectionContainer>
                <SectionContainer>
                    <HeaderTitle>Call Now</HeaderTitle>
                    <HorizontalContainer>
                        <RedIcon>
                            <FontAwesomeIcon icon={faPhoneAlt} />
                        </RedIcon>
                        <SmallText>+91 555-234-8469</SmallText>
                    </HorizontalContainer>
                </SectionContainer>
                <SectionContainer>
                    <HeaderTitle>Mail</HeaderTitle>
                    <HorizontalContainer>
                        <RedIcon>
                            <FontAwesomeIcon icon={faEnvelope} />
                        </RedIcon>
                        <SmallText>info@yourcar.com</SmallText>
                    </HorizontalContainer>
                </SectionContainer>
            </FooterInfoContainer>
            <CopyrightContainer>
                <CopyrightText>
                    Copyright &copy; {new Date().getFullYear()} Yourcar. All rights
                    reserved.
                </CopyrightText>
            </CopyrightContainer>
        </FooterContainer>
    );
}

export default Footer;