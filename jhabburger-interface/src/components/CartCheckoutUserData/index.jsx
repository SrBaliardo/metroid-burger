import React, { useState } from 'react';
import {
  Container,
  Container2,
  CartHeader,
  ContainerAddress,
  LinkContainer,
  LinkChangeAddress,
  AddContainer,
  AddLink,
  IconAddAddress,
  ContainerChangeAddress,
} from './styles';

export function CartCheckoutUserData() {
  const [activeAddress, setActiveAddress] = useState('address1');
  const [changeActiveAddress, setChangeActiveAddress] = useState(false);

  const changeAddress = (address) => {
    setActiveAddress(address);
  };

  return (
    <Container>
      <CartHeader>
        <p>Endereço para entrega</p>
      </CartHeader>

      <Container2>
        <ContainerAddress>
          <p>CEP:</p>
          <p>12345-678</p>

          <p>Endereço:</p>
          <p>Rua Crateria, 94</p>

          <p>Bairro:</p>
          <p>Brinstar</p>

          <p>Cidade/UF:</p>
          <p>Zebes/SC</p>
        </ContainerAddress>

        {changeActiveAddress && (
          <ContainerChangeAddress>
            <div>
              <label>
                <input
                  type="radio"
                  name="address"
                  value="address1"
                  checked={activeAddress === 'address1'}
                  onChange={() => changeAddress('address1')}
                />
                Endereço-1
              </label>
            </div>

            <div>
              <label>
                <input
                  type="radio"
                  name="address"
                  value="address2"
                  checked={activeAddress === 'address2'}
                  onChange={() => changeAddress('address2')}
                />
                Endereço-2
              </label>
            </div>

            <AddContainer>
              <AddLink to={'/user-profile'}>
                <IconAddAddress />
                adicionar endereço
              </AddLink>
            </AddContainer>
          </ContainerChangeAddress>
        )}
      </Container2>

      <LinkContainer>
        <LinkChangeAddress onClick={() => setChangeActiveAddress(true)}>
          <input type="radio" value="false" />
          Escolher outro endereço &gt;
        </LinkChangeAddress>
      </LinkContainer>
    </Container>
  );
}
