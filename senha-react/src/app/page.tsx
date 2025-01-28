"use client";
import { Senha } from "regras";
import { useEffect, useState } from "react";
import ExibirSenha from "@/components/ExibirSenha";
import CaracteristicasSenha from "@/components/CaracteristicasSenha";
import ForcaSenha from "@/components/ForcaSenha";
import TamanhoSenha from "@/components/TamanhoSenha";

export default function Home() {
  const [tamanho, setTamanho] = useState(4);
  const [senha, setSenha] = useState("");
  const [minusculas, setMinusculas] = useState(true);
  const [maiusculas, setMaiusculas] = useState(true);
  const [numeros, setNumeros] = useState(true);
  const [simbolos, setSimbolos] = useState(true);

  useEffect(() => {
    setSenha(
      Senha.gerar({ tamanho, minusculas, maiusculas, numeros, simbolos })
    );
  }, [tamanho, minusculas, maiusculas, numeros, simbolos]);

  return (
    <main className="tela">
      <div className="conteudo">
        <h1 className="titulo">Gerador de Senha</h1>
        <ExibirSenha senha={senha} />
        <div className="formulario">
          <TamanhoSenha tamanho={tamanho} tamanhoMudou={setTamanho} />
          <div className="caracteristicas-senha">
            <CaracteristicasSenha
              texto="Icluir letras Minusculas"
              valor={minusculas}
              valorMudou={setMinusculas}
            />
            <CaracteristicasSenha
              texto="Icluir letras Maiusculas"
              valor={maiusculas}
              valorMudou={setMaiusculas}
            />
            <CaracteristicasSenha
              texto="Icluir Números"
              valor={numeros}
              valorMudou={setNumeros}
            />
            <CaracteristicasSenha
              texto="Incluir Símbolos"
              valor={simbolos}
              valorMudou={setSimbolos}
            />
          </div>
          <ForcaSenha nivel={Senha.nivel(senha)} />
        </div>
      </div>
    </main>
  );
}
