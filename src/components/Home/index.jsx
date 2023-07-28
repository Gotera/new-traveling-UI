import React from "react";
import BlueLogo2 from "assets/Home/BlueLogo2.png";
import {
  AboutWrapper,
  Apresentation,
  BannerHolder,
  BannerTextWrapper,
  DisplayMany,
  HomePageWrapper,
  ProductWrapper,
  SubTittle,
} from "components/Home/Home.styled";
import { BsDatabaseFillLock, BsFillClipboard2PulseFill } from "react-icons/bs";
import { GiTimeTrap } from "react-icons/gi";
import { FaUsers } from "react-icons/fa";
import {
  AiFillCalculator,
  AiFillMobile,
  AiFillSecurityScan,
} from "react-icons/ai";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import TypewriterComponent from "typewriter-effect";
import ProductCell from "components/Home/components/ProductCell";
import HomeBottomOverlay from "components/Home/components/HomeBottomOverlay";

function Home() {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  return (
    <HomePageWrapper>
      <BannerHolder>
        <BannerTextWrapper>
          <TypewriterComponent
            options={{
              strings: [
                "Na rota do progresso",
                "Em direção ao sucesso",
                "Entregas sem preocupações",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </BannerTextWrapper>
      </BannerHolder>
      <AboutWrapper>
        <SubTittle data-aos="fade-up">Oque Fazemos</SubTittle>
        <Apresentation>
          <img src={BlueLogo2} alt="New Traveling Logo Type 2" data-aos="fade-right" />
          <p data-aos="fade-up">
            {" "}
            Nosso compromisso é registrar meticulosamente os dados de suas
            viagens, cuidando de suas contas suas, proporcionando uma gestão
            eficiente de rotas, lucros e gastos. Com a New Travels, você pode
            focar na estrada, enquanto nós cuidamos do resto.
          </p>
        </Apresentation>
        <ProductWrapper data-aos="fade-up">
          <SubTittle>Benefícios</SubTittle>
          <DisplayMany>
            <ProductCell
              icon={<BsDatabaseFillLock size={60} />}
              title="Relatórios Detalhados"
              message="Acesse relatórios completos e detalhados de cada viagem, com informações cruciais para otimizar suas operações."
            />
            <ProductCell
              icon={<GiTimeTrap size={60} />}
              title="Economia de Tempo"
              message="Simplifique a gestão de dados de viagens com nosso sistema eficiente, economizando tempo valioso."
            />
            <ProductCell
              icon={<BsFillClipboard2PulseFill size={60} />}
              title="Organização Eficiente"
              message="Mantenha todas as informações importantes sobre suas viagens em um só lugar, mantendo seus registros organizados e acessíveis."
            />
            <ProductCell
              icon={<AiFillCalculator size={60} />}
              title="Cálculos Automatizados"
              message="Nosso sistema realiza cálculos complexos automaticamente, como o custo total de combustível, ajudando você a tomar decisões informadas."
            />
            <ProductCell
              icon={<AiFillMobile size={60} />}
              title="Acesso em Qualquer Lugar"
              message="Acesse seus dados de viagens a qualquer momento e de qualquer lugar, com nossa plataforma online e amigável."
            />
            <ProductCell
              icon={<AiFillSecurityScan size={60} />}
              title="Privacidade e Segurança"
              message="Garantimos a privacidade e a segurança dos seus dados, permitindo que você gerencie suas informações com tranquilidade."
            />
            <ProductCell
              icon={<FaUsers size={60} />}
              title="Suporte ao Cliente"
              message=" Nossa equipe de suporte está pronta para ajudar, oferecendo qualquer assistência que o cliente precisar sempre que necessário."
            />
          </DisplayMany>
        </ProductWrapper>
      </AboutWrapper>
      <HomeBottomOverlay />
    </HomePageWrapper>
  );
}

export default Home;
