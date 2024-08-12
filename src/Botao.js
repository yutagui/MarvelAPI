import {useState} from 'react';

export default function Botao(){
    var [valor, setValor] = useState(0);

    function Somar() {
        setValor(valor++);
    }

    return (
        <div>
            <input 
                type="button" 
                value ="Contar"
                onClick={() => Somar()}
            />

            {valor}
        </div>
    )
}