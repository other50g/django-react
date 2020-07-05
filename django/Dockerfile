FROM ubuntu:latest

MAINTAINER other50g

RUN apt-get update
RUN apt-get -y install curl
RUN apt-get -y install software-properties-common
RUN apt-get update

# リポジトリの追加
RUN add-apt-repository ppa:fish-shell/release-3
RUN apt-get -y install fish

# fishermanのインストール
RUN curl -Lo ~/.config/fish/functions/fisher.fish --create-dirs --create-dirs https://git.io/fisher

# powerlineフォントのインストール
RUN apt-get -y install fonts-powerline

SHELL ["fish", "--command"]
ENV LANG=C.UTF-8 LANGUAGE=C.UTF-8 LC_ALL=C.UTF-8

RUN chsh -s /usr/bin/fish

# Gitのインストール
RUN add-apt-repository ppa:git-core/ppa
RUN apt-get update
RUN apt-get -y install git

# テーマの導入
RUN fisher add oh-my-fish/theme-bobthefish

# プラグインの導入
# cdしなくてもディレクトリの移動ができるやつ
RUN fisher add oh-my-fish/plugin-expand

# fzf
RUN git clone --depth 1 https://github.com/junegunn/fzf.git ~/.fzf
RUN ~/.fzf/install
RUN fisher add fzf

# vimが欲しい
RUN apt-get -y install vim

ADD ./requirements.txt requirements.txt

# Python3
RUN apt-get -y update \
    && apt-get install -y locales build-essential libffi-dev libssl-dev python3-distutils libpq-dev python3-dev libcairo2-dev postgresql-client \
    && curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py \
    && python3 get-pip.py \
    && pip install -U pip \
    && pip install -r requirements.txt

WORKDIR /django

ADD ./wait-for-postgres.sh /wait-for-postgres.sh
RUN chmod +x /wait-for-postgres.sh