import React, { useEffect } from 'react';
import { Header, Footer } from '../../components';
import {
  Container,
  ContainerContact,
  ContainerOurData,
  ContainerSocialMidia,
  ContainerContacts,
  Phone,
  Mail,
  ContainerLocalization,
} from './styles';
import { useLocation } from '../../hooks/LocalizationContext';
import Localization from '../../assets/metroidburger-localization.png';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Background from '../../assets/metroidburger-callcenter.png';
import { RouteMap } from '../../components/RouteMap.jsx';
import { storeLocation } from '../../utils/GPS_Key';

export function Contact() {
  const { distanceData } = useLocation();

  const clientInfo = JSON.parse(localStorage.getItem('metroidburger:userData'));
  const userAddress = clientInfo
    ? `${clientInfo.street}, ${clientInfo.number} - ${clientInfo.neighborhood}, ${clientInfo.city} - ${clientInfo.state}, Brasil`
    : null;

  return (
    <Container>
      <Header />
      <ContainerContact>
        <ContainerOurData>
          <h1>Nossos Contatos</h1>
          <h2>Nos acompanhe nas redes sociais também.</h2>
          <h2>As novidades aparecem por lá primeiro!</h2>
          <ContainerSocialMidia>
            <a>
              <InstagramIcon />
              @metroidburguer
            </a>
            <a>
              <FacebookIcon />
              /metroid_burguer
            </a>
            <a>
              <LinkedInIcon />
              /metroid-burguer
            </a>
          </ContainerSocialMidia>
          <ContainerContacts>
            <h2>Se quiser falar com a gente:</h2>
            <Phone>
              <a>
                <SupportAgentIcon /> (99) 99999-9999
              </a>
              <a>
                <WhatsAppIcon /> Mensagem
              </a>
            </Phone>
            <Mail>
              <a>
                <MailOutlineIcon /> contato@metroidburguer.com.br
              </a>
            </Mail>
          </ContainerContacts>
          <ContainerLocalization>
            <h2>Onde estamos:</h2>
            {distanceData ? (
              <p>
                🚗 {distanceData.distance.text} | ⏳{' '}
                {distanceData.duration.text}
              </p>
            ) : (
              <p>Calculando distância...</p>
            )}
            <img src={Localization} />
          </ContainerLocalization>
          {/* <RouteMap userAddress={userAddress} storeAddress={storeLocation.storeAddress} /> */}
        </ContainerOurData>

        <img src={Background} className="ctt-img" />
      </ContainerContact>
      <Footer />
    </Container>
  );
}
