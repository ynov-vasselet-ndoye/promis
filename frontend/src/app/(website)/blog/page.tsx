"use client";

import Link from "next/link";
import "./page.scss";
import Image from "next/image";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());
export default function Blog() {
	const { data, error } = useSWR(
		"http://localhost:1338/api/articles?populate=*",
		fetcher
	);

	if (error) return <div>Failed to load</div>;
	if (!data) return <div>Loading...</div>;
	
	interface Article {
		id: number;
		title: string;
		content: string;
		cover: string;
	}

	if (data && Array.isArray(data.data)) {
		console.log(
			data.data.map(
				(article: {
					id: number;
					attributes: {
						cover: any;
						titre: string;
						contenu: any[];
						createdAt: string;
						updatedAt: string;
						publishedAt: string;
					};
				}) => {
					const titre = article.attributes.titre;
					const paragraph = article.attributes.contenu.find(
						(content) => content.type === "paragraph"
					)?.children[0]?.text;
					const cover = article.attributes.cover.data.attributes.url;
					return { titre, paragraph, cover };
				}
			)
		);
	} else {
		console.log("Data is not an array");
	}

	return (
		<main className='container' id='blog'>
			<section className='sub-container'>
				<hr />
				<h1>Le blog Promis</h1>
				<h2>Nos articles coup de coeur</h2>
				<div className='container-grid articles-list'>
					{data && Array.isArray(data.data) ? (
						data.data.map(
							(article: {
								id: number;
								attributes: {
									titre: string;
									contenu: any[];
									createdAt: string;
									updatedAt: string;
									publishedAt: string;
									cover: {
										data: {
											attributes: {
												url: string;
											};
										};
									};
								};
							}) => {
								const titre = article.attributes.titre;
								const paragraph = article.attributes.contenu.find(
									(content) => content.type === "paragraph"
								)?.children[0]?.text;
								return (
									<Link
										href={"blog/article/" + article.id}
										key={"article-" + article.id}
										className='articles-list-item'>
										<div key={article.id} className='item'>
											<Image
												loader={({ src }) => src}
												src={
													"http://localhost:1338" +
													article.attributes.cover.data.attributes.url
												}
												alt={"Article " + article.id}
												height={512}
												width={208}
											/>
											<h3>{titre}</h3>
										</div>
									</Link>
								);
							}
						)
					) : (
						<div>Data is not an array</div>
					)}
				</div>
			</section>
		</main>
	);
}
