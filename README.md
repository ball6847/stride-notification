# Stride Notification

[![Build Status](https://travis-ci.org/ball6847/stride-notification.svg?branch=master)](https://travis-ci.org/ball6847/stride-notification)
[![npm version](https://img.shields.io/npm/v/@ball6847/stride-notification.svg?logo=npm)](https://www.npmjs.com/package/@ball6847/stride-notification)
[![docker image](https://img.shields.io/docker/build/ball6847/stride-notification.svg?logo=docker)](https://hub.docker.com/r/ball6847/stride-notification/)

Simple cli application for sending stride-notification, useful in CI environment

### Installation

```sh
npm install -g @ball6847/stride-notification
```

### Usage

```sh
Usage: stride-notification [options]

Options:
  -V, --version         output the version number
  --token <token>       stride app token
  --cloud-id <cloudId>  stride cloud id
  --room-id <roomId>    stride room id
  --project <project>   name of project
  --status <status>     job status, succcess or failure
  --ref <ref>           job reference id
  --url <url>           job url the developer can click to see detail about the job
  --branch <branch>     git branch name
  -h, --help            output usage information
```

### Example

```sh
stride-notification \
  --token "<your token>" \
  --cloud-id "<stride cloud id>" \
  --room-id "<stride room id>" \
  --project "my-awesome-project" \
  --branch "master" \
  --ref "123" \
  --url "http://www.google.com/" \
  --status "success"

```

### CREDITS

- https://github.com/tj/commander.js/
- https://github.com/njl07/rx-http-request
