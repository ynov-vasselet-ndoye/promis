<script setup lang="ts">
// import { reactive } from "vue";
// import { useGlobalStore } from "@/stores/globalStore";
// import type { Lamp } from "@/types";

// type StateShape = {
//   currentLampe: number;
//   lampes: {
//     name: string;
//     img: string;
//     price: number;
//     quantity: number;
//   }[];
// };

// const state = reactive<StateShape>({
//   currentLampe: 1 as number,
//   lampes: [
//     {
//       name: "Diane n°1",
//       img: "/diane1.svg",
//       price: 59,
//       quantity: 1,
//     },
//     {
//       name: "Diane n°2",
//       img: "/diane2.svg",
//       price: 59,
//       quantity: 1,
//     },
//     {
//       name: "Diane n°3",
//       img: "/diane3.svg",
//       price: 59,
//       quantity: 1,
//     },
//   ],
// });
</script>

<template>
  <div class="container">
    <div class="presentation">
      <div class="description">
        <h1>Découvrez nos luminaires éco-conçus</h1>
        <p>
          Avec Promis nous voulons changer les codes de l’industrie en créant
          des objets de décoration éco-responsables, made in France et aussi à
          un prix raisonnable !
        </p>
        <NuxtLink to="/notre-histoire">
          <button class="button">Découvrir</button>
        </NuxtLink>
      </div>
      <div class="img">
        <img src="/image/promis_rendu3D.png" alt="Image de Promis" />
      </div>
    </div>
    <section id="story">
      <div>
        <img src="/image/svg1.svg" alt="" />
      </div>
      <div>
        <span class="subtitle">NAISSANCE DE PROMIS</span>
        <h2>Notre histoire</h2>
        <p>
          La marque Promis a été créée par Mélys Pottier, Designer Produit.
          Formée à l’École de Design Nantes Atlantique, elle a obtenu deux
          diplômes en alternance, un BTS Design de Produit et une Licence Design
          Matériaux et Modélisations. C’est lors de son deuxième apprentissage
          dans une entreprise de luminaires que Mélys prend réellement
          conscience de l’avenir des produits après leurs usages. Que deviennent
          les luminaires après leurs utilisations ? Peut-on les recycler
          entièrement ? Comment recycler correctement un luminaire composé de
          différents matériaux vissés ou collés ensemble ?
        </p>
        <NuxtLink to="/notre-histoire">
          <button class="button">Lire notre histoire</button>
        </NuxtLink>
      </div>
    </section>
    <section id="product">
      <div>
        <span class="subtitle">NOTRE MISSION</span>
        <h2>Notre produit</h2>
        <p>
          Toutes ces questions ont donné, à Mélys et ses collaborateurs, l’envie
          de développer un produit pensé écologiquement de la conception à sa
          fin de vie. Ils ont réfléchi à un produit facilement recyclable et qui
          encouragerait la diminution des déchets dans nos poubelles. Étant face
          au grand nombre de cartons situé dans l’usine de luminaires et dans
          les conteneurs, nous avons eu l’idée de les récupérer et de les
          découper pour former nos futurs luminaires. C’est ainsi que la marque
          Promis fut créée.
        </p>
      </div>
      <div>
        <img src="/image/promis_packaging1.png" alt="" />
      </div>
    </section>
    <section id="conception">
      <div>
        <img src="/image/sq.svg" alt="" />
      </div>
      <div>
        <span class="subtitle">NOS VALEURS</span>
        <h2>L'éco-conception</h2>
        <p>
          L’éco-conception est le maître-mot de notre entreprise. Mais
          l’éco-conception c’est quoi? C’est une méthode de conception qui
          consiste à favoriser les ressources renouvelables, à prendre
          conscience du renouvellement du produit et de son recyclage et à
          valoriser le réemploi et/ou la réparation des matériaux. Promis, c’est
          la volonté de concevoir un produit respectant l’environnement et le
          développement durable.
        </p>
      </div>
    </section>
    <section id="luminaires">
      <h2>Nos luminaires</h2>
      <div id="luminaires-div">
        <div>
          <img src="/image/diane1.svg" alt="" />
          <a href="https://www.shop.lamarquepromis.fr/">En savoir plus</a>
        </div>
        <div>
          <img src="/image/diane2.svg" alt="" />
          <a href="https://www.shop.lamarquepromis.fr/">En savoir plus</a>
        </div>
        <div>
          <img src="/image/diane3.svg" alt="" />
          <a href="https://www.shop.lamarquepromis.fr/">En savoir plus</a>
        </div>
      </div>
    </section>
    <section id="nous-retrouver">
      <h2>Nos points de vente</h2>
      <div>
        <img src="/image/map.svg" alt="Nous retrouver en France" />
        <div>
          <h3>Où nous trouver ?</h3>
          <p>Voici la liste de nos revendeurs</p>
          <ul>
            <li>
              <strong>Ajaccio</strong> - L'adresse décoration, 18 Boulevard
              Danièle Casanova 20000
            </li>
            <li>
              <strong>Angers</strong> - Boutique Caliko , 19 Rue Saint-Julien
              49100 / L’atelier Coquille, 6 Rue Saint Blaise 49100
            </li>
            <li>
              <strong>Bordeaux</strong> - Murmür, 5 rue Louis Combes 33000
            </li>
            <li>
              <strong>Le Mans</strong> - Po e Design, Passage du Commerce 72000
            </li>
            <li>
              <strong>Lille</strong> - Little & Tall, 39 Rue Basse 59000 ou
              Momentum, 42 Rue des Trois Mollettes 59800
            </li>
            <li>
              <strong>Marseille</strong> - Bulle, 21 Bis Rue Edmond Rostand
              13006
            </li>
            <li>
              <strong>Nantes</strong> - Dodé - La Boutique Atelier, 10 Rue
              Franklin 44000
            </li>
            <li>
              <strong>Paris</strong> - La Petite Boutique, 20 Quai de la
              Mégisserie 75000
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section id="newsletter">
      <div>
        <h2>Inscrivez vous à notre newsletter</h2>
        <p>
          Pour respecter nos valeurs, notre site-web est conçu le plus
          écologiquement possible, vous ne recevrez donc que des mails
          importants pour vous présenter les news de l’entreprise et ses
          produits (1 mail tous les 2-3 mois)
        </p>
      </div>
      <div>
        <input type="text" placeholder="Entrez votre adresse mail" />
        <button>S'abonner</button>
      </div>
    </section>
    <div id="reseaux">
      <a
        href="https://m.facebook.com/profile.php?id=100090573296197&eav=AfbWgBR8u6pwp3kHjunNHZjIGTBMaVGJ1oTMfbxrL5JeKL1P5NF7x-qNyfS7r4l4x2I&paipv=0"
      >
        <img src="/image/facebook.svg" alt="Facebook" />
      </a>
      <a href="https://instagram.com/promis_deco?igshid=YmMyMTA2M2Y=">
        <img src="/image/instagram.svg" alt="Instagram" />
      </a>
      <a href="https://www.tiktok.com/@promis_deco?_t=8bbZQV6e3Fj&_r=1">
        <img src="/image/tic-tac.svg" alt="Tiktok" />
      </a>
      <a
        href="https://www.pinterest.fr/lamarquepromis/?invite_code=be710444b3e64fee866aafa1638c7ade&sender=192036509019316596"
      >
        <img src="/image/pinterest.svg" alt="Pinterest" />
      </a>
      <a
        href="https://www.linkedin.com/company/93301375/admin/?feedType=following"
      >
        <img src="/image/linkedin.svg" alt="Linkedin" />
      </a>
    </div>
  </div>
