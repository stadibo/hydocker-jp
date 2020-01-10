FROM ruby:2.6.0

RUN bundle config --global frozen 1

COPY ./rails-example-project /usr/src/app
WORKDIR /usr/src/app

RUN bundle install

RUN rails db:migrate RAILS_ENV=production
RUN rake assets:precompile

EXPOSE 3000
CMD ["rails", "s -e production"]