import { ContainerButton } from './styles';

export function ButtonCart({ children, ...props }) {
  return <ContainerButton {...props}>{children}</ContainerButton>;
}
