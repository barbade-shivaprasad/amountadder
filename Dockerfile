FROM node
WORKDIR /Amount-adder
COPY . .
RUN npm i
ENTRYPOINT ["npm", "start"]
