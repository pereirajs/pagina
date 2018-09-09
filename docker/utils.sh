#!/usr/bin/env bash

# Printer with shell colors
function utils.printer {
  # BASH COLORS
  GREEN='\033[0;32m'
  RESET='\033[0m'
  if [[ ! -z "$2" ]]; then
    # print new line before
    echo ""
  fi
  echo -e "${GREEN}$1${RESET}"
}


# Prepare environment
function utils.environment {
  utils.printer "Preparing environment"
  export COMPOSE_PROJECT_NAME=pereirajs
  export PERMISSIONS=$(id -u):$(id -g)
  if [[ -z "$2" ]]; then
      export COMMAND_SCRIPT=build:dev:server
  else
      export COMMAND_SCRIPT=$2
  fi
  echo $COMMAND_SCRIPT
}