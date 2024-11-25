import ErrorHandler from "../error/error.js";
import { Reservation } from "../models/reservationSchema..js";

export const sendReservation = async (req, res, next)=>{
    const {firstName, lastName,email, phone, date, time, persons} = req.body;
    if (!firstName || !lastName || !email || !phone ||!date || !time || !persons){
        return next(new ErrorHandler("PLease fill full reservation form!", 400));
    }
    try {
        await Reservation.create({
            firstName, 
            lastName, 
            email,
            phone, 
            time, 
            date,
            persons});
        res.status(200).json({
            success: true,
            message: "Reservation Sent Successfully!",
          });
    } catch (error) {
        if(error.name === "ValidationError") {
            const ValidationErrors = Object.values(error.errors).map(
                (err) => err.message
            );
            return next(new ErrorHandler(ValidationErrors.join(" , "),400));
        }
        return next(error);

    }
};
