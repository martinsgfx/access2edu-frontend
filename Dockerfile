# ----------------------
# Development stage only
# ----------------------
    FROM node:18-alpine AS dev-stage

    # Set the working directory
    WORKDIR /app
    
    # Copy package files and install dependencies
    COPY package*.json ./
    RUN npm install
    RUN npm install google-auth-library

    
    # Copy all source code
    COPY . .
 
    EXPOSE 5173
    
    # Start the app in development mode
    CMD ["npm", "run", "dev"]
    
