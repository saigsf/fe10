echo "# fe10" >> README.md
git init #初始化
git status #查看要上传的文件
    .gitignore文件内的内容不会被提交
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/saigsf/fe10.git
git push -u origin master