## Description

<b>Base Repository containing:</b>
<ul>
    <li>Initial config of a react+redux project</li>
    <li>lint configuration</li>
    <li>Ant Design components/layout</li>
    <li>Basic user sign in/ sign up screens with routes</li>
</ul>

## Cloning this repo to another git repository

<ul>
    <li>Create a new repository on github</li>
    <li>Go to the terminal and navigate to the local directory with the existing project</li>
    <li>Now in the terminal type: git push https://github.com/accountname/new-repo.git +old-repo-branch:master
        <ul>
            <li>"master" - is the master branch in the new repository.</li>
            <li>"old-repo-branch" - is the branch that you want to use.</li>
            <ul>
                <li>In case it was a master branch, the command would be +master:master</li>
            </ul>
        </ul>
    </li>
</ul>



## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Lint check

```bash
# check for lint errors
$ npm run lint:check

# auto format files with lint rules
$ npm run lint:fix
```