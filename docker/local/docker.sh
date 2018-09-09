#!/usr/bin/env bash

# Utils functions
. ./../utils.sh
utils.environment $1 $2

# Menu options
if [[ "$1" == "up" ]]; then
    utils.printer "Starting services"
    docker-compose up
elif [[ "$1" == "restart" ]]; then
    utils.printer "Restart services"
    docker-compose restart
elif [[ "$1" == "stop" ]]; then
    utils.printer "Stop services"
    docker-compose stop
elif [[ "$1" == "rm" ]]; then
    utils.printer "Remove services"
    docker-compose rm
elif [[ "$1" == "ps" ]]; then
    utils.printer "Show all running containers"
    docker-compose ps $2
elif [[ "$1" == "sh" ]]; then
    utils.printer "Connect to webpack sh shell"
    docker-compose exec webpack sh
elif [[ "$1" == "logs" ]]; then
    utils.printer "Showing logs of webpack container..."
    if [[ -z "$3" ]]; then
        docker-compose logs -f webpack
    else
        docker-compose logs -f --tail=$3 webpack
    fi
else
    utils.printer "Service names: webpack"
    utils.printer "Params between {} are optional"
    utils.printer "Usage: docker.sh [ps|up|restart|stop|rm|sh|logs|help]"
    echo -e "ps --> List docker services"
    echo -e "up --> Run services"
    echo -e "restart --> Restart services"
    echo -e "stop --> Stop services"
    echo -e "rm --> Remove services"
    echo -e "sh --> Connect to \"webpack\" service shell"
    echo -e "logs {n_last_lines} --> Show \"webpack\" server logs"
    echo -e "help --> Show menu options"
fi
