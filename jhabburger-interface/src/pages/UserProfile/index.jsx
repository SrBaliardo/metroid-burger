import React from 'react';
import { Container } from './styles';
import { ProfileForm, Header, Footer } from '../../components';

export function UserProfile() {
  return (
    <Container>
      <Header />
      <ProfileForm />
      <Footer />
    </Container>
  );
}

//   const [fileName, setFileName] = useState(null);
//   //const [validCEP, setValidCEP] = useState(null);

//   // const checkCEP = (cepData) => {
//   //   const cep = cepData.target.value.replace(/\D/g, '');
//   //   if (!cep) return;

//   //   fetch(`https://viacep.com.br/ws/${cep}/json/`)
//   //     .then((response) => response.json())
//   //     .then((data) => {
//   //       setValue('address', data.logradouro),
//   //         setValue('neighborhood', data.bairro),
//   //         setValue('city', data.localidade),
//   //         setValue('uf', data.uf),
//   //         setFocus('address-number');
//   //     });
//   //   toast.success('🙋🏻‍♂️ CEP localizado e endereço carregado!'),
//   //     console.log('acerto meseravi');
//   // };

//   // const {
//   //   register,
//   //   setValue,
//   //   setFocus,
//   //   handleSubmit,
//   //   formState: { errors },
//   // } = useForm({
//   //   // resolver: yupResolver(schema),
//   // });

//   // const onSubmit = (cepData) => {
//   //   try {
//   //     if (!cepData.target.value) {
//   //       toast.success('🙋🏻‍♂️ CEP localizado e endereço carregado!');
//   //     } else {
//   //       toast.warn('🙅🏻‍♂️ Verifique o CEP e tente novamente.');
//   //     }
//   //   } catch (error) {
//   //     toast.error(
//   //       '🤦🏻‍♂️ Falha no sistema! Tente novamente ou contate o suporte. 👨🏻‍💻',
//   //     );
//   //   }
//   // };

//   const {
//     register,
//     setValue,
//     setFocus,
//     getValues,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const validateAndFetchCEP = async (cep) => {
//     if (cep.length > 8) {
//       toast.error('CEP deve ter no máximo 8 dígitos.');
//       clearAddressFields();
//       return false;
//     }

//     try {
//       const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
//       const data = await response.json();

//       if (data.erro) {
//         toast.error('CEP não encontrado.');
//         clearAddressFields();
//         return false;
//       }

//       return data;
//     } catch (error) {
//       toast.error('Erro ao buscar CEP.');
//       clearAddressFields();
//       return false;
//     }
//   };

//   const clearAddressFields = () => {
//     setValue('address', '');
//     setValue('neighborhood', '');
//     setValue('city', '');
//     setValue('uf', '');
//     setValue('address-number', '');
//     setValue('supplement', '');
//   };

//   const checkCEP = async (event) => {
//     const cep = event.target.value.replace(/\D/g, '');
//     if (!cep) return;

//     const data = await validateAndFetchCEP(cep);
//     if (data) {
//       setValue('address', data.logradouro);
//       setValue('neighborhood', data.bairro);
//       setValue('city', data.localidade);
//       setValue('uf', data.uf);
//       setFocus('address-number');
//       toast.success('CEP localizado e endereço carregado!');
//     }
//   };

//   const onSubmit = async (data) => {
//     if (data.cep) {
//       const cepData = await validateAndFetchCEP(data.cep);
//       if (cepData) {
//         const isMatching = compareAddressData(data, cepData);
//         if (!isMatching) {
//           const userConfirmed = window.confirm(
//             'Os dados digitados são diferentes dos dados do CEP. Deseja manter os dados digitados?'
//           );
//           if (!userConfirmed) {
//             setValue('address', cepData.logradouro);
//             setValue('neighborhood', cepData.bairro);
//             setValue('city', cepData.localidade);
//             setValue('uf', cepData.uf);
//             setValue('address-number', '');
//             setValue('supplement', '');
//           }
//         }
//       }
//     } else {
//       // Tentar obter o CEP baseado nos campos de endereço digitados
//       // Adicione aqui a lógica para buscar o CEP baseado no endereço digitado
//       // Se encontrado, atualize o campo cep com o valor retornado
//     }

