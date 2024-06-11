import Image from "next/image";
import Link from "next/link";
import "./page.scss";

export default function Home() {
	return (
		<main className='container' id="home">
			<section className='presentation split'>
				<div className='content description'>
					<h1>Découvrez nos luminaires éco-conçus</h1>
					<p>
						Avec Promis nous voulons changer les codes de l&apos;industrie en créant
						des objets de décoration éco-responsables, made in France et aussi à
						un prix raisonnable !
					</p>
					<Link href='/notre-histoire'>
						<button className='button'>Découvrir</button>
					</Link>
				</div>
				<div className='img'>
					<Image width={1080} height={1080} src='/image/promis_rendu3D.webp' alt='Image de Promis' />
				</div>
			</section>
			<section id='story' className="split">
				<div className={"img"}>
					<Image width={1080} height={1080} src='/image/svg1.webp' alt='' />
				</div>
				<div className="content">
					<span className='subtitle'>NAISSANCE DE PROMIS</span>
					<h2>Notre histoire</h2>
					<p>
					La marque Promis a été créée par Mélys Pottier, Designer Produit. Formée à l’École de Design Nantes Atlantique, elle a obtenu deux diplômes en alternance, un BTS Design de Produit et une Licence Design Matériaux et Modélisations.
					</p>
					<Link href='/notre-histoire'>
						<button className='button'>Lire notre histoire</button>
					</Link>
				</div>
			</section>
			<section id='product' className="split">
				<div className="content">
					<span className='subtitle'>NOTRE MISSION</span>
					<h2>Notre produit</h2>
					<p>
						Toutes ces questions ont donné, à Mélys et ses collaborateurs,
						l’envie de développer un produit pensé écologiquement de la
						conception à sa fin de vie. Ils ont réfléchi à un produit facilement
						recyclable et qui encouragerait la diminution des déchets dans nos
						poubelles. Étant face au grand nombre de cartons situé dans l’usine
						de luminaires et dans les conteneurs, nous avons eu l’idée de les
						récupérer et de les découper pour former nos futurs luminaires.
						C’est ainsi que la marque Promis fut créée.
					</p>
				</div>
				<div className={"img"}>
					<Image width={520} height={1080} src='/image/promis_packaging1.webp' alt='' />
				</div>
			</section>
			<section id='conception' className="split">
				<div>
					<Image width={1080} height={1080} src='/image/sq.webp' alt='' />
				</div>
				<div className="content">
					<span className='subtitle'>NOS VALEURS</span>
					<h2>L&apos;éco-conception</h2>
					<p>
						L&apos;éco-conception est le maître-mot de notre entreprise. Mais
						l&apos;éco-conception c&apos;est quoi? C’est une méthode de conception qui
						consiste à favoriser les ressources renouvelables, à prendre
						conscience du renouvellement du produit et de son recyclage et à
						valoriser le réemploi et/ou la réparation des matériaux. Promis,
						c&apos;est la volonté de concevoir un produit respectant l&apos;environnement
						et le développement durable.
					</p>
				</div>
			</section>
			<section id='luminaires'>
				<h2>Nos luminaires</h2>
				<div id='luminaires-div'>
					<div>
						<Image width={250} height={250} src='/image/diane1.webp' alt='' />
						<a href='https://www.shop.lamarquepromis.fr/'>En savoir plus</a>
					</div>
					<div>
						<Image width={440} height={250} src='/image/diane2.webp' alt='' />
						<a href='https://www.shop.lamarquepromis.fr/'>En savoir plus</a>
					</div>
					<div>
						<Image width={440} height={250} src='/image/diane3.webp' alt='' />
						<a href='https://www.shop.lamarquepromis.fr/'>En savoir plus</a>
					</div>
				</div>
			</section>
			<section id='nous-retrouver'>
				<h2>Nos points de vente</h2>
				<div>
					<Image width={1080} height={1080} src='/image/map.svg' alt='Nous retrouver en France' />
					<div>
						<h3>Où nous trouver ?</h3>
						<p>Voici la liste de nos revendeurs</p>
						<ul>
							<li>
								<strong>Ajaccio</strong> - L&apos;adresse décoration, 18 Boulevard
								Danièle Casanova 20000
							</li>
							<li>
								<strong>Angers</strong> - Boutique Caliko , 19 Rue Saint-Julien
								49100 / L&apos;atelier Coquille, 6 Rue Saint Blaise 49100
							</li>
							<li>
								<strong>Bordeaux</strong> - Murmür, 5 rue Louis Combes 33000
							</li>
							<li>
								<strong>Le Mans</strong> - Po e Design, Passage du Commerce
								72000
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
		</main>
	);
}
