export const generateNewDateArr = (dateArray, totalRoomBook) => {
    return Array(totalRoomBook).fill(dateArray).flat();
};