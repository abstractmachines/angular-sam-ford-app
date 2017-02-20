#!/bin/bash

OUTPUT="(scp -rp ~/angular-projects/samFordAppProduction/ username@host.com:./public/ 2>/dev/null)"

echo "{$OUTPUT}"
