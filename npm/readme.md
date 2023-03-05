# create package.json
npm init 
npm init --yes 

# edit registry
npm config list --json
npm config get registry
npm config set registry xxxx
npm config edit

# install package
npm install 
npm i 
--> when you install the package successfully,
1. create node_modules
2. create dependency in package.json
3. generate package download url in package-lock
npm i <pkg>@<version>
-->globle install
npm i -g

# delete package
npm uninstall 
npm un
npm un -g

# update package
npm outdated --> check whether it has some packages can be updated
npm update 
## npm-check-update
npm i npm-check-updates -g
npm-check-updates
ncu -u

# version
^4.6.11 , when the package has updated, you can update its secondary version and patch version]=
~4.6.11 , when the package has updated, you can only update its patch version
#check version
npm list --depth <num>
npm list -g

# view package information
npm view <package-name> [labels...]

# devDependency / dependency
--> devDependency
npm install --save-dev 
npm install -D
--> Dependency
npm install --prod

# publish package
npm init
npm login 
npm publish
npm version major/ minor/ patch
-- if you want to revert the publish , should be within 24hrs
npm unpublish <pkg> --force

# npx
1. install the package temporary
npx create-react-app
2. execute local package directions
npx nodemon index.js