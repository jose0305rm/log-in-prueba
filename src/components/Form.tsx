export default function Form() {
  return (
    <div className="space-y-0 h-auto">
      <div className="bg-[#9fc24e] bg-center h-64 rounded-tl-lg rounded-tr-lg justify-center ">
        <a href="https://elmejorlugar.com/">
          <img
            src="/logo-white.png"
            alt="Logo de la empresa"
            className="w-auto h-auto rounded-t-lg p-7"
          />
        </a>
      </div>
      <form className="mt-8 bg-gray-200 p-5 rounded-b-lg shadow-md w-auto space-y-9">
        <h1 className="text-4xl text-center pt-3 pb-3 text-gray-500 font-bold">
          Iniciar Sesión
        </h1>
        <div className="flex flex-row mt-10">
          <i className="bi bi-envelope flex justify-center items-center pl-3 pr-3 text-2xl text-gray-500 bg-gray-300 border border-gray-200 rounded-tl-lg rounded-bl-lg"></i>
          <input
            type="text"
            id="mail"
            autoComplete="off"
            placeholder="Correo Electrónico"
            className="w-full h-10 border border-gray-200 rounded-tr-lg rounded-br-lg pl-2 pt-6 pb-6"
          />
        </div>

        <div className="flex flex-col mt-10">
          <div className="flex flex-row mt-2">
            <i className="bi bi-lock flex justify-center items-center pl-3 pr-3 text-2xl text-gray-500 bg-gray-300 border border-gray-200 rounded-tl-lg rounded-bl-lg"></i>
            <input
              type="text"
              id="pass"
              autoComplete="off"
              placeholder="Contraseña"
              className="w-full h-10 border border-gray-200 rounded-tr-lg rounded-br-lg pl-2 pt-6 pb-6"
            />
          </div>
        </div>

        <input
          type="submit"
          className="text-white font-bold bg-[#9fc24e] px-4 py-4 rounded w-full mt-10"
          value="Iniciar Sesión"
        />

        <div className="flex justify-around">
          <a
            className="text-[#85a141] hover:text-[#bee45d] mb-3"
            href="https://elmejorlugar.com/?action=client"
          >
            Registrarme
          </a>
          <a
            className="text-[#85a141] hover:text-[#bee45d] mb-3"
            href="https://elmejorlugar.com/?action=reset"
          >
            Olvide contraseña
          </a>
        </div>
      </form>
      <p className="text-white">
        Powered by ClickApp. © 2025 Dynamic Advance S.A.
      </p>
    </div>
  );
}
