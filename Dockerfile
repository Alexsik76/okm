FROM ubuntu:latest
RUN apt update && apt install -y inetutils-ping dnsutils iproute2 nano