'use client';

import Link from "next/link";
import "./page.scss";
import Image from "next/image";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then(res => res.json());
export default function Blog() {

	const { data, error } = useSWR('http://localhost:1338/api/articles?populate=*', fetcher);

	if (error) return <div>Failed to load</div>
	if (!data) return <div>Loading...</div>
	interface Article {
		id: number;
		title: string;
		content: string;
		cover : string;
	}
	if (data && Array.isArray(data.data)) {
		console.log(data.data.map((article: {id: number, attributes: {
				cover: any;
				titre: string,
				contenu: any[],
				createdAt: string,
				updatedAt: string,
				publishedAt: string}}) => {
			const titre = article.attributes.titre;
			const paragraph = article.attributes.contenu.find(content => content.type === 'paragraph')?.children[0]?.text;
			const cover = article.attributes.cover.data.attributes.url;
			return { titre, paragraph, cover };
		}));
	} else {
		console.log('Data is not an array');
	}

	return (
		<div className='container'>
			<div className='sub-container'>
				<hr/>
				<h1>Le blog du Promis</h1>
				<h2>Nos articles coup de coeur</h2>
				<div className='container-grid'>
					{data && Array.isArray(data.data) ? data.data.map((article: {
						id: number,
						attributes: {
							titre: string,
							contenu: any[],
							createdAt: string,
							updatedAt: string,
							publishedAt: string,
							cover: {
								data: {
									attributes: {
										url: string
									}
								}
							}
						}
					}) => {
						const titre = article.attributes.titre;
						const paragraph = article.attributes.contenu.find(content => content.type === 'paragraph')?.children[0]?.text;
						return (
							<Link href={'/article/'+article.id}>
								<div key={article.id} className='item'>
									<Image
										loader={({src}) => src}
										src={"http://localhost:1338"+article.attributes.cover.data.attributes.url} alt={'Article '+article.id} height={417} width={208}/>
									<p>{paragraph}</p>
									<h3>{titre}</h3>
								</div>
							</Link>
						);
					}) : <div>Data is not an array</div>}
				</div>
			</div>
			<section id='newsletter'>
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
					<input type='text' placeholder='Entrez votre adresse mail'/>
					<button>S&apos;abonner</button>
				</div>
			</section>
			<div id='reseaux'>
				<a
					href='https://m.facebook.com/profile.php?id=100090573296197&eav=AfbWgBR8u6pwp3kHjunNHZjIGTBMaVGJ1oTMfbxrL5JeKL1P5NF7x-qNyfS7r4l4x2I&paipv=0'
					target='_blank'>
					<Image src='/image/facebook.svg' alt='Facebook' height={24} width={24}/>
				</a>
				<a
					href='https://instagram.com/promis_deco?igshid=YmMyMTA2M2Y='
					target='_blank'>
					<Image src='/image/instagram.svg' alt='Instagram' height={48} width={48}/>
				</a>
				<a
					href='https://www.tiktok.com/@promis_deco?_t=8bbZQV6e3Fj&_r=1'
					target='_blank'>
					<Image src='/image/tic-tac.svg' alt='Tiktok' height={32} width={32}/>
				</a>
				<a
					href='https://www.pinterest.fr/lamarquepromis/?invite_code=be710444b3e64fee866aafa1638c7ade&sender=192036509019316596'
					target='_blank'>
					<Image src='/image/pinterest.svg' alt='Pinterest' height={32} width={32}/>
				</a>
				<a
					href='https://www.linkedin.com/company/93301375/admin/?feedType=following'
					target='_blank'>
					<Image src='/image/linkedin.svg' alt='Linkedin' height={32} width={32}/>
				</a>
			</div>
		</div>
	);
}
