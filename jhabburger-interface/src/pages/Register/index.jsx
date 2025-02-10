import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { api } from '../../services/api';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';

import { Button, ErrorMessage } from '../../components';
import {
  Container,
  LeftContainer,
  RightContainer,
  Title,
  Form,
  InputContainer,
  Input,
  LinkP,
  LinkSpan,
} from './styles';
import Logo from '../../assets/metroidburguer-logo.png';

export function Register() {
  const navigate = useNavigate();
  const schema = yup
    .object({
      name: yup.string().required('O nome é obrigatório.'),
      email: yup
        .string()
        .email('Digite um email válido.')
        .required('O e-mail é obrigatório.'),
      password: yup
        .string()
        .required('A senha é obrigatória. Mínimo 6 caracteres.')
        .min(6, 'A senha deve ter no mínimo 6 caracteres.'),
      confirmPassword: yup
        .string()
        .required('A confirmação é obrigatória.')
        .oneOf([yup.ref('password')], 'A confrimação deve ser igual a senha.'),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const { status } = await api.post(
        '/users',
        {
          name: data.name,
          email: data.email,
          password: data.password,
        },
        {
          validateStatus: () => true,
        },
      );

      if (status === 201 || status === 200) {
        toast.success('🙋🏻‍♂️ Conta criada com sucesso!');
        setTimeout(() => {
          navigate('/login');
        }, 1000);
      } else if (status === 409) {
        toast.warn('🙅🏻‍♂️ E-mail já cadastrado. Tente outro.');
      } else {
        throw new Error();
      }
    } catch (error) {
      toast.error(
        '🤦🏻‍♂️ Falha no sistema! Tente novamente ou contate o suporte. 👨🏻‍💻',
      );
    }
  };

  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt="logo-metroidburguer" />
      </LeftContainer>

      <RightContainer>
        <Title>Criar Conta</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <label>Nome</label>
            <Input
              type="text"
              {...register('name')}
              $error={errors.name?.message}
            />
            <ErrorMessage>{errors?.name?.message}</ErrorMessage>
          </InputContainer>

          <InputContainer>
            <label>Email</label>
            <Input
              type="email"
              {...register('email')}
              $error={errors.email?.message}
            />
            <ErrorMessage>{errors.email?.message}</ErrorMessage>
          </InputContainer>

          <InputContainer>
            <label>Senha</label>
            <Input
              type="password"
              {...register('password')}
              $error={errors.password?.message}
            />
            <ErrorMessage>{errors.password?.message}</ErrorMessage>
          </InputContainer>

          <InputContainer>
            <label>Confirmar senha</label>
            <Input
              type="password"
              {...register('confirmPassword')}
              $error={errors.confirmPassword?.message}
            />
            <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>
          </InputContainer>

          <Button type="submit">CADASTRAR</Button>
        </Form>
        <LinkP>
          Já possui conta?
          <Link to={'/login'}>
            {' '}
            <LinkSpan>Clique aqui.</LinkSpan>
          </Link>
        </LinkP>
      </RightContainer>
    </Container>
  );
}
