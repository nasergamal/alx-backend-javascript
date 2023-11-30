import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const arr = [19, 20, 34];
  const rooms = [];
  for (const i of arr) {
    rooms.push(new ClassRoom(i));
  }
  return rooms;
}
