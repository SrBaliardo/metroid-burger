import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

const globalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        border: none;
        text-decoration: none;
        list-style: none;
    }

    button {
        cursor: pointer;
    }

    a {
        cursor: pointer;
    }
`;

export default globalStyles;
