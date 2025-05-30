FROM node:22-alpine

#Create an app directory
WORKDIR /app

#Install app dependencies
COPY package*.json ./

#Run npm install
RUN npm install

#Bundle app source
COPY . .

EXPOSE 8080

CMD [ "npm", "start" ]