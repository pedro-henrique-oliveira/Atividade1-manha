import styles from './App.module.css'

function App() {

  return (
    <>
    <nav className={styles.menu}>
      <a href="#s1">Sobre</a>
      <a href="#s2">História Palestina</a>
      <a href="#s3">História Israel</a>
      <a href="#s4">Cronologia</a>
      <a href="#s5">Atualidade</a>
      <a href="#s6">Contato</a>
    </nav>
    <main>
      <section id="s1">
        <div>
          <h1 className={styles.teste}>Sobre o Conflito</h1>
          <p>A origem do conflito entre Israel e Palestina é complexa e remonta ao início do século XX, envolvendo disputas territoriais, aspirações nacionais e questões religiosas e culturais. Os principais fatores e eventos históricos incluem:</p>
          <ul>
            <li>Movimento sionista e a busca por um lar nacional judaico</li>
            <li>Presença histórica da população árabe palestina na região</li>
            <li>Mandato Britânico sobre a Palestina (1920-1948)</li>
            <li>Plano de Partilha da ONU (1947)</li>
            <li>Declaração de independência de Israel (1948)</li>
          </ul>
        </div>
      </section>
      
      <section id="s2">
        <h2 className={styles.teste}>História Palestina</h2>
        <img className={styles.Palestina} width={400} src="/Palestina.png" alt="Palestina" /> 
        <p>A Palestina tem uma história milenar como região do Oriente Médio habitada por diversos povos. No início do século XX, a população era majoritariamente árabe, composta por muçulmanos, cristãos e uma pequena comunidade judaica.</p>
        <p>Após a criação do Estado de Israel em 1948, centenas de milhares de palestinos tornaram-se refugiados. Esse evento é conhecido como "Nakba" (catástrofe em árabe). Desde então, os palestinos buscam autodeterminação e um Estado próprio.</p>
        <p>Atualmente, os territórios palestinos incluem a Cisjordânia e a Faixa de Gaza, com status político disputado e complexo.</p>
      </section>

      <section id="s3">
        <h2 className={styles.teste}>História Israel</h2>
        <img className={styles.israel} width={400} src="/israel.png" alt="israel" />  
        <p>O Estado de Israel foi proclamado em 14 de maio de 1948, após o término do Mandato Britânico. A criação do Estado foi resultado do movimento sionista, que ganhou força após o Holocausto na Segunda Guerra Mundial.</p>
        <p>Israel enfrentou múltiplos conflitos armados desde sua criação, incluindo a Guerra de Independência (1948), a Guerra dos Seis Dias (1967) e a Guerra do Yom Kippur (1973).</p>
        <p>Hoje, Israel é uma democracia parlamentar com uma economia avançada e é reconhecido pela maioria dos países do mundo, embora o conflito com os palestinos permaneça sem resolução.</p>
      </section>

      <section id="s4">
        <h2 className={styles.teste}>Cronologia do Conflito</h2>
        <p>A história do conflito Israel-Palestina é complexa e secular, enraizada em reivindicações históricas e religiosas sobre o mesmo território. A disputa moderna intensificou-se no século XX, com eventos-chave que moldaram a situação atual.</p>
        
        <h3>Origens e Marcos Iniciais</h3>
        <p><strong>Sionismo e Imigração (Final do Século XIX - Início do Século XX):</strong> O movimento sionista, que defendia a criação de um Estado judeu na Palestina como refúgio do antissemitismo europeu, levou a ondas de imigração judaica para a região, na época sob domínio do Império Otomano.</p>
        
        <p><strong>Mandato Britânico e a Declaração Balfour (Pós-Primeira Guerra Mundial):</strong> Com o colapso do Império Otomano, o Reino Unido recebeu um mandato para administrar a Palestina. A Declaração Balfour, de 1917, expressou o apoio britânico a um "lar nacional para o povo judeu" na Palestina, o que gerou tensões com a população árabe local, que também buscava independência.</p>
        
        <p><strong>Plano de Partilha da ONU (1947):</strong> Após a Segunda Guerra Mundial e o Holocausto, a pressão internacional para um Estado judeu aumentou. A ONU aprovou um plano para dividir a Palestina em um Estado judeu e um Estado árabe, com Jerusalém sob administração internacional. Os líderes judeus aceitaram o plano, mas os árabes o rejeitaram.</p>
        
        <h3>Conflitos e Guerras</h3>
        <ul>
          <li><strong>1948-1949:</strong> Guerra de Independência de Israel / Nakba palestina</li>
          <li><strong>1967:</strong> Guerra dos Seis Dias - Israel ocupa Cisjordânia, Gaza, Sinai e Colinas de Golã</li>
          <li><strong>1973:</strong> Guerra do Yom Kippur</li>
          <li><strong>1987-1993:</strong> Primeira Intifada</li>
          <li><strong>2000-2005:</strong> Segunda Intifada</li>
        </ul>
      </section>

      <section id="s5">
        <h2 className={styles.teste}>Situação Atual</h2>
        <p>O conflito Israel-Palestina continua sendo uma das questões geopolíticas mais complexas do mundo contemporâneo. Apesar de diversas tentativas de paz, incluindo os Acordos de Oslo (1993) e outras iniciativas diplomáticas, uma solução definitiva ainda não foi alcançada.</p>
        
        <h3>Desafios Atuais:</h3>
        <ul>
          <li>Expansão de assentamentos israelenses na Cisjordânia</li>
          <li>Bloqueio da Faixa de Gaza</li>
          <li>Status de Jerusalém</li>
          <li>Direito de retorno dos refugiados palestinos</li>
          <li>Reconhecimento mútuo e fronteiras definitivas</li>
          <li>Questões de segurança para ambos os lados</li>
        </ul>
        
        <p>A comunidade internacional continua buscando uma solução de dois Estados, onde Israel e Palestina coexistiriam pacificamente lado a lado, mas os obstáculos políticos e práticos permanecem significativos.</p>
      </section>

      <section id="s6">
        <h2 className={styles.teste}>Contato</h2>
        <p></p>
        
      </section>
    </main>
    </>
  )
}

export default App