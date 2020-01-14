FROM ubuntu:16.04

ENV LC_ALL=C.UTF-8 

RUN apt-get update && apt-get install -y \
  python3 python3-dev python3-pip ffmpeg \
  wget rtmpdump curl php php-curl php-bcmath php-simplexml && \
  rm -rf /var/lib/apt/lists/* && \
  python3 -m pip install -U --upgrade pip yle-dl youtube-dl

WORKDIR /output

ENTRYPOINT [ "yle-dl" ]
