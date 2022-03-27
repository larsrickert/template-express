FROM node:17-alpine

WORKDIR /usr/src/app

COPY package*.json ./

#  --ignore-scripts is needed to not run husky prepare script
RUN npm ci --only=production --ignore-scripts

EXPOSE 3000
CMD ["npm", "start"]
