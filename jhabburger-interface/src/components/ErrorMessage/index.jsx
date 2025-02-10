import { MessageError } from './styles';

export function ErrorMessage({ children, ...props }) {
  return <MessageError {...props}>{children}</MessageError>;
}
