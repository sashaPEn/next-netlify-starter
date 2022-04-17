import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        ©8Б Столинской государственной гимназии <img src="/icon-removebg-preview.png" width="25px"  className={styles.logo} /> Все права защищены 
      </footer>
    </>
  )
}
