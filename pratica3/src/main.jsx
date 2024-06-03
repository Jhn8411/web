import { ContatosContextProvider } from './contexts/ContatosContext';
import App from './App';

function Main() {
    return (
        <ContatosContextProvider>
            <App />
        </ContatosContextProvider>
    );
}

export default Main;
