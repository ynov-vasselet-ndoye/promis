<script setup>

const { find } = useStrapi()

const articles = await find('articles');
</script>

<template>
  <div class="container">
    <div class="sub-container">
      <hr />
      <h1>Le blog du Promis</h1>
      <h2>Nos articles coup de coeur</h2>
      <div class="container-grid">
        <NextLink to="/article/tri-des-dechets" v-for="article of articles.data">
          <div class="item">
            <img src="/image/article-design1.svg" alt="Article 1" />
            <p>Il y a une semaine</p>
            <h3>{{ article.attributes.titre }}</h3>
          </div>
        </NextLink>
      </div>
    </div>
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
a {
  color: inherit;
  text-decoration: none;
}
h1 {
  text-align: center;
  margin: 3rem 0;
}
h2 {
  color: rgba(115, 111, 111, 1);
  font-size: 1.25rem;
  margin-top: 5rem;
}
.sub-container {
  margin: 0 10%;
}
.container-grid {
  display: grid;
  grid-template-columns: 23% 23% 23% 23%;
  grid-gap: 0 2%;
}
.container-grid img {
  width: 100%;
}
.item p {
  color: rgba(115, 111, 111, 1);
}
#newsletter {
  display: grid;
  grid-template-columns: 47.5% 47.5%;
  grid-gap: 0 3%;
  align-items: center;
  background-color: #ea9c7d;
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
#newsletter h2 {
  color: white;
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

@media screen and (max-width: 769px) {
  .container-grid {
    display: block;
  }
  .sub-container {
    margin: 0 5%;
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
  #newsletter input {
    width: 200px;
    margin: 0.5rem 0;
  }
  #newsletter {
    display: block;
  }
}
</style>