export interface CaracteristicasSenhaProps {
  texto: string;
  valor: boolean;
  valorMudou: (valor: boolean) => void;
}

export default function CaracteristicasSenha(props: CaracteristicasSenhaProps) {
  return (
    <div className="caracteristicas">
      <input
        type="checkbox"
        checked={props.valor}
        className="checkbox"
        onChange={(e) => props.valorMudou(e.target.checked)}
      />
      <span>{props.texto}</span>
    </div>
  );
}
