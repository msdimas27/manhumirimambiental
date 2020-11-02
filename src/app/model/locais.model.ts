export interface ILocal {
    nome: string;
    latitude: number;
    longitude: number;
    key?: string;
    dist?: number;
}

export interface ILocalJSON {
    lixeiras: ILocal[];
    pracas: ILocal[];
    cooperativa: ILocal[];
    parque: ILocal[];
    pilhas: ILocal[];
}

