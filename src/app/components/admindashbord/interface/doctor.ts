export enum Plan {
    FREE = "FREE",
    BASIC = "BASIC",
    STANDARD = "Standard",
    PREMIUM = "Premium"
  }
  
  export interface Doctor {
creationDate: string;
    id: string;
    username: string;
    speciality: string;
    email: string;
    phone: string;
    address: string;
    isActive: boolean;
    image: any;
    rating: number;
    followers: number;
    bio: string;
    subscription: Plan;
    etoil: number[];
  }
  