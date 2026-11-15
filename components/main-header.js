import Link from "next/link";
import Logo from '@/assets/logo.png'
import classes from './main-header.module.css'

export default function MainHeader() {
    return <header className={classes.header}>
        <Link className={classes.logo} href='/'>
            <img src={Logo.src} alt="Home page Logo" />
            NEXTLEVEL FOOD
        </Link>

        <nav className={classes.nav}>
            <ul>
                <li>
                    <Link href='/meals'>Meals</Link>
                </li>
                <li>
                    <Link href='/community'>Community</Link>
                </li>
            </ul>
        </nav>
    </header>
}