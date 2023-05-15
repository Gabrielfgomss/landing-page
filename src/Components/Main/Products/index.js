import React, { useEffect, useState } from 'react'
import styles from './products.module.scss'
import { Box, Button } from '@mui/material';

function ProductContainer() {

    const [apiObject, setApiObject] = useState({});
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1')
            .then(resposta => resposta.json())
            .then(dados => {
                setProducts(dados.products);
                setApiObject(dados)
            })
    }, [])



    const handleClick = async () => {
        const response = await fetch(`https://${apiObject.nextPage}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`Error! status: ${response.status}`);
        }

        const result = await response.json();
        
        setApiObject(result);
        setProducts([...products, ...result.products]);
    };

    return (
        <section className={styles.productComponent}>
            <h4>Sua seleção especial</h4>
            <div className={styles.productContainer}>
                {products.map((product) => {
                    return (
                        <article className={styles.cardContainer} key={product.id}>
                            <img src={product.image} alt='Foto do produto' />
                            <div className={styles.cardContent}>
                                <p>{product.name}</p>
                                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                                    <p>Descrição do produto um pouco maior, com duas linhas ou três que explica melhor do que se trata.</p>
                                </Box>
                                <p>De: R$ {product.oldPrice}</p>
                                <p>Por: R$ {product.price}</p>
                                <p>ou {product.installments.count}x de R$ {product.installments.value}</p>
                                <Button variant='outlined' size='large' className={styles.button}>Comprar</Button>
                            </div>
                        </article>
                    )
                })}
            </div>
            <Button variant='outlined' className={styles.addButton} onClick={handleClick}>Ainda mais produtos aqui!</Button>
        </section>
    )
}

export default ProductContainer