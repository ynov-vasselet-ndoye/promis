
import { useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import "./Header.scss"

export default function Header() {

    const [dropdown, setDropdown] = useState(false);
    const [collapse, setCollapse] = useState(false);

    return (
        <div className="navbar">
            <Link href="/">
                <Image src="/image/logo.svg" alt="Logo Naee" width={163} height={76}/>
            </Link>
            <div className="links-div">
                <span onClick={() => setDropdown(!dropdown)}>
                    Blog
                    <Image src="/image/dropdown.svg" alt="Blog" width={16} height={8}/>
                    {dropdown && <div className="dropdown" >
                        <ul>
                            <li>
                                <Link href="/notre-histoire">Notre histoire</Link>
                            </li>
                            <li><Link href="/#conception">L&apos;éco-conception</Link></li>
                            <li><Link href="/blog">Actualités</Link></li>
                        </ul>
                    </div>}
                </span>
                <a href="https://www.shop.lamarquepromis.fr/">
                    <span>Nos luminaires</span>
                </a>
                <Link href="/#nous-retrouver">
                    <span>Où trouver nos produits ?</span>
                </Link>
            </div>
            <div className="mobile-links">
                {collapse && <Image
                    onClick={() => setCollapse(true)}
                    src="/image/collapse.svg"
                    alt="Menu"
                    width={500} height={500}
                />}

                <Image
                    src="/image/cancel.svg"
                    alt="annuler"
                    width={500} height={500}
                />
                {collapse && <div className="sidebar">
                    <ul>
                        <li >
                            <Link href="/notre-histoire" onClick={() => setCollapse(false)}> Notre histoire </Link>
                        </li>
                        <hr />
                        <li >
                            <Link href="/#conception" onClick={() => setCollapse(false)}>L&apos;éco-conception </Link>
                        </li>
                        <hr />
                        <li >
                            <Link href="/blog" onClick={() => setCollapse(false)}>Actualités </Link>
                        </li>
                    </ul>
                </div>}

            </div>
        </div>
    )
}
