export const Update_Quantity = 'Update_Quantity';
export const Fetch_Products_Start = 'Fetch_Products_Start';
export const Fetch_Products_End = 'Fetch_Products_End';
export const Fetch_Categories_Start = 'Fetch_Categories_Start';
export const Fetch_Categories_End = 'Fetch_Categories_End';
export const Initial_Style = 'Initial_Style';
export const Fetch_Collections_Start = 'Fetch_Collections_Start';
export const Fetch_Collections_End = 'Fetch_Collections_End';

var api = require('../utils/moltin.js');

export function updateQuantity(quantity) {
  return {
    type: Update_Quantity,
    payload: quantity
  }
};

export function FetchProductsStart() {
  return {
    type: Fetch_Products_Start
  }
};

export function FetchProductsEnd(data) {
  return {
    type: Fetch_Products_End,
    payload: data
  }
};

export function GetProducts() {
  return function (dispatch) {
      
      dispatch(FetchProductsStart())

      return api.GetProducts()
      
        .then((products) => {
          dispatch(FetchProductsEnd(products))
        }) 
    }
};

export function FetchCategoriesStart() {
  return {
    type: Fetch_Categories_Start
  }
};

export function FetchCategoriesEnd(data) {
  return {
    type: Fetch_Categories_End,
    payload: data
  }
};

export function GetCategories() {
  return function (dispatch) {
      
      dispatch(FetchCategoriesStart())

      return api.GetCategories()
      
        .then((categories) => {
          dispatch(FetchCategoriesEnd(categories))
        }) 
    }
};

export function InitialStyle(style) {
  return {
    type: Initial_Style,
    style: style,
    header: style
  }
}

export function FetchCollectionsStart() {
  return {
    type: Fetch_Collections_Start
  }
};

export function FetchCollectionsEnd(data) {
  return {
    type: Fetch_Collections_End,
    payload: data
  }
};

export function GetCollections() {
  return function (dispatch) {
      
      dispatch(FetchCollectionsStart())

      return api.GetCollections()
      
        .then((collections) => {
          dispatch(FetchCollectionsEnd(collections))
        }) 
    }
};
