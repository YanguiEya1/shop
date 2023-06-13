# Stage 1: Build the Angular app
FROM node:18 as builder

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the frontend code
COPY . .

# Build the Angular app
RUN npm run build

# Stage 2: Serve the built Angular app using a lightweight HTTP server
FROM nginx:alpine

# Copy the built app from the previous stage
COPY --from=builder /app/dist/shop /usr/share/nginx/html

# Remove the default nginx configuration
RUN rm /etc/nginx/conf.d/default.conf

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/

# Install Node.js and npm
RUN apk add --no-cache nodejs npm
# Install json-server globally
RUN npm install -g json-server

# Set the working directory for json-server
WORKDIR /app/api

# Copy the json-server data file and routes file
COPY db.json .
COPY routes.json .


# Expose ports for frontend and json-server
EXPOSE 80
EXPOSE 3000

# Start the nginx server and json-server concurrently
CMD ["sh", "-c", "nginx -g 'daemon off;' & json-server --watch db.json --routes routes.json --port 3000"]

