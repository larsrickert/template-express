## this is the stage one , also know as the build step
FROM node:17.0.1-alpine3.12 as build

WORKDIR /usr/src/app

COPY package*.json .
RUN npm install

COPY . .
RUN npm run build

## this is stage two , where the app actually runs
FROM node:17.0.1-alpine3.12

WORKDIR /usr/src/app
COPY package*.json .

# --ignore-scripts will skip prepare script which would init husky
RUN npm install --only=production --ignore-scripts
COPY --from=build /usr/src/app/dist ./dist

CMD ["npm", "start"]
