/* Comman interfaces */
export interface Rating {
    rate: number
    count: number
}

export interface Item {
    category: string
    description: string
    id: number
    image: string
    price: number
    qty: number
    rating: Rating
    title: string
}

export interface MyAction {
    type: string;
    payload?: any;
}

/* State interfaces start */

export interface StateList {
    data: []
    product: []
}

export interface PropsList {
    productList: () => void;
    addProduct: (item: Item) => void;
    removeProduct: (id: number) => void;
    data: any[];
    cart: any[];
}

/* State interfaces end */

/* Cart interfaces start */

export interface StateCart {
    data: []
}

export interface PropsCart {
    addQty: (id: number) => void;
    subQty: (id: number) => void;
    removeProduct: (id: number) => void;
    cart: [];
}

/* Cart interfaces end */

export interface apiProduct {

}