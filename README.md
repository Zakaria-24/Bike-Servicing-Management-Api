# Bike Servicing Management API

A modular RESTful API built using Node.js, Express, TypeScript, PostgreSQL, and Prisma. This system manages customer profiles, bike details, and service records.

# Live backend link

## https://a8-bike-servicing-management-efbna01nb.vercel.app/

# 📁 Tech Stack

## Node.js

## Express.js

## TypeScript

## PostgreSQL

## Prisma ORM

## Modular Architecture

# 🧩 Features

Create, Read, Update, and Delete (CRUD) operations for:

## Customers

## Bikes

## Service Records

    ~ Relational handling between Customer → Bike → ServiceRecord

    ~ Global error handling, validation, notFound, SendResponse, ZodValidation etc.

    ~ Modular and scalable folder structure

# ⚙️ Installation & Setup

## 1. Clone the repository

    ~ git clone https://github.com/your-username/bike-servicing-api.git

    ~ cd bike-servicing-api

## 2. Install dependencies

    yarn install

## 3. Setup environment variables

    # Then configure DATABASE_URL in .env (
        1.DATABASE_URL
        2.NODE_ENV
        3.PORT
    )

# 4. Setup Prisma and DB

npx prisma generate
npx prisma migrate dev --name init

# 5. Run the project

yarn dev
