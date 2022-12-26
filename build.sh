#!/bin/bash
pm2 describe Backend::app > /dev/null
RUNNING=$?

if [ "${RUNNING}" -ne 0 ]; then
  pm2 start ./dist/src/server.js --name Backend::app
else
  pm2 restart Backend::app
fi;