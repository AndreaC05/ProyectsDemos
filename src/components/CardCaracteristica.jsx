import "../style/CardCaracteristicas.css";

const CardCaracteristica = ({ imagen, titulo, descripcion, altText = "" }) => {
  return (
    <div className="cards_caracteristicas">
      <img src={imagen} alt={altText} />
      <div className="text_card">
        <h3>{titulo}</h3>
        <p>{descripcion}</p>
      </div>
    </div>
  );
};

export default CardCaracteristica;