import Aside from "./Aside";

function WallPost() {
  return (
    <div className="flex flex-col md:flex-row">
      <Aside />
      {/* Tu contenido de React aquí */}
      <h1 className="text-black">hola</h1>
    </div>
  );
}

export default WallPost;