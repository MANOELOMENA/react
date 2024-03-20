import React from "react";

const luana = {
    cliente: 'Luana',
    idade: 27,
    compras: [
        { nome: 'Notebook', preco: 'R$ 2500' },
        { nome: 'Geladeira', preco: 'R$ 3000' },
        { nome: 'Smartphone', preco: 'R$ 1500' },
    ],
    ativa: true,
};

const App = () => {
    const dados = luana;

    const totalGasto = dados.compras
        .map((item) => parseFloat(item.preco.replace('R$ ', '')))
        .reduce((acc, cur) => acc + cur, 0);

    const situacao = dados.ativa ? 'Ativa' : 'Inativa';
    const corSituacao = dados.ativa ? 'green' : 'red';
    const mensagem = totalGasto > 10000 ? 'Gasto elevado' : null;

    const styles = {
        container: {
            fontFamily: 'Arial, sans-serif',
            border: '2px solid #ccc',
            padding: '20px',
            width: '300px',
            margin: '0 auto',
        },
        cliente: {
            fontSize: '1.5em',
        },
        mensagem: {
            marginTop: '10px',
            color: 'red',
        },
    
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.cliente}>Cliente: {dados.cliente}</h2>
            <p>Idade: {dados.idade}</p>
            <p style={{ color: corSituacao }}>Situação: {situacao}</p>
            <p style={{ color: corSituacao }}>Total Gasto: R$ {totalGasto}</p>
            {mensagem && <p style={styles.mensagem}>{mensagem}</p>}
        </div>
    );
};

export default App;