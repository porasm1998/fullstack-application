# Use an official Node runtime as a parent image
FROM node:latest

# Set the working directory in the container
WORKDIR /src/app

# Copy the current directory contents into the container at /usr/src/app
COPY . .

# Install any needed packages
RUN npm install

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Define environment variable
ENV NODE_ENV production

# Run the app when the container launches
CMD ["npm", "start"]
