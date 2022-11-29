FROM cypress/included:11.2.0

RUN mkdir /cypress-docker
WORKDIR /cypress-docker

RUN npm install
ENTRYPOINT ["npm", "run","cypress:execution"]