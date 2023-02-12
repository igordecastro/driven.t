import { Router } from "express";
import { postBooking, listBooking, updateBooking } from "@/controllers";
import { authenticateToken, validateBody } from "@/middlewares";
import { roomSchema } from "@/schemas/room-schemas";

const bookingRouter = Router();

bookingRouter
  .all("/*", authenticateToken)
  .post("", validateBody(roomSchema), postBooking)
  .put("/:bookingId", validateBody(roomSchema), updateBooking)
  .get("", listBooking);

export { bookingRouter };
