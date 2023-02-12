import { AuthenticatedRequest } from "@/middlewares";
import bookingService from "@/services/booking-service";
import { Response } from "express";
import httpStatus from "http-status";

export async function postBooking(req: AuthenticatedRequest, res: Response) {
  const { roomId } = req.body;
  const { userId } = req;

  if(!roomId) {
    return res.sendStatus(httpStatus.NOT_FOUND);
  }

  try {
    await bookingService.postBooking(userId, roomId);
    return res.sendStatus(httpStatus.CREATED);
  } catch (err) {
    return res.status(httpStatus.NOT_FOUND);
  }
}

export async function listBooking(req: AuthenticatedRequest, res: Response) {
  try {
    const bookings = await bookingService.listBooking();
    return res.send(bookings);
  } catch(err) {
    return res.sendStatus(httpStatus.NOT_FOUND);
  }
}

export async function updateBooking(req: AuthenticatedRequest, res: Response) {
  const { bookingId } = req.params;

  try{
    await bookingService.updateBooking(Number(bookingId));
  } catch (err) {
    return res.sendStatus(httpStatus.FORBIDDEN);
  }
}
