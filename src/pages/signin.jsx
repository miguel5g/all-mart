import { Brand } from '../components/auth/brand';
import { Input } from '../components/auth/input';
import { Footer } from '../components/auth/footer';

const SignIn = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div className="px-6 py-4">
          <Brand />
          <p className="mt-1 text-center text-gray-500 dark:text-gray-400">Entre ou cadastre-se</p>

          <form>
            <Input type="email" placeholder="Endereço de e-mail" aria-label="Endereço de e-mail" />

            <Input type="password" placeholder="Senha" aria-label="Senha" />

            <div className="flex items-center justify-between mt-4">
              <a href="#" className="text-sm text-gray-600 dark:text-gray-200 hover:text-gray-500">
                Esqueceu a senha?
              </a>

              <button
                className="px-4 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none"
                type="button"
              >
                Login
              </button>
            </div>
          </form>
        </div>

        <Footer content={`Não possui conta?${' '}`} enter="Registrar" />
      </div>
    </div>
  );
};

export default SignIn;
