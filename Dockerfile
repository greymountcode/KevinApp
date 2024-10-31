FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application files
COPY . .

# Create a .env file with the required environment variables
RUN echo "PORT=3100" > config.env

EXPOSE 3100

# Change to use node instead of nodemon for production
CMD ["node", "app.js"] 