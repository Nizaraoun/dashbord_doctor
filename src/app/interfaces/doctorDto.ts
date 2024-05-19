export interface doctorDto {
    id: string;
    username: string;
    speciality: string;
    email: string;
    phone: string;
    address: string;
    image: any; // Assuming you'll handle the image as a binary data
    rating: number;
    followers: number;

}