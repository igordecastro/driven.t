import { Router } from "express";
import { postBooking, listBooking, updateBooking } from "@/controllers";
import { authenticateToken } from "@/middlewares";

const bookingRouter = Router();

bookingRouter
  .all("/*", authenticateToken)
  .post("", postBooking)
  .put("/:bookingId", updateBooking)
  .get("", listBooking);

export { bookingRouter };
