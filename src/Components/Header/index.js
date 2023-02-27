import { Button, Grid } from '@mui/material'
import React from 'react'
import styles from './header.module.scss'

function Header() {

  return (
    <header className={styles.headerComponent}>
      <article>
        <p>uma seleção de produtos</p>
        <p>especial para você</p>
        <p>Todos os produtos desta lista foram selecionados a partir da sua navegação. Aproveite!</p>
      </article>
      <nav>
        <Grid container spacing={2} className={styles.gridContainer}>
          <Grid item xs={6} lg={3} className={styles.gridItem}>
            <Button href="#text-buttons" className={styles.button} variant="outlined">Conheça a Linx</Button>
          </Grid>
          <Grid item xs={6} lg={3} className={styles.gridItem}>
            <Button href="#text-buttons" className={styles.button} variant="outlined">Ajude o algorítimo</Button>
          </Grid>
          <Grid item xs={6} lg={3} className={styles.gridItem}>
            <Button href="#text-buttons" className={styles.button} variant="outlined">Seus produtos</Button>
          </Grid>
          <Grid item xs={6} lg={3} className={styles.gridItem}>
            <Button href="#text-buttons" className={styles.button} variant="outlined">Compartilhe</Button>
          </Grid>
        </Grid>
      </nav>
    </header>

  )
}

export default Header