</template>

<style scoped>
.container {
  position: relative;
}

#reseaux {
  position: fixed;
  top: 250px;
  left: 2.5%;
}

#reseaux a {
  display: block;
  margin: 1rem 0;
}

#reseaux a img {
  width: 50%;
}

section {
  padding: 0 10%;
}

li {
  list-style: inside;
}

.logo {
  width: 400px;
  height: 100px;
  display: block;
  margin: 0 auto;
}

h1 {
  font-weight: bold;
  font-size: 52px;
}

.presentation {
  display: grid;
  grid-template-columns: 45% 55%;
  text-align: left;
}

.description {
  width: 60%;
  margin-left: 20%;
  margin-top: 100px;
}

.button {
  background-color: rgba(234, 156, 125, 1);
  border: none;
  color: white;
  padding: 1rem 3rem;
  border-radius: 25px;
  cursor: pointer;
}

.presentation .img img {
  width: 100%;
  height: 100%;
  object-position: 80% 80%;
}

#story,
#product,
#conception {
  display: grid;
  grid-template-columns: 43.75% 56.25%;
  align-items: center;
  grid-gap: 0 5%;
  font-size: 20px;
}

#story img {
  width: 100%;
}

#product img,
#conception img {
  width: 100%;
  border-radius: 50px;
}

