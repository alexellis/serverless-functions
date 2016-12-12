FROM node:6.9-slim
ENTRYPOINT []
COPY package.json .
COPY funker-node funker-node
RUN npm i
COPY sampleresponse.json .
COPY handler.js .
EXPOSE 9999
CMD ["npm", "start"]
