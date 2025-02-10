import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { paths } from '../../../utils/paths';
import { api } from '../../../services/api';
import {
  Container,
  ProductImage,
  IconCheck,
  IconUncheck,
  IconEdit,
} from './styles';
import { formatCurrency } from '../../../utils/formatCurrency';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export function ProductsList() {
  const [products, setProducts] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    async function loadProducts() {
      const { data } = await api.get('products');

      setProducts(data);
    }
    loadProducts();
  }, []);

  function isOffer(offerStatus) {
    if (offerStatus) {
      return (
        <IconCheck>
          <CheckCircleOutlineIcon />
        </IconCheck>
      );
    }
    return (
      <IconUncheck>
        <HighlightOffIcon />
      </IconUncheck>
    );
  }

  function editProductDetails(product) {
    navigate(paths.EditProduct, { state: { product } });
  }

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Produto</TableCell>
              <TableCell>Preço</TableCell>
              <TableCell align="center">Em oferta</TableCell>
              <TableCell></TableCell>
              <TableCell align="center">Editar</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products &&
              products.map((product) => (
                <TableRow
                  key={product.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {product.name}
                  </TableCell>
                  <TableCell>{formatCurrency(product.price)}</TableCell>
                  <TableCell align="center">{isOffer(product.offer)}</TableCell>
                  <TableCell align="center">
                    <ProductImage src={product.url} alt="product-image" />
                  </TableCell>
                  <TableCell align="center">
                    <IconEdit onClick={() => editProductDetails(product)} />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
