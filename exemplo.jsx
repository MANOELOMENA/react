
const Componente = () => {
    const idade = 27
    const Carro = {
        Marca: 'Ford',
        Modelo: 'New Fiesta',
        Cor: 'Branco'
    }
    return(
    <div>
        <h1>Meu titulo</h1>
        <p>Meu paragráfo</p>
        <p>{idade}</p>
        <p>Marca do carro é: {Carro.Marca}</p>
    </div>
    )
}

export default Componente;