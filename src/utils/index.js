import { execSync } from 'child_process';
import fs from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

export function getDirName() {
  const __filename = fileURLToPath(import.meta.url);
  return dirname(__filename);
}

export const executeCommand = (dir, command) => {
  execSync(`cd ${dir} && ${command}`, { stdio: 'inherit' });
};

export const copyFile = (destinationPath, fileName) => {
  const sourcePath = path.join(getDirName(), `../templates/${fileName}`);

  fs.copyFile(sourcePath, destinationPath, (err) => {
    if (err) {
      console.error(`Error copying file: ${err.message}`);
      return;
    }
  });
};

export const copyDir = (destinationPath, fileName) => {
  const sourcePath = path.join(getDirName(), `../templates/${fileName}`);

  fs.cpSync(sourcePath, destinationPath, { recursive: true }, (err) => {
    if (err) {
      console.error(`Error copying file: ${err.message}`);
      return;
    }
  });
};

export const removeDir = (dir) => {
  fs.rmSync(dir, { recursive: true, force: true }, (err) => {
    if (err) {
      console.error(`Error removing directory: ${err.message}`);
      return;
    }
  });
};

export const addScriptsInRootPackageJson = (dir) => {
  const scripts = {
    'android:connect': 'adb reverse tcp:8081 tcp:8081',
    'list:ios-devices': 'xcrun xctrace list devices',
    'check-env:mobile': `./check-env.sh .env .env.template'`,
    prepare: 'husky install',
  };

  const packageJsonPath = path.join(dir, 'package.json');

  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

  packageJson.scripts = { ...packageJson.scripts, ...scripts };

  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
};
