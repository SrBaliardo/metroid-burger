import { ContainerButton } from './styles';

export function ButtonTrash({ children, ...props }) {
  return <ContainerButton {...props}>{children}</ContainerButton>;
}
