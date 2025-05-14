"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import cors from "cors";
const globalErrorHandler_1 = __importDefault(require("./app/middlewares/globalErrorHandler"));
const notFound_1 = __importDefault(require("./app/middlewares/notFound"));
const customer_routes_1 = require("./app/modules/Customer/customer.routes");
const bike_routes_1 = require("./app/modules/Bike/bike.routes");
const serviceRecord_routes_1 = require("./app/modules/ServiceRecord/serviceRecord.routes");
const app = (0, express_1.default)();
// app.use(cors({ origin: ["http://localhost:5173"], credentials: true }));
//parser
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send({
        Message: "Bike Servicing Management System",
    });
});
//  Routes
app.use("/api", customer_routes_1.customerRoutes);
app.use("/api", bike_routes_1.BikeRoutes);
app.use("/api", serviceRecord_routes_1.ServiceRecordRoutes);
app.use(globalErrorHandler_1.default);
app.use(notFound_1.default);
exports.default = app;
