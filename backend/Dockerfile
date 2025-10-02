# Base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy Prisma schema
COPY prisma ./prisma/

# Generate Prisma client
RUN npx prisma generate

# Copy rest of the app
COPY . .

# Build TypeScript
RUN npm run build

# Expose API port
EXPOSE 4000

# Run app
CMD ["node", "dist/index.js"]
