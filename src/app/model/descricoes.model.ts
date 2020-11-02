export interface IDescricao {
    nome: string;
    titulo: string;
    texto_curto: string[];
    texto_longo: string[];
}

export interface IDescricaoJSON {
    lixeiras: IDescricao[];
    pracas: IDescricao[];
    cooperativa: IDescricao[];
    parque: IDescricao[];
    pilhas: IDescricao[];
}

