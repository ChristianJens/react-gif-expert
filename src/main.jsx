import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GifExpertApp } from "./GifExpertApp";
// Archivo de estilos que se aplica de forma global
import './styles.css';

createRoot(document.getElementById("root")).render(
  // Desabilito por el momento el modo estricto para veridicar que cuando imprimo en consola me crea la segunda salida, pero este nos ayuda a identificar diversos problemas, solo se aplica en desarrollo, nos ayuda a que respetemos las parcticas de React y que mi componente funcione de la manera que estoy esperando y si tuvieramos algun problema nos va tirar un warning, pero no se ve en produccion.
  <StrictMode>
    <GifExpertApp />
  </StrictMode>
);
