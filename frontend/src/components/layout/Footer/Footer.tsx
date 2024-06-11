import React from "react";
import styles from "./Footer.module.scss";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
	return (
		<>
			<section id={styles.newsletter}>
				<div>
					<h2>Inscrivez vous à notre newsletter</h2>
					<p>
						Pour respecter nos valeurs, notre site-web est conçu le plus
						écologiquement possible, vous ne recevrez donc que des mails
						importants pour vous présenter les news de l&apos;entreprise et ses
						produits (1 mail tous les 2-3 mois)
					</p>
				</div>
				<div>
					<input type='text' placeholder='Entrez votre adresse mail' />
					<button>S&apos;abonner</button>
				</div>
			</section>
			<footer id={styles.footer}>
				<Link href='/'>
					<Image
						src='/image/logo.svg'
						alt='Logo Naee'
						width={163}
						height={69}
					/>
				</Link>
				<div className='links-div'>
					<Link href='/mentions-legales'>
						<span>Mentions Légales</span>
					</Link>
					<Link href='/contact'>
						<span>Contact</span>
					</Link>
					<Link href='#nous-retrouver'>
						<span>Localisations</span>
					</Link>
				</div>
			</footer>
		</>
	);
}
