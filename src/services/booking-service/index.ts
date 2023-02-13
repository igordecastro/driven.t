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

  await bookingRepository.postBooking(roomId, userId);
}

async function listBooking(userId: number) {
  const enrollment = await enrollmentRepository.findWithAddressByUserId(userId);

  if(!enrollment) {
    throw notFoundError();
  }
  const bookings = bookingRepository.listBooking();

  return bookings;
}

async function updateBooking(bookingId: number, userId: number) {
  await bookingRepository.updateBooking(bookingId, userId);
}

const bookingService = {
  postBooking,
  listBooking,
  updateBooking
};

export default bookingService;
