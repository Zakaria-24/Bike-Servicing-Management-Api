import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import router from "./app/routes";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
import notFound from "./app/middlewares/notFound";

const app: Application = express();
app.use(cors({ origin: ["http://localhost:5173"], credentials: true }));

//parser
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send({
    Message: "Bike Servicing Management System",
  });
});

app.use("/api/v1", router);

app.use(globalErrorHandler);
app.use(notFound);

// app.use((req: Request, res: Response, next: NextFunction) => {
//   res.status(httpStatus.NOT_FOUND).json({
//     success: false,
//     message: "API NOT FOUND!",
//     error: {
//       path: req.originalUrl,
//       message: "Your requested path is not found!",
//     },
//   });
// });

export default app;
