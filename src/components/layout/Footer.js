import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

import styles from './Footer.module.css'

function Footer() {
    return (
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li className='social-list'>
                    <FaFacebook />
                </li>
                <li className='social-list'>
                    <FaInstagram />
                </li>
                <li className='social-list'>
                    <FaLinkedin />
                </li>
            </ul>
            <p className={styles.copy}>
                <span>Costs</span> &copy; 2021
            </p>
        </footer>
    )
}

export default Footer