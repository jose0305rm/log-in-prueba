import Form from "./components/Form";

function App() {
  //bg-[#B8E05A] Color del bainder
  //bg-[#95db6c] Color del logo actual (nuevo)

  return (
    <>
      <div className="flex flex-col text-center items-center justify-center min-h-screen bg-[url('./banner-back.jpg')] bg-cover bg-center">
        <Form />
      </div>
    </>
  );
}

export default App;
