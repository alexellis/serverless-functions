FROM alexellis2/nodejs-armhf:6.9.2
ENTRYPOINT []
COPY package.json .
COPY funker-node funker-node
RUN npm i
COPY sampleresponse.json .
COPY handler.js .
EXPOSE 9999
CMD ["npm", "start"]
