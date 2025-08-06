export default function Form() {
  return (
    <div className="flex flex-col space-y-0 h-auto md:flex-row mt-10 mb-3 ml-3 mr-3">
      <div
        className="bg-[#9fc24e] bg-center flex justify-center items-center 
        rounded-t-lg md:rounded-none md:rounded-tl-lg md:rounded-bl-lg"
      >
        <a
          href="https://elmejorlugar.com/"
          className="flex justify-center items-center"
        >
          <img
            src="./logo-white.png"
            alt="Logo de la empresa"
            className="w-4/5 md:w-96 h-auto md:pr-4 pl-4"
          />
        </a>
      </div>
      <form className="mt-8 bg-white p-11 rounded-b-lg md:rounded-none md:rounded-tr-lg md:rounded-br-lg shadow-md w-auto space-y-9">
        <h1 className="text-4xl text-center pt-3 pb-3 text-gray-500 font-bold">
          Iniciar Sesión
        </h1>
        <div className="flex flex-row mt-10 w-auto">
          <i className="bi bi-envelope flex justify-center items-center pl-3 pr-3 text-2xl text-gray-500 bg-gray-200 border border-gray-200 rounded-tl-lg rounded-bl-lg"></i>
          <input
            type="text"
            id="mail"
            autoComplete="off"
            placeholder="Correo Electrónico"
            className="w-full md:w-64 h-10 border border-gray-200 rounded-tr-lg rounded-br-lg pl-2 pt-6 pb-6 "
          />
        </div>

        <div className="flex flex-col mt-10">
          <div className="flex flex-row mt-2">
            <i className="bi bi-lock flex justify-center items-center pl-3 pr-3 text-2xl text-gray-500 bg-gray-200 border border-gray-200 rounded-tl-lg rounded-bl-lg"></i>
            <input
              type="password"
              id="pass"
              autoComplete="off"
              placeholder="Contraseña"
              className="w-full md:w-64 h-10 border border-gray-200 rounded-tr-lg rounded-br-lg pl-2 pt-6 pb-6"
            />
          </div>
        </div>

        <input
          type="submit"
          className="text-white font-bold bg-[#9fc24e] hover:bg-[#6a8133] px-4 py-4 rounded w-full mt-10 cursor-pointer"
          value="Iniciar Sesión"
        />

        <div className="flex justify-around">
          <a
            className="text-[#9fc24e] hover:text-[#6a8133] mb-3"
            href="https://elmejorlugar.com/?action=client"
          >
            Registrarme
          </a>
          <a
            className="text-[#9fc24e] hover:text-[#6a8133] mb-3"
            href="https://elmejorlugar.com/?action=reset"
          >
            Olvide contraseña
          </a>
        </div>
      </form>
    </div>
  );
}
