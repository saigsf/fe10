```
echo "# fe10" >> README.md

git init #初始化

git status #查看要上传的文件

    .gitignore文件内的内容不会被提交

git add README.md

git commit -m "first commit"

git remote add origin https://github.com/saigsf/fe10.git

git push -u origin master

username saigsf

password gsf137950fdggn1
```

##创建并且换到分支
    git checkout -b name

##创建分支
    git branch name #name:分支名字 ，创建分支
    git branch #不加名字就是把分支列出来
    git checkout name #切换分支
##查看命令帮助
    git -help 