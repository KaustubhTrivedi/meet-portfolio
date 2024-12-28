# Step 1: Use an official Node.js image to build the app
FROM node:20 AS build

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

# Step 7: Create a smaller final image with only the build artifacts
FROM node:20-slim

# Step 8: Set the working directory for the application
WORKDIR /app

# Step 9: Install serve globally (only in the final image)
RUN npm install -g serve

# Step 10: Copy the production build from the build stage
COPY --from=build /app/dist /app/dist

# Step 11: Expose the port where the app will be served
EXPOSE 3000

# Step 12: Run the app using serve
CMD ["serve", "-s", "dist"]
