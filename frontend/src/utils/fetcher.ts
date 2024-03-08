// @ts-ignore
import {Fetcher} from "swr";
import {Article} from "@/types/article.type";
import axios from "axios";

export const getArticles: Fetcher<Article, string> = (url: string) => axios.get('http://localhost:1337/api/' + url).then((res) => res.data);