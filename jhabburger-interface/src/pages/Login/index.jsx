import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { api } from '../../services/api';
import { toast } from 'react-toastify';
import { useUser } from '../../hooks/UserContext';
import { Link, useNavigate } from 'react-router-dom';
import { paths } from '../../utils/paths';

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

export function Login() {
  const { putUserData } = useUser();
  const navigate = useNavigate();

  const schema = yup
    .object({
      email: yup
        .string()
        .required('O e-mail é obrigatório.')
        .email('Digite um email válido.'),
      password: yup
        .string()
        .required('A senha é obrigatória.')
        .min(6, 'Verifique sua senha.'),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (clientData) => {
    const { data } = await toast.promise(
      api.post('/session', {
        email: clientData.email,
        password: clientData.password,
      }),
      {
        pending: '👨🏻‍💻 Verificando seus dados...',
        success: '🙋🏻‍♂️ Seja bem-vindo(a)!',
        error: '🙅🏻‍♂️ Verifique seu e-mail e senha.',
      },
    );
    putUserData(data);
    setTimeout(() => {
      if (data.admin) {
        navigate(paths.Orders);
      } else {
        navigate('/');
      }
    }, 1000);
  };

  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt="logo-metroidburguer" />
      </LeftContainer>

      <RightContainer>
        <Title>
          Olá, seja bem vindo ao <span>METROID Burguer!</span>
          <br />
          Acesse com seu <span>login e senha.</span>
        </Title>

        <Form onSubmit={handleSubmit(onSubmit)}>
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

          {/* <Link>Esqueci minha senha.</Link> */}

          <Button type="submit">ENTRAR</Button>
        </Form>

        <LinkP>
          Não possui acesso?{' '}
          <Link to={'/register'}>
            <LinkSpan>Clique aqui.</LinkSpan>
          </Link>
        </LinkP>
      </RightContainer>
    </Container>
  );
}
