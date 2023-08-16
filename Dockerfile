FROM node:18-alpine

WORKDIR /idev/backend

COPY package*.json ./

RUN npm install 

RUN npm install -g @babel/core @babel/cli

RUN npm install -g typescript

COPY . .

RUN npm run build-src

CMD ["npm", "run", "build"]