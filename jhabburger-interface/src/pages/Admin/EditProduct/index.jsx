import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { paths } from '../../../utils/paths';
import { api } from '../../../services/api';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import {
  Container,
  Label,
  UploadLabel,
  Input,
  CategorySelect,
  Offer,
} from './styles';
import { Button, ErrorMessage } from '../../../components';
import { useForm, Controller } from 'react-hook-form';
import PermMediaIcon from '@mui/icons-material/PermMedia';

export function EditProduct({ setCurrentScreen }) {
  const [fileName, setFileName] = useState(null);
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  const { state } = useLocation();
  const { product } = state || {};

  const schema = yup.object().shape({
    name: yup.string().required('Insira um nome.'),
    price: yup.number().required('Insira um valor.'),
    category: yup.object().required('Selecione uma categoria.'),
  });

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema), defaultValues: product });

  const onSubmit = async (data) => {
    const productsFormData = new FormData();

    productsFormData.append('name', data.name);
    productsFormData.append('price', data.price.toString().replace(',', '.'));
    productsFormData.append('category_id', data.category.id);
    productsFormData.append('file', data.file[0]);
    productsFormData.append('offer', data.offer);

    try {
      const { status } = await toast.promise(
        api.put(`/products/${product.id}`, productsFormData),
        {
          pending: '👨🏻‍💻 Checando variáveis...',
          success: '🙋🏻‍♂️ Produto editado!',
          error: '🙅🏻‍♂️ Falha ao editar. Tente novamente.',
        },
      );

      if (status === 200 || status === 201) {
      } else if (status === 400 || status === 409) {
      } else {
        throw new Error();
      }
    } catch (error) {
      toast.error(
        '🤦🏻‍♂️ Falha no sistema! Tente novamente ou contate o suporte. 👨🏻‍💻',
      );
    }
  };

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories');

      setCategories(data);
    }
    loadCategories();
  }, []);

  if (!product) {
    navigate(paths.EditProduct);
  }

  return (
    <Container>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Label>Nome</Label>
        <Input
          type="text"
          {...register('name')}
          $error={errors.name?.message}
        />
        <ErrorMessage>{errors.name?.message}</ErrorMessage>

        <Label>Preço</Label>
        <Input
          type="number"
          {...register('price')}
          $error={errors.price?.message}
        />
        <ErrorMessage>{errors.price?.message}</ErrorMessage>

        <Label>Categoria</Label>
        <Controller
          name="category"
          control={control}
          render={({ field }) => {
            return (
              <CategorySelect
                {...field}
                placeholder="Selecione"
                options={categories}
                getOptionLabel={(category) => category.name}
                getOptionValue={(category) => category.id}
                $error={errors.category?.message}
              />
            );
          }}
        ></Controller>
        <ErrorMessage>{errors.category?.message}</ErrorMessage>

        <UploadLabel>
          {fileName || (
            <>
              <PermMediaIcon />
              Carregar imagem do produto
            </>
          )}
          <input
            type="file"
            accept="image/png, image/jpeg"
            {...register('file')}
            onChange={(value) => {
              setFileName(value.target.files[0]?.name);
            }}
          />
        </UploadLabel>

        <Offer>
          <input type="checkbox" {...register('offer')} /> &nbsp; Este produto
          está em oferta?
        </Offer>

        <Button type="submit">Atualizar</Button>
      </form>
    </Container>
  );
}
