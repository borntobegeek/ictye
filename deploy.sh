#!/bin/sh

echo "Switching to branch master"
git checkout master

echo "Building app"
npm run build

echo "Deploying files to server"
rsync -avP build/ adam@icannotthankyouenough.com:/var/www/icannotthankyouenough.com/
echo "Deployment complete"