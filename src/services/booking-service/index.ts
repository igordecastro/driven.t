import { notFoundError } from "@/errors";
import bookingRepository from "@/repositories/booking-repository";
import enrollmentRepository from "@/repositories/enrollment-repository";
import ticketRepository from "@/repositories/ticket-repository";

async function postBooking(userId: number, roomId: number) {
  const enrollment = await enrollmentRepository.findWithAddressByUserId(userId);
  const ticket = await ticketRepository.findTicketByEnrollmentId(enrollment.id);
  const ticketType = await ticketRepository.findTickeWithTypeById(ticket.id);

  if(!ticketType) {
    throw notFoundError();
  }

  // if(!ticketType.)
  await bookingRepository.postBooking(roomId, userId);
}

async function listBooking() {
  const bookings = bookingRepository.listBooking();
}

async function updateBooking(bookingId: number) {
  await bookingRepository.updateBooking(bookingId);
}

const bookingService = {
  postBooking,
  listBooking,
  updateBooking
};

export default bookingService;