//     toast.success('Formulário enviado com sucesso!');
//   };

//   const compareAddressData = (formData, cepData) => {
//     return (
//       formData.address.toLowerCase() === cepData.logradouro.toLowerCase() &&
//       formData.neighborhood.toLowerCase() === cepData.bairro.toLowerCase() &&
//       formData.city.toLowerCase() === cepData.localidade.toLowerCase() &&
//       formData.uf.toLowerCase() === cepData.uf.toLowerCase()
//     );
//   };

//   return (
//     <Container>
//       <Header />
//       <ContainerBorder>
//         <ContainerContent>
//           <ContainerAvatar>
//             <p>Avatar</p>
//             <img src={Avatar} alt="user-avatar" />
//             <UploadLabel>
//               {fileName || (
//                 <>
//                   <PermMediaIcon />
//                   mudar imagem
//                 </>
//               )}
//               <input
//                 type="file"
//                 accept="image/png, image/jpeg"
//                 onChange={(value) => {
//                   setFileName(value.target.files[0]?.name);
//                 }}
//               />
//             </UploadLabel>
//           </ContainerAvatar>

//           <Form method="get" action="." onSubmit={handleSubmit(onSubmit)}>
//             <div>
//               <label>Primeiro nome</label>
//               <input
//                 type="text"
//                 placeholder="first-name"
//                 // {...register('fisrtName')}
//               />
//             </div>
//             <div>
//               <label>Último nome</label>
//               <input
//                 type="text"
//                 placeholder="last-name"
//                 // {...register('lastName')}
//               />
//             </div>
//             <div>
//               <label>Gênero</label>
//               <div className="container-gender">
//                 <input type="radio" name="gender" id="masculino" />
//                 <label htmlFor="masculino">Masculino</label>
//                 <input type="radio" name="gender" id="feminino" />
//                 <label htmlFor="feminino">Feminino</label>
//               </div>
//             </div>
//             <div>
//               <label>CEP</label>
//               <input
//                 type="text"
//                 placeholder="cep"
//                 {...register('cep')}
//                 onBlur={checkCEP}
//               />
//               <button type="submit">Pesquisar</button>
//             </div>
//             <div>
//               <label>Logradouro</label>
//               <input
//                 type="text"
//                 placeholder="address"
//                 {...register('address')}
//               />
//             </div>
//             <div>
//               <label>Número</label>
//               <input
//                 type="text"
//                 placeholder="address-number"
//                 {...register('address-number')}
//               />
//             </div>
//             <div>
//               <label>Bairro</label>
//               <input
//                 type="text"
//                 placeholder="neighborhood"
//                 {...register('neighborhood')}
//               />
//             </div>
//             <div>
//               <label>Cidade</label>
//               <input type="text" placeholder="city" {...register('city')} />
//             </div>
//             <div>
//               <label>UF</label>
//               <input type="select" placeholder="state" {...register('uf')} />
//             </div>
//             <div>
//               <label>Observação/Complemento</label>
//               <input
//                 type="text"
//                 placeholder="supplement"
//                 {...register('supplement')}
//               />
//             </div>
//             <div>
//               <AddLink>
//                 <IconAddAddress />
//                 adicionar outro endereço
//               </AddLink>
//             </div>
//           </Form>
//         </ContainerContent>
//         <ContainerSubmit>
//           <CancelButton>Cancelar</CancelButton>
//           <SubmitButton>Salvar</SubmitButton>
//         </ContainerSubmit>
//       </ContainerBorder>
//       <Footer />
//     </Container>
//   );
// }
