import { paths } from '../../utils/paths';
import ListAltIcon from '@mui/icons-material/ListAlt';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import HomeIcon from '@mui/icons-material/Home';

export const tagsMenu = [
  {
    id: '1',
    label: 'Pedidos',
    link: paths.Orders,
    icon: ReceiptLongIcon,
    screen: 'orders',
  },

  {
    id: '2',
    label: 'Todos Produtos',
    link: paths.ProductsList,
    icon: ListAltIcon,
    screen: 'products',
  },

  {
    id: '3',
    label: 'Adicionar Novo Produto',
    link: paths.AddNewProduct,
    icon: NoteAddIcon,
    screen: 'addNewProduct',
  },

  {
    id: '4',
    label: 'Ir para Home',
    link: '/',
    icon: HomeIcon,
    screen: '/',
  },
];
