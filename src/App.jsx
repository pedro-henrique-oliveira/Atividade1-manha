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
      <a href="#s6">Video</a>
    </nav>
    <main>
      <section className={styles.s1} id="s1">
        <div>
          <h1 className={styles.teste}>Guerra entre Israel e palestina </h1>
          <p>A origem do conflito entre Israel e Palestina é complexa e remonta ao início do século XX, envolvendo disputas territoriais, aspirações nacionais e questões religiosas e culturais. Os principais fatores e eventos históricos incluem:</p>
          <p><strong>Histórico do Conflito</strong></p>
          <p>Origens: As raízes modernas do conflito remontam ao final do século XIX com o surgimento do sionismo (movimento nacionalista judaico que buscava um Estado judeu na região da Palestina) e a Declaração de Balfour britânica (1917), que apoiava a criação de um "lar nacional para o povo judeu" na área, respeitando os direitos das comunidades não judaicas.</p>
          <ul>
            <li>Movimento sionista e a busca por um lar nacional judaico</li>
            <li>Presença histórica da população árabe palestina na região</li>
            <li>Mandato Britânico sobre a Palestina (1920-1948)</li>
            <li>Plano de Partilha da ONU (1947)</li>
            <li>Declaração de independência de Israel (1948)</li>
          </ul>
        </div>
      </section>
      
      <section className={styles.s2} id="s2">
        <h2 className={styles.teste}>História Palestina</h2>
        <p>A Palestina tem uma história milenar como região do Oriente Médio habitada por diversos povos. No início do século XX, a população era majoritariamente árabe, composta por muçulmanos, cristãos e uma pequena comunidade judaica.</p>
        <p>Antiguidade e Dominações: Habitada por cananeus, hebreus e filisteus, a região foi crucial para rotas comerciais. Após o domínio romano e a diáspora judaica, foi ocupada por árabes e, mais tarde, integrada ao Império Otomano até a Primeira Guerra Mundial.</p>
        <p>Mandato Britânico e Tensão: Sob controle britânico após 1918, a região viu a intensificação da imigração judaica, apoiada pela Declaração de Balfour (1917), gerando crescentes conflitos com a população árabe local.</p>
        <p>Ocupação e Impasse: A Guerra dos Seis Dias (1967) levou Israel a ocupar a Cisjordânia e Gaza. Embora acordos de paz, como os de Oslo, tenham estabelecido a Autoridade Palestina, questões cruciais como fronteiras e assentamentos permanecem sem solução, e a luta por um Estado palestino soberano continua.</p>
        <p>Após a criação do Estado de Israel em 1948, centenas de milhares de palestinos tornaram-se refugiados. Esse evento é conhecido como "Nakba" (catástrofe em árabe). Desde então, os palestinos buscam autodeterminação e um Estado próprio.</p>
        <p>Atualmente, os territórios palestinos incluem a Cisjordânia e a Faixa de Gaza, com status político disputado e complexo.</p>
      </section>

      <section id="s3" className={styles.s3}>
        <h2 className={styles.teste}>História Israel</h2>
        <p>Antiguidade: Origens na terra de Canaã, formação dos reinos de Israel e Judá, seguidos pelo domínio romano e a diáspora judaica (dispersão) após 70 d.C..</p>
        <p>Sionismo e Imigração: No final do século XIX, o movimento sionista buscou o retorno dos judeus à sua terra ancestral para criar um Estado soberano, intensificando a imigração para a Palestina.</p>
        <p>O Estado de Israel foi proclamado em 14 de maio de 1948, após o término do Mandato Britânico. A criação do Estado foi resultado do movimento sionista, que ganhou força após o Holocausto na Segunda Guerra Mundial.</p>
        <p>Israel enfrentou múltiplos conflitos armados desde sua criação, incluindo a Guerra de Independência (1948), a Guerra dos Seis Dias (1967) e a Guerra do Yom Kippur (1973).</p>
        <p>Conflitos e Impasses: Guerras subsequentes, como a de 1967, resultaram na ocupação de territórios palestinos. Acordos de paz ocorreram, mas a solução do conflito israelo-palestino permanece um desafio central.</p>
        <p>Hoje, Israel é uma democracia parlamentar com uma economia avançada e é reconhecido pela maioria dos países do mundo, embora o conflito com os palestinos permaneça sem resolução.</p>  
      </section>

      <section id="s4" className={styles.s4}>
        <h2 className={styles.teste}>Cronologia do Conflito</h2>
        <p>A história do conflito Israel-Palestina é complexa e secular, enraizada em reivindicações históricas e religiosas sobre o mesmo território. A disputa moderna intensificou-se no século XX, com eventos-chave que moldaram a situação atual.</p>
        
        <p><strong>Sionismo e Imigração (Final do Século XIX - Início do Século XX):</strong> O movimento sionista, que defendia a criação de um Estado judeu na Palestina como refúgio do antissemitismo europeu, levou a ondas de imigração judaica para a região, na época sob domínio do Império Otomano.</p>
        
        <p><strong>Mandato Britânico e a Declaração Balfour (Pós-Primeira Guerra Mundial):</strong> Com o colapso do Império Otomano, o Reino Unido recebeu um mandato para administrar a Palestina. A Declaração Balfour, de 1917, expressou o apoio britânico a um "lar nacional para o povo judeu" na Palestina, o que gerou tensões com a população árabe local, que também buscava independência.</p>
        
        <p><strong>Plano de Partilha da ONU (1947):</strong> Após a Segunda Guerra Mundial e o Holocausto, a pressão internacional para um Estado judeu aumentou. A ONU aprovou um plano para dividir a Palestina em um Estado judeu e um Estado árabe, com Jerusalém sob administração internacional. Os líderes judeus aceitaram o plano, mas os árabes o rejeitaram.</p>
        
        <ul>
          <li><strong>1948-1949:</strong> Guerra de Independência de Israel / Nakba palestina</li>
          <li><strong>1967:</strong> Guerra dos Seis Dias - Israel ocupa Cisjordânia, Gaza, Sinai e Colinas de Golã</li>
          <li><strong>1973:</strong> Guerra do Yom Kippur</li>
          <li><strong>1987-1993:</strong> Primeira Intifada</li>
          <li><strong>2000-2005:</strong> Segunda Intifada</li>
        </ul>
      </section>

      <section id="s5" className={styles.s5}>
        <h2 className={styles.teste}>Situação Atual</h2>
        <p>O conflito Israel-Palestina continua sendo uma das questões geopolíticas mais complexas do mundo contemporâneo. Apesar de diversas tentativas de paz, incluindo os Acordos de Oslo (1993) e outras iniciativas diplomáticas, uma solução definitiva ainda não foi alcançada.</p>
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

      <section id="s6" className={styles.s6}>
        <h2 className={styles.teste}></h2>
        <iframe width="1850" height="800" src="https://www.youtube.com/embed/m-cazbbExmY?si=tf_KK1WSvrQZvzyV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        
      </section>
    </main>
    </>
  )
}

export default App