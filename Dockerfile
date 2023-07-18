FROM node:13-alpine
WORKDIR /Amount-adder
COPY . .
RUN npm i
ENTRYPOINT ["npm", "start"]
