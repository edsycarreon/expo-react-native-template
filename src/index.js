#!/usr/bin/env node

import chalk from 'chalk';
import { execSync } from 'child_process';
import { program } from 'commander';
import inquirer from 'inquirer';
import ora from 'ora';
import { addScriptsInRootPackageJson, copyDir, copyFile, executeCommand } from './utils/index.js';

program
  .name('React Native Starter with Expo')
  .description('A starter script to create a new React Native project with Expo')
  .version('1.0.6');

program
  .command('create [app_name]')
  .description('create nx workspace with react-native')
  .action(async (app_name) => {
    if (!app_name) {
      const result = await inquirer.prompt([
        {
          type: 'input',
          name: 'app_name',
          message: 'Enter the app name',
        },
      ]);

      app_name = result.app_name;
    }

    const currentPwd = process.cwd();
    const workspaceDirectory = `${currentPwd}/${app_name}`;

    console.log(chalk.green(`Creating Expo project in ${workspaceDirectory}!`));
    const spinner1 = ora().start('Creating Expo workspace');

    execSync(`cd ${currentPwd} && npx create-expo-app ${app_name} --template default@sdk-52`, {
      stdio: 'inherit',
    });
    spinner1.succeed('Expo project created');

    const spinner2 = ora().start('Installing additional dependencies...');

    executeCommand(
      workspaceDirectory,
      `npx expo install -- --save-dev husky prettier@3.3.2 @typescript-eslint/parser@6.21.0 eslint-config-airbnb-typescript@17.1.0 eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-react-perf eslint-plugin-sonarjs@0.25.1 @tanstack/eslint-plugin-query eslint-plugin-tailwindcss eslint-config-prettier @typescript-eslint/eslint-plugin@6.13.2 eslint-plugin-import eslint-plugin-sort-destructure-keys eslint-plugin-sort-keys-fix eslint-plugin-prettier prettier-plugin-tailwindcss eslint-import-resolver-typescript @swc-node/register@~1.8.0 @types/lodash`,
      { stdio: 'inherit' },
    );
    executeCommand(
      workspaceDirectory,
      `npx expo install tailwindcss twrnc react-native-keyboard-aware-scroll-view react-native-modal dayjs zustand jotai jotai-optics axios lodash react-hook-form react-native-url-polyfill zod zod-validation-error @gorhom/bottom-sheet @hookform/resolvers @tanstack/query-sync-storage-persister @tanstack/query-core @tanstack/react-query @tanstack/react-query-persist-client`,
      { stdio: 'inherit' },
    );
    spinner2.succeed('Dependencies sucessfully installed');

    const spinner3 = ora().start('Adding files');

    copyFile(`${workspaceDirectory}/.prettierrc`, '.prettierrc');
    copyFile(`${workspaceDirectory}/.prettierignore`, '.prettierignore');
    copyFile(`${workspaceDirectory}/.eslintrc.js`, '.eslintrc.js');
    copyFile(`${workspaceDirectory}/tailwind.config.js`, 'tailwind.config.js');
    copyFile(`${workspaceDirectory}/.gitignore`, '.gitignore');
    copyFile(`${workspaceDirectory}/.nvmrc`, '.nvmrc');
    copyFile(`${workspaceDirectory}/.env.d.ts`, '.env.d.ts');
    copyFile(`${workspaceDirectory}/.env.template`, '.env.template');
    copyFile(`${workspaceDirectory}/check-env.sh`, `check-env.sh`);
    copyDir(`${workspaceDirectory}/tailwind`, `tailwind`);

    spinner3.succeed('Files added');

    const spinner4 = ora().start('Creating keystore for Android...');

    executeCommand(
      workspaceDirectory,
      `keytool -genkey -keystore ${workspaceDirectory}/dev.keystore -keyalg RSA -keysize 2048 -validity 10000 -alias dev -dname "cn=Unknown, ou=Unknown, o=Unknown, c=Unknown" -storepass development -keypass development`,
      {
        stdio: 'inherit',
      },
    );

    spinner4.succeed('Keystore created');

    const spinner5 = ora().start('Adding additional scripts in package.json...');
    addScriptsInRootPackageJson(workspaceDirectory);
    spinner5.succeed('Additional scripts added');

    console.log(chalk.green('✅ Your project is ready!'));

    console.log(
      chalk.white(
        'To run your project, navigate to the directory and run one of the following npm commands.',
      ),
    );
    console.log(
      chalk.whiteBright(`
      - cd ${app_name}
      - npm run android
      - npm run ios
      - npm run web
      `),
    );

    console.log(chalk.green('✔ Expo project created successfully!'));
  });

program.parse(process.argv);
