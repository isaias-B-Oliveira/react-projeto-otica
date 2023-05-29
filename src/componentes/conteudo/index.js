import Sesaocapa from '../sesao-capa';
import Sesaosobre from '../sesaosobre';
import Sesaoprodutos from '../sesaoprodutos';
import Sesaocontato from '../sesaocontato';

export default function Conteudo() {
    return(
        <main>
            <Sesaocapa/>
            <Sesaoprodutos/>
            <Sesaosobre/>
            <Sesaocontato/>
        </main>
    )
}