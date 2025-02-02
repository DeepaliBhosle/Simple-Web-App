# Use the official Node.js image as a base
FROM node:16

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json (if you have it) to install dependencies
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Expose the port the app will run on
EXPOSE 3000

# Run the application
CMD ["npm", "start"]
# Use the official Node.js image as a base
FROM node:16

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json (if you have it) to install dependencies
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Expose the port the app will run on
EXPOSE 3000

# Run the application
CMD ["npm", "start"]

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install the dependencies
RUN npm install

