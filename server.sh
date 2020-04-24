#!/bin/bash
cd $( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )

yarn build
pm2 start npm --name ${PWD##*/} -- run serve
