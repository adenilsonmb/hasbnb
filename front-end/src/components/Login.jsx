import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="flex items-center">
      <div className="mx-auto flex w-full max-w-96 flex-col items-center  gap-8 ">
            <h1 className="text-3xl font-bold">Faça seu login</h1>
            <form action="" className="flex w-full flex-col gap-2">
            <input
                type="email"
                className="w-full rounded-full border border-gray-300 px-4 py-2"
            placeholder="Digite seu e-mail"/>
            <input
                type="passowrd"
                className="w-full rounded-full border border-gray-300 px-4 py-2"
            placeholder="digite sua senha"/>

            <butto className="w-full text-center bg-primar-400 text-white font-bold rounded-full border border-gray-300 px-4 py-2 cursor-pointer">Login</butto>
            </form>
            <p>
            Ainda não tem conta?{" "}
            <Link to="/register" className="font-semibold underline">
                Registrar-se aqui!
            </Link>
            </p>
      </div>
    </section>
  );
};
export default Login;
