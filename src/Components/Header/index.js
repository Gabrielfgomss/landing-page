import React from 'react'
import styles from './header.module.scss'


function Header() {

  return (
    <section className={styles.headerComponent}>
      <article>
        <p>uma seleção de produtos</p>
        <p>especial para você</p>
        <p>Todos os produtos desta lista foram selecionados a partir da sua navegação. Aproveite!</p>
      </article>

      <nav>
        <button> <a href="#">Conheça a Linx</a></button>
        <button> <a href="#">Ajude o algorítimo</a></button>
        <button> <a href="#">Seus produtos</a></button>
        <button> <a href="#">Compartilhe</a></button>
      </nav>

    </section>

  )
}

export default Header