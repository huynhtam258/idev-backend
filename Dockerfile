FROM node:18-alpine 

WORKDIR /idev/backend

COPY package*.json ./

RUN npm install 

RUN npm install -g @babel/core @babel/cli

COPY . .

CMD ["npm", "run", "build"]