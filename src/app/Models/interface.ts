export interface IProduct {
    P_id: number;
    imgSrc: string;
    name: string;
    price: number;
    size: object;
}

export interface ITempProduct {
    P_id: number;
    name: string;
    price: number;
    quantity: number;
    p_total: number;
}
export interface ITransaction {
    T_id: number;
    transaction: [{
        P_id: number;
        name: string;
        price: number;
        quantity: number;
        P_total: number;
    }],
    T_total: number;
}

export interface IUser {
    username:string;
    password:string;
}