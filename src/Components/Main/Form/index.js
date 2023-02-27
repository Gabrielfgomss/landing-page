import React from 'react';
import { Button, Collapse, FormControlLabel, IconButton, Radio, RadioGroup, styled, TextField } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SendIcon from '@mui/icons-material/Send';
import styles from './form.module.scss'
import { useFormik } from 'formik';
import * as Yup from 'yup';


function Form() {

    const formik = useFormik({
        initialValues: {
            nome: '',
            email: '',
            CPF: '',
            sexo: '',
        },
        validationSchema: Yup.object({
            nome: Yup.string().required('Insira seu nome'),
            email: Yup.string().email('Formato de email inválido').required('Insira seu email'),
            CPF: Yup.string().length(14, 'CPF deve ter no minimo 14 caracteres').required('Insira seu CPF'),
            sexo: Yup.string().required('Selecione uma opção')
        }),
        onSubmit: values => console.log(values)
    })

    const handleRadioButtons = e => formik.values.sexo = e.target.value;

    const ExpandMore = styled((props) => {
        const { expand, ...other } = props;
        return <IconButton {...other} sx={{ display: { xs: 'block', lg: 'none' } }}/>;
    })(({ theme, expand }) => ({
        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    }));

    const [expanded, setExpanded] = React.useState(true);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <section className={styles.formComponent}>
            <div>
                <article>
                    <p>Ajude o algorítimo a ser mais certeiro</p>
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>
                </article>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <p className={styles.description}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies tellus nec mi porta convallis sollicitudin eu urna. Mauris rhoncus erat sed interdum dignissim. Suspendisse semper pretium consectetur. Praesent bibendum arcu risus, sit amet iaculis ex tempus quis. Cras et erat ut tellus vulputate tincidunt. Aenean lacinia euismod augue vel egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum vel urna tortor. Vivamus et arcu non felis tristique eleifend. Morbi eu condimentum urna. Curabitur eu magna eget turpis condimentum ultrices. Suspendisse quis lorem ultricies, pulvinar purus sed, egestas erat. Etiam ultricies a ante vehicula pharetra. Quisque ut neque mattis, consequat velit ut, ultrices orci. Nulla varius elementum erat vel pharetra. Aenean sit amet nisi diam. Morbi viverra, magna ac luctus commodo, odio ante suscipit libero, at mattis augue est vel metus.
                    </p>
                </Collapse>
            </div>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="nome">Seu nome: </label>
                <TextField
                    sx={{marginBottom: 3}}
                    size='small'
                    error={formik.errors.nome && formik.touched.nome ? true : false}
                    helperText={formik.errors.nome && formik.touched.nome ? formik.errors.nome : null}
                    id="nome"
                    {...formik.getFieldProps("nome")}
                />
                <label htmlFor="email">E-mail: </label>
                <TextField
                    sx={{marginBottom: 3}}
                    size='small'
                    error={formik.errors.email && formik.touched.email ? true : false}
                    helperText={formik.errors.email && formik.touched.email ? formik.errors.email : null}
                    id="email"
                    {...formik.getFieldProps("email")}
                />
                <label htmlFor="CPF">CPF: </label>
                <TextField
                    sx={{marginBottom: 3}}
                    size='small'
                    error={formik.errors.CPF && formik.touched.CPF ? true : false}
                    helperText={formik.errors.CPF && formik.touched.CPF ? formik.errors.CPF : null}
                    id="CPF"
                    {...formik.getFieldProps("CPF")}
                />
                <RadioGroup row>
                    <FormControlLabel
                        value="Masculino"
                        control={<Radio />}
                        label="Masculino"
                        name='sexo'
                        onChange={e => handleRadioButtons(e)}
                        onBlur={formik.handleBlur}
                        sx={formik.errors.sexo && formik.touched.sexo ? {color: 'red'}:null} />
                    <FormControlLabel
                        value="Feminio"
                        control={<Radio />}
                        label="Feminio"
                        name='sexo'
                        onChange={e => handleRadioButtons(e)}
                        onBlur={formik.handleBlur} 
                        sx={formik.errors.sexo && formik.touched.sexo ? {color: 'red'}:null}/>
                </RadioGroup>
                <Button 
                    variant="outlined" 
                    endIcon={<SendIcon />}
                    type="submit" 
                    size='large' 
                    sx={{color: '#888888', border: '1px solid #707070'}}
                    className={styles.submitButton}>
                    Enviar
                </Button>
            </form>
        </section>
    )
}

export default Form