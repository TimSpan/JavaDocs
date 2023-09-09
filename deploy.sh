#!/usr/bin/env sh
# 确保脚本抛出遇到的错误
set -e
# 生成静态文件
npm run build
# 进入生成的文件夹
cd build
# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME
git init
git add -A
git commit -m 'bash_update'
# 如果发布到 https://<USERNAME>.github.io
git push -f git@gitee.com:timspan/java-docs.git main:pages

cd -