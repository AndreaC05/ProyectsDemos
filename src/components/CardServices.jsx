import "../style/CardServices.css";

export default function CardServices({ numero, titulo, descripcion}) {
    return(
        <>
        <div className="card_services_servicios">
            <div className="numero_services">
                <p>{numero}</p>
            </div>
            <div className="text_services">
                <h3>{titulo}</h3>
                <p>{descripcion}</p>
            </div>
        </div>
        </>
    );
}