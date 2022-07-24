FROM node:16-alpine as build

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci

COPY . ./
RUN npm run build

# production stage
FROM node:16-alpine
COPY --from=build /usr/src/app/dist ./dist

COPY package*.json ./
# remove husky init script (needed because --omit=dev does not install husky)
RUN npm pkg delete scripts.prepare
RUN npm ci --omit=dev

EXPOSE 3000
CMD ["npm", "start"]
