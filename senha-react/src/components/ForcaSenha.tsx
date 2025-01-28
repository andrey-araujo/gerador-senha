export interface ForcaSenhaProps {
  nivel: 0 | 1 | 2 | 3 | 4 | 5;
}

export default function ForcaSenha(props: ForcaSenhaProps) {
  const classe = [
    props.nivel == 1 ? "fraca" : "",
    props.nivel == 2 ? "media" : "",
    props.nivel == 3 ? "media" : "",
    props.nivel == 4 ? "forte" : "",
    // props.nivel == 5 ? "muito-forte" : "",
  ].join("");

  return (
    <div className="forca-senha">
      <span>Força</span>
      <div className="niveis">
        <span className="texto">
          {props.nivel == 1 ? "Fraca" : ""}
          {props.nivel == 2 ? "Média" : ""}
          {props.nivel == 3 ? "Boa" : ""}
          {props.nivel == 4 ? "Forte" : ""}
          {/* {props.nivel == 5 ? "Muito Forte" : ""} */}
        </span>
        <div className={`nivel ${classe}`}></div>
        <div className={`nivel ${props.nivel >= 2 ? classe : ""}`}></div>
        <div className={`nivel ${props.nivel >= 3 ? classe : ""}`}></div>
        <div className={`nivel ${props.nivel == 4 ? classe : ""}`}></div>
        {/* <div className={`nivel ${props.nivel == 5 ? classe : ""}`}></div> */}
      </div>
    </div>
  );
}
