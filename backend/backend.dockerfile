FROM node:20

WORKDIR /app

COPY package*.json .

RUN npm install

COPY prisma ./prisma

RUN npx prisma generate

COPY . .

EXPOSE 3000

RUN npm install -g nodemon ts-node