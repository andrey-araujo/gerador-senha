export interface TamanhoSenhaProps {
  tamanho: number;
  tamanhoMudou: (novoTamanho: number) => void;
}

export default function TamanhoSenha(props: TamanhoSenhaProps) {
  return (
    <div className="tamanho-senha">
      <div className="info">
        <span>Qtde de Caracteres</span>
        <span>{props.tamanho}</span>
      </div>
      <div className="slider">
        <input
          type="range"
          min="4"
          max="40"
          value={props.tamanho}
          onChange={(e) => props.tamanhoMudou(Number(e.target.value))}
        />
      </div>
    </div>
  );
}
