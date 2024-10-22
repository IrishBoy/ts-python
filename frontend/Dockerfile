FROM node:14
WORKDIR /app
COPY package.json tsconfig.json ./
RUN npm install
COPY . .
RUN npm run build
CMD ["npm", "start"]
