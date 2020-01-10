### Added the below line to the gemfile

```
gem 'therubyracer', :platforms => :ruby
```

Reason being the following error.

```
ExecJS::RuntimeUnavailable: Could not find a JavaScript runtime. See https://github.com/rails/execjs for a list of available runtimes.
```
src for fix: https://stackoverflow.com/questions/9202324/execjs-could-not-find-a-javascript-runtime-but-execjs-and-therubyracer-are-in?answertab=votes#tab-top

### Update lockfile by running the command

```
docker run --rm -v "$PWD"/rails-example-project:/usr/src/app -w /usr/src/app ruby:2.6.0 bundle install
```

### Build image using command

```
docker build -t rails-example .
```

### Run container

```
docker run -d -p 3000:3000 rails-example
```

Visit http://localhost:3000/