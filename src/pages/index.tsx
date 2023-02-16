import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import GlobalStyle from "../utils/GlobalStyle"

const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`

const MainTitle = styled.h1`
  text-align: center;
  font-size: 4rem;
  color: white;
`

const ColorSection = styled.section`
  background-color: #57CC99;
  padding: 2rem;   
`

const TitleSection = styled(ColorSection)`
  min-height: 33vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImagesContainer = styled.section`
  display: flex;
  gap: 3rem;
  align-items: start;
`

const Image = styled(StaticImage)`
  margin-bottom: 1rem;
`

const ImageTextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;   

  p {
    text-align: justify;
  }
`             

const SectionTitle = styled.h2`
  text-align: center;
`

const Presentation = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: start;
  div {
    flex: 1;
  }
`

const PresentationTitle = styled.h3`
  text-align: center;
`

// http://the-pittmans.com/

const IndexPage: React.FC<PageProps> = () => {
  return (  
    <>
    <GlobalStyle />
    <Main>   
      <TitleSection>
        <MainTitle>
          Mathilde et Charles se marient !
        </MainTitle>
      </TitleSection>
      <ImagesContainer>
        <ImageTextContainer>
        <StaticImage style={{marginBottom: '1rem'}} height={300} src="../images/charles.jpeg" alt="charles" />
          <p>C’est l’homme serein. S’il pouvait, il s’enfermerait une semaine dans le noir pour jouer aux jeux vidéos. Il déteste le melon mais aime le reblochon. Il a eu un coup de cœur pour la fille d’à côté.</p>
        </ImageTextContainer>

        <ImageTextContainer>
          <StaticImage height={300} src="../images/math.jpeg" alt="mathilde" />
            <p> C’est la farfelue du couple. Elle déteste le froid et les habitudes, mais elle adore le chocolat et les gens. Son pêché mignon c’est le pâté de campagne. Elle a eu un coup de cœur pour le gars d’à côté.</p>
          </ImageTextContainer>
      </ImagesContainer>
      <ColorSection>
        <SectionTitle>Le mariage</SectionTitle>
        <Presentation>
          <div>
            <PresentationTitle>📆 Quand</PresentationTitle>
            <p>Samedi 24 Février 2024</p>
          </div>
          <div>
            <PresentationTitle>📍 Où</PresentationTitle>
            <p>Mairie, Pl. Gabriel Fauré, Annecy-le-Vieux, 74940 Annecy.</p>
            <p>La Médicée, 165 All. du Château, 74150 Marigny-Saint-Marcel</p>
          </div>
          <div>
            <PresentationTitle>💌 RSVP</PresentationTitle>
            <p>Venez à notre mariage ! Merci de nous répondre pour le 30 septembre 2023. (Lien vers le questionnaire.)</p>
          </div>
        </Presentation>
      </ColorSection>
      <section>
        <SectionTitle>Le Jour J</SectionTitle>
        <p>Rendez-vous à la mairie ! L’heure vous sera communiquée plus tard.</p>
        <p>Cérémonie laïque, la Médicée, 16H00,</p>
        <p>Vin d’honneur, 18H00,</p>
        <p>Dîner 20H00,</p>
        <p>Première danse 23H00,</p>
        <p>[Je veux juste une] Dernière danse à 5H00.</p>
      </section>
      <ColorSection>
        <SectionTitle>Destination ➡️ Annecy </SectionTitle>
        <p>Annecy, c’est une très jolie ville au pied des Alpes. On la surnomme la Venise des Alpes mais c’est plutôt Venise qui devrait s’appeler l’Annecy d’Italie ! Elle est connue pour ses sportifs, sa nature grandiose et son lac magnifique dans lequel il fait bon se baigner en été (et même en hiver pour les plus téméraires). Les spécialités locales sont la croziflette, les diots, la raclette, la fondue et la tartiflette. N’oubliez pas de boire de la suze ou du génépi !</p>
        <h4>Que faire à Annecy et aux alentours</h4>
        <Presentation>
          <div>
            <p>☕️ Les cafés</p>
            <ul>
              <li><a href="https://www.hiatus-coffee.com/">Hiatus</a></li>
              <li><a href="https://www.haven-annecy.fr/">Heaven</a></li>
              <li><a href="https://www.facebook.com/lebarrouxdheure/">Le Bar roux d'heure</a></li>
              <li><a href="http://www.brumes-annecy.fr/">Brumes</a></li>
              <li><a href="https://www.lacantineclandestine.com/">La Cantine Clandestine</a></li>
            </ul>
          </div>
          <div>
            <p>🍺 Les bars</p>
            <ul>
              <li><a href="https://www.instagram.com/cafe.des.arts.annecy/?hl=fr">Le café des arts</a></li>
              <li><a href="https://www.beeroclock.fr/">Beer O'Clock</a></li>
              <li><a href="https://la-dem-arr-ante.fr/">La Démarrante</a></li>
              <li><a href="https://www.bistrodestilleuls.com/">Le Bistro des Tilleuls</a></li>
              <li><a href="https://www.societybar.fr/">Society</a></li>
            </ul>
          </div>
          <div>
            <p>🍽️ Les restaurants</p>
            <ul>
              <li><a href="https://www.bloomer-annecy.com/">Bloomer</a></li>
              <li><a href="https://fr.tripadvisor.ca/Restaurant_Review-g187260-d24903392-Reviews-Gamin-Annecy_Haute_Savoie_Auvergne_Rhone_Alpes.html">Gamins</a></li>
              <li><a href="https://www.instagram.com/kiaora_annecy/?hl=fr">Kia Ora</a></li>
              <li><a href="https://www.chezingalls.fr/">Chez Ingalls</a></li>
              <li><a href="https://lacabaneannecy.fr/">La Cabane</a></li>
            </ul>
          </div>
        </Presentation>
        <Presentation>
          <div>
              <p>🏰 A visiter</p>
              <ul>
                <li><a href="https://musees.annecy.fr/Musee-Chateau">Le Château d'Annecy</a></li>
                <li><a href="https://musees.annecy.fr/Musee-du-film-d-animation">Le musée du film d'animation</a></li>
                <li><a href="https://www.annecy-ville.fr/que-faire-a-annecy/visiter-annecy/vieille-ville-annecy/">La Vieille Ville</a></li>
                <li><a href="https://docs.google.com/document/u/0/d/1ekq8YFszGqKSBrWYANDd5b-Nkgd8vh6ocBgWoabB40I/edit">La Basilique de la Visitation</a></li>
              </ul>
            </div>
            <div>
              <p>🥾 Randonnées</p>
              <ul>
                <li><a href="https://www.visorando.com/randonnee-le-mont-veyrier/">Le Mont Veyrier</a></li>
                <li><a href="https://experience.hautesavoie.fr/decouvrir/randonnee-balade/219-plateau-de-beauregard">Plateau de Beauregard</a></li>
                <li><a href="https://www.visorando.com/randonnee-le-semnoz/">Semnoz</a></li>
                <li><a href="https://www.visorando.com/randonnee-reserve-naturelle-du-bout-du-lac-d-annec/">Réserve du Bout du Lac</a></li>
                <li><a href="http://www.annecy-ville.fr/tour-lac-annecy-velo/">Tour du Lac en Vélo</a></li>
              </ul>
            </div>
            <div>
              <p>🎿 Stations de ski</p>
              <ul>
                <li><a href="https://www.laclusaz.com/hiver">La Clusaz</a></li>
                <li><a href="https://www.legrandbornand.com/hiver">Le Grand Bornand</a></li>
                <li><a href="https://www.les3vallees.com/">Les 3 Vallées</a></li>
                <li><a href="https://www.areches-beaufort.com/">Arêche Beaufort</a></li>
              </ul>
            </div>
        </Presentation>
      </ColorSection>
      <section>
        <SectionTitle>Petit lexique pour bien s'intégrer</SectionTitle>
        <p><i>Y roille  </i>: il pleut</p>
        <p><i>La peuf </i>: neige toute fraîche</p>
        <p><i>Un monchu </i>: un touriste</p>
        <p><i>Un bobet </i>: un idiot</p>
        <p><i>Dré dans l'pentu </i>: droit dans la pente</p>
        <p><i>La Yaute </i>: la Haute-Savoie</p>
      </section>
      <ColorSection>
        <SectionTitle>Cadeaux de mariage</SectionTitle>
        <p>Votez pour notre lune de miel ! Les votes sont ouverts jusqu’au 15 décembre  2023 (mais vous pouvez participer au cadeau jusqu’au dernier moment). </p>
        <Presentation>
          <div>
            <h3>Tanzanie</h3>
            <p>Pour gravir le Kilimandjaro et découvrir les beautés de l'île de Zanzibar. </p>
          </div>
          <div>
            <h3>Vietnam</h3>
            <p>Pour explorer les rizières de Sapa et voguer dans le Delta du Mékong. </p>
          </div>
          <div>
            <h3>Argentine</h3>
            <p>Pour escalader le glacier Perito Moreno et admirer les chutes d’Iguazu. </p>
          </div>
        </Presentation>
      </ColorSection>
      <section>
        <SectionTitle>FAQ</SectionTitle>
        <p><i>Que prendre dans ma valise ? </i></p>
        <p>L’hiver est froid en Haute-Savoie et les chutes de neige sont fréquentes. Prenez des habits chauds. Gants, bonnets et écharpes sont les bienvenus !</p>
        <p><i>Comment s’habiller pour le mariage ? </i></p>
        <p>Le dress code du mariage est semi-formel. Nous vous déconseillons de porter des talons aiguilles.</p>
        <p><i>Quelles boissons seront servis ?</i></p>
        <p>Des boissons non alcoolisées et alcoolisées seront servies au mariage.</p>
        <p><i>Quelle nourriture sera servie ?</i></p>
        <p>Pour le vin d’honneur, des bouchés à la viande, au poisson ou végétarienne seront proposées.</p>
        <p>Pour le repas, un plat à la viande ou végétarien vous sera proposé. Il y aura beaucoup de fromage !</p>
        <p><i>Et pour les photos, on fait comment ? </i></p>
        <p>Il y aura un photographe professionnel pendant tout le mariage. Merci de ne pas prendre de photos à la mairie et pendant la cérémonie, nous vous partagerons celles du photographe. Prenez autant de photos que vous voulez pour le reste de la journée !</p>
        <p><a href="https://mathildetcharles.online">Vous n’auriez pas fait une randonnée ?!</a></p>
      </section>
    </Main>  
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
