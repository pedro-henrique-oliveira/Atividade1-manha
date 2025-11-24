import styles from './App.module.css'

function App() {

  return (
    <>
    <nav className={styles.menu}>
      <a href="#s1">sobre</a>
      <a href="#s2">imagens</a>
      <a href="#s3">história</a>
      <a href="#s4">conflitos</a>
      <a href="#s5">atualidade</a>
      <a href="#s6">contato</a>
    </nav>
    <main>
      <section id="s1">
        <h1 className={styles.teste}>Origem do conflito</h1>
        <p>A origem do conflito entre Israel e Palestina é complexa e remonta ao início do século XX, envolvendo disputas territoriais, aspirações nacionais e questões religiosas e culturais. Os principais fatores e eventos históricos incluem: </p>
      </section>
      
      <section id="s2">
        <img className={styles.guerra} src="/guerra.png" alt="Guerra" />
        <h2 className={styles.teste}>Imagens</h2>
      </section>

      <section id="s3">
        <h3 className={styles.teste}>História</h3>
      </section>

      <section id="s4">
        <h3 className={styles.teste}>Conflitos</h3>
      </section>

      <section id="s5">
        <h3 className={styles.teste}>Atualidade</h3>
      </section>

      <section id="s6">
        <h3 className={styles.teste}>Contato</h3>
      </section>
    </main>
    </>
  )
}

export default App