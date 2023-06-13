FROM node:14-alpine

# Install json-server globally
RUN npm install -g json-server

# Set the working directory
WORKDIR /app

# Copy the JSON server data file
COPY db.json .

# Expose the default port for the JSON server
EXPOSE 3000

# Start the JSON server
CMD ["json-server", "--watch", "db.json"]
