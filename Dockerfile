# Use an official Node.js runtime as the base image
FROM node:18 AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Build the Angular application
RUN npm run build --prod

# Use a lightweight web server to serve the built Angular app
FROM nginx:alpine

# Copy the build files from the previous stage into the nginx container
COPY --from=build /app/dist /usr/share/nginx/html

# Expose the port on which the app will run
EXPOSE 80

# Start the nginx server
CMD ["nginx", "-g", "daemon off;"]
