FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install --legacy-peer-deps

COPY . .

RUN chmod u+x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
