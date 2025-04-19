# Use Node.js 16 as base image (more stable for testing)
FROM node:16

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy project files
COPY . .

# Run tests
CMD ["npm", "test"]
