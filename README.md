# Bappo Playground

## Steps
1. Create github repo
```
echo "# Bappo Playground" >> README.md
git init
git add README.md
git remote add origin {repo}
git commit -m 'first commit'
git push -u origin master
```

2. Initialize project
```
npm init
```

3. Setup web server
```
npm install --save express
mkdir public
touch public/index.html
touch server.js
```
Setup express to serve index.html

4. Setup webpack
```
npm install --save-dev webpack webpack-dev-middleware webpack-hot-middleware
mkdir app
touch app/index.js
```
Configure server.js
Change npm start to nodemon --watch server.js server.js

5. Install dependencies
```
npm install --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react babel-preset-stage-0 postcss-loader precess autoprefixer
```

6. Install React
```
npm install --save react react-dom
```
