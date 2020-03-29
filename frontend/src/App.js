import React from 'react';
import Routes from './routes';
import './global.css';

/* Componente: funçaoo que retorna html
 * JSX (JS XML): HTML integrado dentro do JS
 * Propriedades: quase o mesmo conceito de atributo,
 *              mas passado para componentes ao invés de elementos do HTML
 */

/* Não se pode alterar o valor do estado de uma forma direta, mas sobrepor o valor
 * useState(x) retorna um array com 2 posições [valor, função de atualização] 
 * Exemplo: const [counter, setCounter] = useState(0);
 *          function increment (){
 *            setCounter(counter + 1);
 *          }
 */

export default function App() {
  return (
    <Routes />
  );
}
