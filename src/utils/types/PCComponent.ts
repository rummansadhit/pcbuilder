

export interface PCComponent {
    _id: string;
    image: string;
    productName: string;
    category: string;
    price: number;
    inStock: boolean;
    rating: number;
    averageRating: number;
  }


  export interface Product {
    _id: string;
    image: string;
    productName: string;
    category: string;
    status: string;
    price: {
      $numberDouble: string;
    };
    description: string;
    keyFeatures: {
      brand: string;
      model: string;
      specification: string;
      port: string;
      type: string;
      resolution: string;
      voltage: string;
    };
    individualRating: {
      $numberDouble: string;
    };
    averageRating: {
      $numberDouble: string;
    };
    
  }
  
