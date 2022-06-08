import { Footer } from '../components/auth/footer';
import { Brand } from '../components/auth/brand';
import { Input } from '../components/auth/input';

const SignUp = () => {
  function handleFormSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div className="px-6 py-4">
          <Brand />

          <p className="mt-1 text-center text-gray-500 dark:text-gray-400">
            Crie sua conta gratuitamente
          </p>

          <form onSubmit={handleFormSubmit}>
            <Input type="text" placeholder="Nome" aria-label="Nome" />

            <Input type="email" placeholder="Endereço de e-mail" aria-label="Endereço de e-mail" />

            <Input type="password" placeholder="Senha" aria-label="Senha" />

            <button className="mt-4 ml-auto btn btn-primary" type="submit">
              Entrar
            </button>
          </form>
        </div>
        <Footer content="Já possui conta?" enter="Entrar"/>
      </div>
    </div>
  );
};

export default SignUp;
