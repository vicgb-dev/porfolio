FROM nginx:alpine

RUN npm install --production
RUN npm run build

COPY dist /usr/share/nginx/html
