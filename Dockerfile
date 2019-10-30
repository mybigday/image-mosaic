# We're using this library for AWS Lambda (Node.js 6.10)
# This docker file is just for test

FROM amazonlinux

ADD src/__tests__/etc/nodesource.gpg.key /etc

WORKDIR /tmp

RUN yum -y install gcc-c++ make findutils cairo cairo-devel cairomm-devel libjpeg-turbo-devel pango pango-devel pangomm pangomm-devel giflib-devel
RUN rpm --import /etc/nodesource.gpg.key
RUN curl --location --output ns.rpm https://rpm.nodesource.com/pub_6.x/el/7/x86_64/nodejs-6.10.0-1nodesource.el7.centos.x86_64.rpm
RUN rpm --checksig ns.rpm
RUN rpm --install --force ns.rpm
RUN npm install -g yarn
RUN yarn cache clean
RUN yum clean all
RUN rm --force ns.rpm

WORKDIR /build
