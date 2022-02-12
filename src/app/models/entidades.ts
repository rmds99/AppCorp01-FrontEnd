

export class Sexo
{
  id?: number;
  nome?: string;
}

export class Estado
{
  id?: number;
  nome?: string;
}

export class Cidade
{
  id?: number;
  nome?: string;
  estado = new Estado();
}

export class Usuario
{
  id?: number;
  nome?: string;
  email?: string;
  senha?: string;
  sexoId?: number;
  cidadeId?: number;
}

export class Pergunta
{
  id?: number;
  pergunta?: string;
  resposta?: string;
}

export class CalculoDesconto
{
  id?: number;
  salarioBruto?: number;
  usuarioId?: number;
}

export class CalculoDescontoFinal
{
  id?: number;
  salarioBruto?: number;
  taxa?: number;
  salarioLiquido?: number;
}


export class FundoImobiliario
{
  id?: number;
  nomeFundo?: string;
  valor?: number;
  dataInvestimento = new Date();
  dataResgate = new Date();
  usuarioId?: number;
}

export class Acao
{
  id?: number;
  nomeAcao?: string;
  valor?: number;
  dataInvestimento = new Date();
  dataResgate = new Date();
  usuarioId?: number;
}
