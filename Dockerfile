FROM n8nio/n8n:latest
USER root
COPY n8n-nodes-jetapi-0.1.0.tgz /tmp/
RUN cd /tmp && npm install -g n8n-nodes-jetapi-0.1.0.tgz
USER node
