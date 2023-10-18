#!/bin/bash

MY_PATH="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
SITE_PATH=$MY_PATH

fullpath=$1
dirpath=$( dirname $1 )
sourcefile=$( basename $1 )
targetfile=$(echo "$sourcefile" | cut -f 1 -d '.')'.html'

lastUpdated=$( git log -1 --format="%ci" -- $fullpath | cut -f 1 -d ' ' )
creationDate=$( git log --format="%ai" -- $fullpath | tail -1 | cut -f 1 -d ' ' )

echo Processing: $fullpath

rm $dirpath/$targetfile
pandoc $fullpath -o $dirpath/$targetfile --standalone --css "./css/site.css" --css "./css/cv.css" --variable=lastUpdated:$lastUpdated --variable=creationDate:$creationDate

exit 0
