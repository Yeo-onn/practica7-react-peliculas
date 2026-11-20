import escudo from "../img/escudo-cucei.png";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <img src={escudo} alt="Escudo de CUCEI" className="footer-escudo" />
      <div className="footer-info">
        <p><strong>Integrantes:</strong> Ana Yoseline Acosta Arreola</p>
        <p><strong>Profesor:</strong> Mtro. Zeus Cobián</p>
        <p><strong>Materia:</strong> Desarrollo De Aplicaciones Web En La Nube Y Móviles</p>
        <p><strong>Calendario escolar:</strong> 2026B</p>
        <p><strong>Mes y año:</strong> Noviembre 2026</p>
        <p><strong>Institución:</strong> CUCEI – Universidad de Guadalajara</p>
      </div>
    </footer>
  );
}

export default Footer;
