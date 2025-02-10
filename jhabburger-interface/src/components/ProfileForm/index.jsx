import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../hooks/UserContext';
import { ErrorMessage, Button } from '..';
import {
  Container,
  ContainerContent,
  ContainerAvatar,
  UploadLabel,
  Form,
  EditIcon,
  ContainerUser,
  ContainerAdress,
  SearchButton,
  AddLink,
  IconAddAddress,
  ContainerSubmit,
  CancelButton,
  SubmitButton,
} from './styles';
import DefaultAvatar from '../../assets/user-helmet.jpg';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import SearchIcon from '@mui/icons-material/Search';

export function ProfileForm() {
  const [avatarFile, setAvatarFile] = useState(null);
  const [avatarURL, setAvatarURL] = useState(DefaultAvatar);
  const [unsavedChanges, setUnsavedChanges] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();
  const { userData, updateUserData, putUserData } = useUser();

  useEffect(() => {
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [unsavedChanges]);

  const {
    register,
    setValue,
    reset,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (userData) {
      reset({
        name: userData?.name || '',
        email: userData?.email || '',
        street: userData?.street || '',
        number: userData?.number || '',
        complement: userData?.complement || '',
        neighborhood: userData?.neighborhood || '',
        city: userData?.city || '',
        state: userData?.state || '',
      });
      setAvatarURL(userData?.url || DefaultAvatar);
    }
  }, [reset, userData]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setAvatarFile(file);
      setAvatarURL(URL.createObjectURL(file));
      setUnsavedChanges(true);
    }
  };

  const handleCancelClick = () => {
    if (isEditing) {
      setIsEditing(false);
      setUnsavedChanges(false);
    } else {
      setIsEditing(false);
      window.history.back();
    }
  };

  const handleBeforeUnload = (event) => {
    if (unsavedChanges) {
      event.preventDefault();
      event.returnValue = '';
    }
  };

  const ediUserData = () => {
    setIsEditing(true);
  };

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();

      Object.keys(data).forEach((key) => {
        formData.append(key, data[key]);
      });

      if (avatarFile) {
        formData.append('file', avatarFile);
      }

      const response = await updateUserData(userData.id, formData);

      if (response) {
        toast.success('Perfil atualizado com sucesso!');
        const updatedUserData = {
          ...userData,
          ...response,
        };
        putUserData(updatedUserData);
        localStorage.setItem(
          'metroidburger:userData',
          JSON.stringify(updatedUserData),
        );

        setAvatarURL(updatedUserData?.url);
        setIsEditing(false);
        setUnsavedChanges(false);
      }
    } catch (error) {
      toast.error('Erro ao atualizar perfil.');
    }
  };

  return (
    <Container>
      <ContainerContent>
        <ContainerAvatar>
          <div>
            <img src={avatarURL} alt="user-avatar" />
          </div>
          <UploadLabel>
            <>
              <PermMediaIcon />
              mudar imagem
            </>
            <input
              type="file"
              accept="image/png, image/jpeg"
              onChange={handleFileChange}
              disabled={!isEditing}
            />
          </UploadLabel>
        </ContainerAvatar>

        <Form method="post" onSubmit={handleSubmit(onSubmit)}>
          <div className="contaienr-title">
            <h2>Seus Dados</h2>
            <span data-tooltip="Editar Perfil">
              <EditIcon onClick={ediUserData} />
            </span>
          </div>
          <ContainerUser>
            <div>
              <label>Nome:</label>
              <input
                type="text"
                placeholder="Nome"
                {...register('name')}
                onChange={() => setUnsavedChanges(true)}
                disabled={!isEditing}
              />
            </div>
            <div>
              <label>E-mail:</label>
              <input
                type="text"
                placeholder="E-mail"
                {...register('email')}
                onChange={() => setUnsavedChanges(true)}
                disabled={!isEditing}
              />
            </div>
          </ContainerUser>

          <ContainerAdress>
            <h2>Endereço para Entrega</h2>
            <div className="address">
              <div className="street">
                <div>
                  <label>Logradouro:</label>
                  <input
                    type="text"
                    placeholder="Ex: Rua, Avenida, Travessa..."
                    {...register('street')}
                    onChange={() => setUnsavedChanges(true)}
                    disabled={!isEditing}
                  />
                </div>
                <div className="number">
                  <label>Número:</label>
                  <input
                    type="text"
                    placeholder="Número"
                    {...register('number')}
                    onChange={() => setUnsavedChanges(true)}
                    disabled={!isEditing}
                  />
                </div>
              </div>
              <div>
                <label>Complemento:</label>
                <input
                  type="text"
                  placeholder="Ex: Bloco, Apartamento, Fundo..."
                  {...register('complement')}
                  onChange={() => setUnsavedChanges(true)}
                  disabled={!isEditing}
                />
              </div>
            </div>

            <div className="neighbor">
              <div>
                <label>Bairro:</label>
                <input
                  type="text"
                  placeholder="Bairro"
                  {...register('neighborhood')}
                  onChange={() => setUnsavedChanges(true)}
                  disabled={!isEditing}
                />
              </div>
              <div className="city">
                <label>Cidade:</label>
                <input
                  type="text"
                  placeholder="CIdade"
                  {...register('city')}
                  onChange={() => setUnsavedChanges(true)}
                  disabled={!isEditing}
                />
              </div>
              <div className="uf">
                <label>UF:</label>
                <input
                  type="text"
                  placeholder="Estado"
                  {...register('state')}
                  onChange={() => setUnsavedChanges(true)}
                  disabled={!isEditing}
                />
              </div>
            </div>

            <div>
              <AddLink disabled={!isEditing}>
                <IconAddAddress />
                adicionar outro endereço
              </AddLink>
            </div>
          </ContainerAdress>

          <ContainerSubmit>
            {isEditing && <SubmitButton type="submit">Salvar</SubmitButton>}
            <CancelButton type="button" onClick={handleCancelClick}>
              {isEditing ? 'Cancelar' : 'Voltar'}
            </CancelButton>
          </ContainerSubmit>
        </Form>
      </ContainerContent>
    </Container>
  );
}
