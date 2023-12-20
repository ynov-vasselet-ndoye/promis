<template>
  <div>
    <hr />
    <div class="container">
      <h1>L'histoire de la marque</h1>
      <p>
        La marque <strong>Promis</strong> a été créée par
        <strong> Mélys Pottier </strong>, Designer Produit. Formée à l’École de
        Design Nantes Atlantique, elle a obtenu deux diplômes en alternance, un
        BTS Design de Produit et une Licence Design Matériaux et Modélisations.
        C’est lors de son deuxième apprentissage dans une entreprise de
        luminaires que Mélys Pottier prend réellement conscience de l’avenir des
        produits après leurs usages. <br />
        <strong> Que deviennent les luminaires </strong> après leurs
        utilisations ? Peut-on les recycler entièrement ?
        <strong> Comment recycler </strong> correctement un luminaire composé de
        différents matériaux vissés ou collés ensemble ?
      </p>
      <h2>Nos luminaires éco-conçus</h2>
      <p>
        Pour nous, une transition écologique doit se faire par tous et avant
        tout pour notre planète, non pas pour le portefeuille des industries.
        Ainsi, l’une des valeurs les plus importantes de Promis, c’est la
        transparence. Être transparent sur nos prix, notre fabrication et la
        provenance de nos matériaux. Et puis, pour vous montrer que nous non
        plus nous ne sommes pas de parfaits écolos et que ce n’est pas nous qui
        allons vous juger sur votre façon de vivre. Le moindre petit effort de
        chacun peut avoir des conséquences positives ! D’ailleurs, notre
        deuxième valeur, c’est la sensibilisation. Vous sensibiliser sur le
        greenwashing, sur ce qui est vraiment écologique et développer des
        actions durables. Notre troisième valeur est l’accessibilité. Nombreuses
        sont les marques avec des produits éthiques, bio et made in France mais
        qui sont trop coûteux pour la plupart des français. Pour que tout le
        monde soit convaincu d’acheter des produits fabriqués en France et
        recyclables, il faut que les produits soient accessibles financièrement.
        Logique non ?
      </p>
      <RouterLink to="/notre-histoire">
        <button class="button">Nos produits</button>
      </RouterLink>
    </div>
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
  width: 60%;
  text-align: center;
  margin: 5rem auto;
}
p,
h2 {
  margin-top: 5rem;
}
.button {
  background-color: rgba(234, 156, 125, 1);
  border: none;
  color: white;
  padding: 1rem 3rem;
  border-radius: 25px;
  margin-top: 2rem;
  cursor: pointer;
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

@media screen and (max-width: 426px) {
  .container {
    margin: 3rem auto;
    width: 70%;
  }
  p {
    margin-top: 3rem;
  }
}
</style>