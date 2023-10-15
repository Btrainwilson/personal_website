#!/bin/bash

MY_PATH="."
SITE_PATH=$MY_PATH/site
find $SITE_PATH -name *.md
find $SITE_PATH -name *.md -exec $MY_PATH/process_md_file.sh {} \;

exit 0
