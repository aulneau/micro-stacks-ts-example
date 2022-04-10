import 'cross-fetch/polyfill'
import {GaiaHubConfig, generateGaiaHubConfig, putFile, PutFileOptions} from 'micro-stacks/storage';

async function run() {
    const path = 'file.json';
    const privateKey = '2e0f1b1b5b2dd054fcc176d5b8e82e0425cec26e555d108298a7e16a8853e7a9';
    const gaiaHubConfig: GaiaHubConfig = await generateGaiaHubConfig({
        privateKey,
        gaiaHubUrl: 'https://hub.blockstack.org'
    })
    const fileContent = JSON.stringify({'interest': 'skiing', 'age': 22, 'gender': 'male'});
    const encryptOptions: PutFileOptions = {encrypt: true, gaiaHubConfig, privateKey};
    const publicURL = await putFile(path, fileContent, encryptOptions);
    console.log(publicURL);
}

run().then(console.log).catch(console.error)
