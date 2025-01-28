"use client";

import { IconCopy } from "@tabler/icons-react";

export interface ExibirSenhaProps {
  senha: string;
}

export default function ExibirSenha(props: ExibirSenhaProps) {
  function copiarSenha() {
    navigator.clipboard.writeText(props.senha);
    alert("Senha copiada para área de transfêrencia");
  }

  return (
    <div className="exibir-senha">
      <p className="senha">
        {props.senha ? props.senha : "Selecione as opções..."}
      </p>
      <div>
        <IconCopy size={24} className="icone" onClick={copiarSenha} />
      </div>
    </div>
  );
}
