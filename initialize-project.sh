#!/bin/bash

cd "$(dirname "$0")"

# Adjust these variables to your project
CODE_NAME="example-project-backend"
READABLE_NAME="Example project - Backend"
REPO_URL="git@gitlab.com:23people.io/our-services/example-project-backend.git"

function ask_confirmation() {
    read -p "Continue (Y/n)? " choice
    case "$choice" in 
        ""|y|Y) printf "\n";; # Continue
        n|N) printf "Cancelled\n"; exit;;
        *) printf "Invalid option\n"; ask_confirmation;;
    esac
}

function initialize() {
    for VAR_NAME in "$@"; do
        local VAR_VALUE="${!VAR_NAME}"

        local SEARCH="{{INITIALIZEME_${VAR_NAME}}}"

        printf "Replacing \"$SEARCH\" with \"$VAR_VALUE\"\n"
        grep -rl "$SEARCH" . | xargs sed -i '' -e "s;$SEARCH;$VAR_VALUE;g"
    done

    printf "\nDone! You can delete this file now.\n"
}

printf "This script will replace placeholder values like \"{{INITIALIZEME_*}}\" with the proper values\n"
ask_confirmation

initialize CODE_NAME READABLE_NAME REPO_URL
