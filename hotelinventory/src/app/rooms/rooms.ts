export interface Room {
    totalRooms: number;
    availableRooms: number;
    bookedRooms: number;
}


export interface RoomList {
    roomNo: number,
    roomType: string;
    amenities: string;
    price: number;
    photos: string;
    checkinTime: Date;
    checkoutTime: Date;
    rating:number;
}