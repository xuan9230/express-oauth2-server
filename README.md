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

3. Setup web server to server index.html
   ```
   npm install --save express
   mkdir public
   touch public/index.html
   touch server.js
   ```

4. Setup webpack and hot reload
   ```
   npm install --save-dev webpack webpack-dev-middleware webpack-hot-middleware
   mkdir app
   touch app/index.js
   ```

5. Configure npm start to
   ```
   nodemon --watch server.js server.js
   ```

6. Install dev dependencies
   ```
   npm install --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react babel-preset-stage-0 postcss-loader precess autoprefixer style-loader css-loader
   ```

7. Install React
   ```
   npm install --save react react-dom
   ```
