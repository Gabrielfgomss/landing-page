import React from 'react'
import { TextField, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styles from './recomendation.module.scss'

function Recomendation() {

    const formik = useFormik({
        initialValues: {
            nome: '',
            email: ''
        },
        validationSchema: Yup.object({
            nome: Yup.string().required('Insira seu nome'),
            email: Yup.string().email('Formato de email inválido').required('Insira seu email'),
        }),
        onSubmit: values => console.log(values)
    })
    return (
        <div className={styles.footerComponent}>
            <h4>Compartilhe a novidade</h4>
            <section>
                <p className={styles.sectionTitle}>Quer que seus amigos também ganhem a lista personalizada deles? Preencha agora!</p>
                <form onSubmit={formik.handleSubmit}>
                    <div>
                        <label htmlFor='nome'>Nome do seu amigo:</label>
                        <TextField
                            sx={{ marginBottom: 3 }}
                            size='small'
                            error={formik.errors.nome && formik.touched.nome ? true : false}
                            helperText={formik.errors.nome && formik.touched.nome ? formik.errors.nome : null}
                            id="nome"
                            {...formik.getFieldProps("nome")}
                        />
                    </div>
                    <div>
                        <label htmlFor='email'>E-mail dele:</label>
                        <TextField
                            sx={{ marginBottom: 3 }}
                            size='small'
                            error={formik.errors.email && formik.touched.email ? true : false}
                            helperText={formik.errors.email && formik.touched.email ? formik.errors.email : null}
                            id="email"
                            {...formik.getFieldProps("email")}
                        />
                    </div>
                    <Button
                        variant="outlined"
                        endIcon={<SendIcon />}
                        type="submit"
                        size='large'
                        sx={{ color: '#888888', border: '1px solid #707070' }}
                        className={styles.submitButton}>
                        Enviar agora
                    </Button>
                </form>
            </section>
        </div>
    )
}

export default Recomendation