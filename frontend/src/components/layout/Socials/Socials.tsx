"use client";
import Image from "next/image";
import styles from './Socials.module.scss';

export default function Socials() {
    return (
        <aside id={styles.reseaux}>
            <a href='https://m.facebook.com/profile.php?id=100090573296197&eav=AfbWgBR8u6pwp3kHjunNHZjIGTBMaVGJ1oTMfbxrL5JeKL1P5NF7x-qNyfS7r4l4x2I&paipv=0'>
                <Image width={48} height={48} src='/image/icons/ico-facebook.svg' alt='Facebook'/>
            </a>
            <a href='https://instagram.com/promis_deco?igshid=YmMyMTA2M2Y='>
                <Image width={56} height={56} src='/image/icons/ico-ig.svg' alt='Instagram'/>
            </a>
            <a href='https://www.tiktok.com/@promis_deco?_t=8bbZQV6e3Fj&_r=1'>
                <Image width={48} height={48} src='/image/icons/ico-tiktok.svg' alt='Tiktok'/>
            </a>
            <a href='https://www.pinterest.fr/lamarquepromis/?invite_code=be710444b3e64fee866aafa1638c7ade&sender=192036509019316596'>
                <Image width={48} height={48} src='/image/icons/ico-pinterest.svg' alt='Pinterest'/>
            </a>
            <a href='https://www.linkedin.com/company/93301375/admin/?feedType=following'>
                <Image width={48} height={48} src='/image/icons/ico-linkedin.svg' alt='Linkedin'/>
            </a>
        </aside>
    );
};