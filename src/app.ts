import express, { Application, NextFunction, Request, Response } from "express";
// import cors from "cors";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
import notFound from "./app/middlewares/notFound";
import { customerRoutes } from "./app/modules/Customer/customer.routes";
import { BikeRoutes } from "./app/modules/Bike/bike.routes";
import { ServiceRecordRoutes } from "./app/modules/ServiceRecord/serviceRecord.routes";

const app: Application = express();
// app.use(cors({ origin: ["http://localhost:5173"], credentials: true }));

//parser
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send({
    Message: "Bike Servicing Management System",
  });
});

//  Routes
app.use("/api", customerRoutes);
app.use("/api", BikeRoutes);
app.use("/api", ServiceRecordRoutes);

app.use(globalErrorHandler);
app.use(notFound);

export default app;
