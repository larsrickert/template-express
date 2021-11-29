## this is the stage one , also know as the build step
FROM node:alpine as build

WORKDIR /usr/src/app

COPY package*.json .
RUN npm install

COPY . .
RUN npm run build

## this is stage two , where the app actually runs
FROM node:alpine

WORKDIR /usr/src/app
COPY package*.json .

# --ignore-scripts will skip prepare script which would init husky
RUN npm install --only=production --ignore-scripts
COPY --from=build /usr/src/app/dist ./dist

EXPOSE 3000

CMD ["npm", "start"]
