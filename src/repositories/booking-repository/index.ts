import { prisma } from "@/config";

async function postBooking(roomId: number, userId: number) {
  return prisma.booking.create({
    data: {
      roomId,
      userId
    },
  });
}

async function updateBooking(roomId: number) {
  return prisma.booking.update({
    where: {
      id: roomId
    },
    data: {}
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