.subtitle {
  color: rgba(187, 114, 84, 1);
  font-weight: bold;
}

#luminaires-div {
  display: grid;
  grid-template-columns: 26% 26% 26%;
  grid-gap: 0 11%;
  width: 100%;
}

#luminaires h2 {
  text-align: center;
  font-size: 42px;
  margin-top: 4rem;
  margin-bottom: 5rem;
}

#luminaires-div img {
  display: block;
  margin: 7rem 0 2rem 0;
}

#luminaires-div a {
  color: inherit;
  text-decoration: none;
  color: white;
  text-align: center;
  display: block;
  margin: 1rem 0;
  font-size: 20px;
}

#luminaires-div > div {
  background-color: #d2e4ce;
  border-top-left-radius: 250px;
  border-top-right-radius: 250px;
}

#luminaires-div > div:nth-child(even) {
  background-color: #a0c79b;
}

#luminaires-div > div img {
  width: 100%;
}

#nous-retrouver > div {
  display: grid;
  grid-template-columns: 50% 50%;
  align-items: center;
}

#nous-retrouver p {
  font-size: 26px;
}

#nous-retrouver img {
  width: 100%;
}

#nous-retrouver h2 {
  text-align: center;
  font-size: 42px;
  margin-top: 5rem;
  margin-bottom: 3rem;
}

#nous-retrouver h3 {
  font-size: 36px;
}

#nous-retrouver ul {
  padding: 0;
  margin: 0;
}

#nous-retrouver li {
  font-size: 16px;
  margin: 1rem;
}

#newsletter {
  display: grid;
  grid-template-columns: 47.5% 47.5%;
  grid-gap: 0 3%;
  align-items: center;
  background-color: rgba(234, 156, 125, 1);
  color: white;
  padding: 2.5rem 15%;
}

#newsletter input {
  background: rgba(255, 255, 255, 0.1);
  border: 0.4px solid #ffffff;
  border-radius: 4px;
  height: 40px;
  width: 300px;
  margin-right: 1rem;
  padding-left: 1rem;
}

#newsletter input::placeholder {
  color: white;
}

#newsletter button {
  background-color: #fff;
  border-radius: 4px;
  height: 40px;
  width: 150px;
  border: none;
}

@media screen and (max-width: 769px) {
  section {
    padding: 0 5%;
  }
  #newsletter input {
    width: 200px;
    margin: 0.5rem 0;
  }
  #newsletter,
  #nous-retrouver > div,
  #luminaires-div,
  .presentation,
  #story,
  #product,
  #conception {
    display: block;
  }
  .presentation .img img {
    position: initial;
    margin: 2rem auto;
    display: block;
  }
  #luminaires-div img {
    padding: 7rem 0 2rem 0;
  }
  .presentation {
    margin-top: 0;
  }
  .button {
    padding: 0.5rem 1.5rem;
    font-size: 0.8rem;
    cursor: pointer;
  }
  .presentation .img img {
    width: 90%;
  }
  h1 {
    font-size: 36px;
  }
  #reseaux {
    left: 0.5%;
  }
  #reseaux a img {
    width: 25%;
  }
  #newsletter {
    text-align: center;
  }
  .description {
    width: 80%;
    padding: 0 10%;
    margin: 0;
  }
}
</style>
