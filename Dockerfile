FROM node:latest

WORKDIR /idev/backend

COPY package*.json ./

RUN npm install 

RUN npm install -g @babel/core @babel/cli

RUN npm install -g typescript

RUN npm install bcrypt

COPY . .

CMD ["npm", "run", "build"]