FROM alpine:latest
RUN apk add --no-cache dhcp
COPY dhcpd.conf /etc/dhcp/dhcpd.conf
RUN touch /var/lib/dhcp/dhcpd.leases
ENTRYPOINT ["dhcpd", "-f", "-d", "--no-pid"]