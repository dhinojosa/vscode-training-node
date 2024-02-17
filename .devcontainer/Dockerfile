# Use an official Node runtime as a parent image
FROM node:latest

# Install nvm (Node Version Manager)
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash

# Set the environment variables for nvm
ENV NVM_DIR /root/.nvm
ENV PATH $NVM_DIR/versions/node/v$(cat $NVM_DIR/alias/default)/bin:$PATH

# Install specific Node.js version using nvm
RUN . "$NVM_DIR/nvm.sh" && nvm install 14 && nvm use 14 && nvm alias default 14

# Set the working directory
WORKDIR /workspace
