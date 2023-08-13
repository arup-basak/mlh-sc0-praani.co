export default interface Hospital {
    name: string,
    location: [string, string],
    availableBeds: number,
    contact: string,
    email?: string,
    address: string
}