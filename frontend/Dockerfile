# Step 1: Use an official Node.js image to build the app
FROM node:18 AS build

# Step 2: Set the working directory for the application
WORKDIR /app

# Step 3: Copy package.json and package-lock.json (or yarn.lock) to install dependencies
COPY package*.json ./

# Step 4: Install the dependencies
RUN npm install

# Step 5: Copy the entire application code to the container
COPY . .

# Step 6: Build the Vite app for production
RUN npm run build

# Step 7: Expose the port where the app will be served
EXPOSE 5173

# Step 8: Run the Vite dev server in production mode (optional, can be swapped with another server)
CMD ["npm", "run", "preview"]
