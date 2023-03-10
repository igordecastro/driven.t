import { prisma } from "@/config";

async function postBooking(roomId: number, userId: number) {
  return prisma.booking.create({
    data: {
      roomId,
      userId
    },
  });
}

async function updateBooking(roomId: number, userId: number) {
  return prisma.booking.update({
    where: {
      id: roomId
    },
    data: {
      roomId,
      userId,
      updatedAt: new Date
    }
  });
}

async function listBooking() {
  return prisma.booking.findMany({});
}

const bookingRepository = {
  postBooking,
  listBooking,
  updateBooking
};

export default bookingRepository;
