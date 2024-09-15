# Use Node.js version 21
FROM node:21

# Set the working directory inside the container
WORKDIR /myapp

# Copy package.json and package-lock.json before copying the rest of the files
# This ensures Docker cache optimization by installing dependencies only when the package.json changes
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the app on port 3000 (React's default development port)
EXPOSE 3000

# Command to start the development server with hot-reloading
CMD ["npm", "start"]